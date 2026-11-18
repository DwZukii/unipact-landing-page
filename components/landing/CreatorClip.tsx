"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import styles from "./clip.module.css";

// Every clip on the page, so turning the sound on for one can mute the rest.
const clips = new Set<HTMLVideoElement>();

// A short looping clip in a phone frame. It plays muted while at least half of it is on
// screen and pauses when scrolled away; nothing is downloaded until then. Tapping the
// video pauses it, and the speaker button turns the sound on. With reduced motion or
// data saver on, it waits for a tap instead of playing by itself.
export default function CreatorClip({
  src,
  poster,
  title,
  description,
}: {
  src: string;
  poster: string;
  /** Short name used in the button labels, e.g. "Interview with captions". */
  title: string;
  /** What the clip shows, for screen readers. */
  description: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  // Set when the viewer pauses the clip, so scrolling back doesn't restart it.
  const pausedByViewer = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    clips.add(video);
    video.muted = true;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    if (reduceMotion || saveData) return () => void clips.delete(video);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !pausedByViewer.current) {
          // Rejected when the browser blocks autoplay (e.g. iPhone low power mode); the
          // play button stays on the poster.
          video.play().catch(() => {});
        } else if (!entry.isIntersecting) {
          video.pause();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(video);
    return () => {
      observer.disconnect();
      clips.delete(video);
    };
  }, []);

  function togglePlay() {
    const video = ref.current;
    if (!video) return;
    if (video.paused) {
      pausedByViewer.current = false;
      void video.play();
    } else {
      pausedByViewer.current = true;
      video.pause();
    }
  }

  function toggleSound() {
    const video = ref.current;
    if (!video) return;
    const soundOn = video.muted;
    if (soundOn) {
      clips.forEach((other) => {
        if (other !== video) other.muted = true;
      });
      pausedByViewer.current = false;
      if (video.paused) void video.play();
    }
    video.muted = !soundOn;
  }

  return (
    <div className={styles.frame}>
      <video
        ref={ref}
        className={styles.video}
        src={src}
        poster={poster}
        width={450}
        height={800}
        preload="none"
        muted
        loop
        playsInline
        disablePictureInPicture
        aria-label={description}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onVolumeChange={(e) => setMuted(e.currentTarget.muted)}
      />
      <button
        type="button"
        className={styles.toggle}
        onClick={togglePlay}
        aria-label={playing ? `Pause: ${title}` : `Play: ${title}`}
        data-playing={playing ? "true" : "false"}
      >
        <span className={styles.icon} />
      </button>
      <button
        type="button"
        className={styles.sound}
        onClick={toggleSound}
        aria-label={muted ? `Turn on sound: ${title}` : `Turn off sound: ${title}`}
      >
        {muted ? <VolumeX size={18} aria-hidden="true" /> : <Volume2 size={18} aria-hidden="true" />}
      </button>
    </div>
  );
}
