import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const alt = "UniPact: vetted student teams for software and digital marketing in Malaysia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const mark = await readFile(path.join(process.cwd(), "public", "logo-mark.png"));
  const markSrc = `data:image/png;base64,${mark.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0A1748",
          color: "#FFFFFF",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {/* The mark is dark, so it sits on a white tile like the site's light navbar. */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 112,
              height: 112,
              borderRadius: 24,
              background: "#FFFFFF",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={markSrc} alt="" width={84} height={84} style={{ objectFit: "contain" }} />
          </div>
          <div style={{ display: "flex", fontSize: 64, fontWeight: 800, letterSpacing: 2 }}>
            <span>UNI</span>
            <span style={{ color: "#00AEEF" }}>PACT</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.08 }}>
            Vetted student teams for software &amp; marketing
          </div>
          <div style={{ fontSize: 34, color: "#B8C4E6" }}>
            Verified Malaysian university students. Pay per approved milestone.
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 30, color: "#00AEEF", fontWeight: 700 }}>www.unipact.my</div>
      </div>
    ),
    { ...size },
  );
}
