import { ImageResponse } from "next/og";
import { join } from "node:path";
import { readFile } from "node:fs/promises";

export const alt =
  "Okenmor Tilije Foundation — Empowering Communities & Education in Delta State";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  // Load his photo from the public folder
  const photoData = await readFile(
    join(process.cwd(), "public", "img10.jpg"),
    "base64"
  );
  const photoSrc = `data:image/jpeg;base64,${photoData}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          fontFamily: "sans-serif",
          background: "#0f172a",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* === Left: His Photo (40% width) === */}
        <div
          style={{
            width: "42%",
            height: "100%",
            position: "relative",
            display: "flex",
            overflow: "hidden",
          }}
        >
          {/* Photo */}
          <img
            src={photoSrc}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
            }}
          />
          {/* Fade-right gradient over the photo edge */}
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              width: "120px",
              background:
                "linear-gradient(to right, transparent, #0f172a)",
              display: "flex",
            }}
          />
        </div>

        {/* === Right: Branding Content (60% width) === */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "50px 56px 50px 36px",
            background:
              "linear-gradient(135deg, #0f172a 0%, #1a2f6e 100%)",
            position: "relative",
          }}
        >
          {/* Decorative circles */}
          <div
            style={{
              position: "absolute",
              top: "-60px",
              right: "-60px",
              width: "280px",
              height: "280px",
              borderRadius: "50%",
              border: "2px solid rgba(225,29,72,0.2)",
              display: "flex",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-40px",
              left: "-40px",
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              border: "2px solid rgba(234,88,12,0.15)",
              display: "flex",
            }}
          />

          {/* Logo badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "72px",
              height: "72px",
              borderRadius: "50%",
              border: "3px solid #e11d48",
              background: "#ffffff",
              marginBottom: "24px",
            }}
          >
            <div
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "50%",
                background: "#1e3a8a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                fontSize: "15px",
                fontWeight: "900",
                letterSpacing: "-0.5px",
              }}
            >
              OT
            </div>
          </div>

          {/* Foundation Name */}
          <div
            style={{
              fontSize: "42px",
              fontWeight: "900",
              color: "#ffffff",
              lineHeight: 1.1,
              letterSpacing: "-1px",
              marginBottom: "8px",
            }}
          >
            OKENMOR TILIJE
          </div>

          {/* "FOUNDATION" in accent color */}
          <div
            style={{
              fontSize: "20px",
              fontWeight: "800",
              color: "#ea580c",
              letterSpacing: "5px",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            FOUNDATION
          </div>

          {/* Divider */}
          <div
            style={{
              width: "60px",
              height: "3px",
              background: "#e11d48",
              marginBottom: "20px",
              display: "flex",
            }}
          />

          {/* Tagline */}
          <div
            style={{
              fontSize: "17px",
              color: "rgba(255,255,255,0.75)",
              fontWeight: "500",
              lineHeight: 1.6,
            }}
          >
            Empowering Communities · Education
          </div>
          <div
            style={{
              fontSize: "17px",
              color: "rgba(255,255,255,0.75)",
              fontWeight: "500",
              lineHeight: 1.6,
            }}
          >
            Youth Development · Delta State, Nigeria
          </div>

          {/* URL slug */}
          <div
            style={{
              marginTop: "28px",
              fontSize: "14px",
              color: "rgba(255,255,255,0.4)",
              fontWeight: "600",
              letterSpacing: "1px",
            }}
          >
            okenmortilije.org
          </div>
        </div>

        {/* Bottom red accent bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "5px",
            background: "linear-gradient(90deg, #e11d48, #ea580c)",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
