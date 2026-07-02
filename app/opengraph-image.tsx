import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

// Branded 1200×630 social-share card. Next applies this to both
// og:image and twitter:image automatically (with an absolute URL via
// metadataBase), fixing blank link previews on WhatsApp / LinkedIn / X.
export const runtime = "edge";
export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(120% 120% at 75% 0%, #16205a 0%, #0a1030 45%, #070b16 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 30,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#8fd5c2",
          }}
        >
          Global Import &amp; Export
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 104,
            fontWeight: 800,
            lineHeight: 1.02,
          }}
        >
          {site.name}
        </div>
        <div style={{ marginTop: 28, fontSize: 40, color: "#dcf3ec" }}>
          {site.tagline}
        </div>
        <div
          style={{
            marginTop: "auto",
            fontSize: 28,
            color: "rgba(255,255,255,0.6)",
          }}
        >
          {`${site.url.replace("https://", "")}  ·  ${site.address.short}`}
        </div>
      </div>
    ),
    { ...size }
  );
}
