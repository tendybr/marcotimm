import React from "react";
import { useCurrentFrame, interpolate, interpolateColors, spring } from "remotion";
import { GlassPanel } from "./components/GlassPanel";

export const Scene5: React.FC = () => {
  const frame = useCurrentFrame();

  // frame 0 inside Scene 5 is global frame 540

  // Morph color from blue to green (20 frames)
  const strokeColor = interpolateColors(
    frame,
    [0, 20],
    ["#00f0ff", "#39ff14"]
  );

  // Check bounce
  const checkScale = spring({
    frame,
    fps: 30,
    config: { damping: 8 }
  });

  // Green pulse ring
  const pulseScale = interpolate(frame, [0, 30], [0.5, 2], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const pulseOpacity = interpolate(frame, [0, 20], [0.8, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Status Text
  const textY = interpolate(frame, [10, 30], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const textOpacity = interpolate(frame, [10, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // Notice we don't fade in the GlassPanel because it is already mounted in Scene 4. 
        // We will just draw ON TOP of Scene 4 in the main composition, or recreate the panel.
        // It's cleaner to recreate the panel here exactly in the center to overlay it perfectly.
      }}
    >
      <div style={{ position: "relative" }}>
        {/* The pulse ring behind */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          backgroundColor: "rgba(57, 255, 20, 0.4)",
          transform: `translate(-50%, -50%) scale(${pulseScale})`,
          opacity: pulseOpacity,
          filter: "blur(10px)"
        }} />

        <GlassPanel
          style={{
            width: "200px",
            height: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            backgroundColor: "rgba(57, 255, 20, 0.05)",
            boxShadow: `0 8px 32px 0 rgba(57, 255, 20, 0.1)`,
            border: `1px solid rgba(57, 255, 20, 0.15)`
          }}
        >
          {/* Static full circle in morphed color */}
          <svg width="120" height="120" viewBox="0 0 100 100" style={{ position: "absolute" }}>
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke={strokeColor}
              strokeWidth="4"
            />
          </svg>
          
          {/* Animated checkmark */}
          <svg
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#39ff14"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              transform: `scale(${checkScale})`,
              filter: "drop-shadow(0 0 10px rgba(57, 255, 20, 0.8))"
            }}
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </GlassPanel>
      </div>

      <div style={{
        marginTop: "40px",
        fontFamily: '"Inter", sans-serif',
        fontSize: "32px",
        fontWeight: "bold",
        color: "#39ff14",
        textShadow: "0 0 15px rgba(57, 255, 20, 0.8)",
        opacity: textOpacity,
        transform: `translateY(${textY}px)`,
        letterSpacing: "8px"
      }}>
        PROCESSING COMPLETE
      </div>
    </div>
  );
};
