"use client";

import { useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import styles from "./home.module.css";

// A still from a video with a play button. The clip itself is only fetched when someone
// presses play; it then plays muted, in place, and loops. Pressing again pauses it.
export default function VideoStill({
  poster,
  src,
  alt,
  seconds,
  sizes,
}: {
  poster: string;
  src: string;
  alt: string;
  /** Length of the clip, for the progress bar (recorded clips may not report it). */
  seconds: number;
  sizes: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  function toggle() {
    if (!started) {
      setStarted(true);
      return;
    }
    const video = ref.current;
    if (!video) return;
    if (video.paused) void video.play();
    else video.pause();
  }

  return (
    <div className={styles.pipelineMedia}>
      {started ? (
        <video
          ref={ref}
          className={styles.pipelineShot}
          src={src}
          poster={poster}
          width={960}
          height={600}
          autoPlay
          muted
          loop
          playsInline
          aria-label={alt}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onTimeUpdate={(e) => setProgress((e.currentTarget.currentTime % seconds) / seconds)}
        />
      ) : (
        <Image src={poster} alt={alt} width={1040} height={650} sizes={sizes} className={styles.pipelineShot} />
      )}
      <button
        type="button"
        className={styles.videoButton}
        onClick={toggle}
        aria-label={playing ? "Pause the video" : "Play the video"}
        data-playing={playing ? "true" : "false"}
      >
        <span className={styles.videoPlay} />
      </button>
      <span
        className={styles.videoBar}
        style={{ "--progress": `${Math.round(progress * 1000) / 10}%` } as CSSProperties}
        aria-hidden="true"
      />
    </div>
  );
}
