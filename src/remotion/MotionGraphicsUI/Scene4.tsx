import React from "react";
import { useCurrentFrame, interpolate, spring } from "remotion";
import { GlassPanel } from "./components/GlassPanel";

export const Scene4: React.FC = () => {
  const frame = useCurrentFrame();

  // Fade In (frames 0-10 inside Scene4 which is globally 450-460)
  const opacity = interpolate(frame, [0, 10], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Scale In
  const scale = spring({
    frame,
    fps: 30,
    config: { damping: 14 }
  });

  // Loading Ring Progress (0 to 100%)
  const strokeDashoffset = interpolate(frame, [10, 80], [283, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Rotation
  const rotate = frame * 3;

  // The last 10 frames fade out slightly to give room to Scene 5? 
  // Wait, Scene 5 morphs the check. The plan says: "Em vez de substituir na hora, transmutamos a cor".
  // So Scene 4 and 5 might share logic or Scene 4 stays and Scene 5 renders on top.
  // We'll let Scene 4 persist and just provide the ring.

  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity,
      }}
    >
      <GlassPanel
        style={{
          width: "200px",
          height: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          transform: `scale(${scale})`,
        }}
      >
        <svg width="120" height="120" viewBox="0 0 100 100" style={{ transform: `rotate(${rotate}deg)` }}>
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="rgba(0, 240, 255, 0.2)"
            strokeWidth="4"
          />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#00f0ff"
            strokeWidth="4"
            strokeDasharray="283"
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            style={{
              filter: "drop-shadow(0 0 8px rgba(0, 240, 255, 0.8))"
            }}
          />
        </svg>
      </GlassPanel>
    </div>
  );
};
