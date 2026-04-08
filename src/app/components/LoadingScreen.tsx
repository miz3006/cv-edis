"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Fill to 85% quickly, then slow down, then complete
    const t1 = setTimeout(() => setProgress(60), 50);
    const t2 = setTimeout(() => setProgress(85), 400);
    const t3 = setTimeout(() => setProgress(100), 900);
    const t4 = setTimeout(() => setFading(true), 1050);
    const t5 = setTimeout(() => setVisible(false), 1400);
    return () => [t1, t2, t3, t4, t5].forEach(clearTimeout);
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "var(--bg)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100,
        opacity: fading ? 0 : 1,
        transition: "opacity 350ms ease",
        pointerEvents: fading ? "none" : "all",
      }}
    >
      <img
        src="/em.png"
        alt="EM"
        style={{
          height: "44px",
          width: "auto",
          mixBlendMode: "multiply",
          marginBottom: "2rem",
        }}
      />

      {/* Bar track */}
      <div
        style={{
          width: "120px",
          height: "1px",
          background: "var(--divider)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Fill */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "var(--text)",
            transformOrigin: "left",
            transform: `scaleX(${progress / 100})`,
            transition: progress === 0
              ? "none"
              : progress < 100
              ? "transform 600ms cubic-bezier(0.4, 0, 0.2, 1)"
              : "transform 200ms ease-out",
          }}
        />
      </div>
    </div>
  );
}
