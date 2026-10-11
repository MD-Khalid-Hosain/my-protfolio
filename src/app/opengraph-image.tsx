import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} | Software Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const tech = ["Laravel", "Next.js", "React", "Node.js", "TypeScript"];

export default function OpenGraphImage() {
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
          color: "#f2f5f8",
          background:
            "radial-gradient(ellipse 900px 420px at 50% -10%, rgba(45,226,198,0.28), transparent), radial-gradient(ellipse 500px 400px at 100% 80%, rgba(90,169,255,0.2), transparent), #07090c",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #2de2c6, #5aa9ff)",
              color: "#07090c",
              fontSize: 20,
              fontWeight: 700,
            }}
          >
            KH
          </div>
          <div style={{ fontSize: 26, fontWeight: 600 }}>{profile.name}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>
            Software Engineer Building
          </div>
          <div
            style={{
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
              color: "#2de2c6",
            }}
          >
            Scalable Web Applications
          </div>
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          {tech.map((name) => (
            <div
              key={name}
              style={{
                display: "flex",
                padding: "10px 20px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.04)",
                fontSize: 22,
                color: "#c9d2dd",
              }}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
