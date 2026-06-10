import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          borderRadius: "50%",
        }}
      >
        {/* Outer red ring */}
        <div
          style={{
            position: "absolute",
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            border: "2.5px solid #e11d48",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Navy inner fill with "OT" initials */}
          <div
            style={{
              width: "22px",
              height: "22px",
              borderRadius: "50%",
              background: "#1e3a8a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              fontSize: "8px",
              fontWeight: "900",
              letterSpacing: "-0.5px",
              fontFamily: "sans-serif",
            }}
          >
            OT
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
