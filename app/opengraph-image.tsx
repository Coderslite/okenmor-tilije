import { ImageResponse } from "next/og";

export const alt =
  "Okenmor Tilije Foundation — Empowering Communities & Education in Delta State";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 55%, #0f172a 100%)",
          padding: "60px 72px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background decorative circles */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "420px",
            height: "420px",
            borderRadius: "50%",
            border: "3px solid rgba(225,29,72,0.25)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "-40px",
            right: "-40px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(225,29,72,0.08)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-60px",
            left: "-60px",
            width: "260px",
            height: "260px",
            borderRadius: "50%",
            border: "2px solid rgba(234,88,12,0.2)",
            display: "flex",
          }}
        />

        {/* Logo badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            border: "4px solid #e11d48",
            background: "#ffffff",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "50%",
              background: "#1e3a8a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              fontSize: "22px",
              fontWeight: "900",
              letterSpacing: "-1px",
            }}
          >
            OT
          </div>
        </div>

        {/* Foundation name */}
        <div
          style={{
            fontSize: "52px",
            fontWeight: "900",
            color: "#ffffff",
            lineHeight: 1.1,
            letterSpacing: "-1px",
            marginBottom: "12px",
          }}
        >
          OKENMOR TILIJE
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "28px",
            fontWeight: "700",
            color: "#ea580c",
            letterSpacing: "4px",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}
        >
          FOUNDATION
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "20px",
            color: "rgba(255,255,255,0.75)",
            fontWeight: "500",
            lineHeight: 1.5,
            maxWidth: "680px",
          }}
        >
          Empowering Communities · Education · Youth Development · Delta State, Nigeria
        </div>

        {/* Bottom red accent line */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "6px",
            background: "linear-gradient(90deg, #e11d48, #ea580c)",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
