import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: 80,
        background: "#ffffff",
        color: "#0a0a0a",
      }}
    >
      <div style={{ fontSize: 72, fontWeight: 600, letterSpacing: -2 }}>{profile.name}</div>
      <div style={{ fontSize: 36, color: "#737373", marginTop: 12 }}>
        {`${profile.role} · ${profile.location}`}
      </div>
    </div>,
    size,
  );
}
