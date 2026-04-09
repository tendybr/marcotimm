import React from "react";
import { useCurrentFrame, interpolate, spring } from "remotion";
import { GlassPanel } from "./GlassPanel";

export const FloatingWindow: React.FC<{
  startFrame: number;
  endX: number;
  endY: number;
  delay?: number;
  width?: number;
  height?: number;
  children?: React.ReactNode;
}> = ({ startFrame, endX, endY, delay = 0, width = 300, height = 200, children }) => {
  const frame = useCurrentFrame();
  const adjustedFrame = frame - startFrame - delay;

  // Animation for translations
  const translateX = interpolate(adjustedFrame, [0, 50], [0, endX], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  
  const translateY = interpolate(adjustedFrame, [0, 50], [0, endY], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Scale animation for popping up
  const scale = spring({
    frame: adjustedFrame,
    fps: 30,
    config: {
      damping: 12,
    },
  });

  if (adjustedFrame < 0) {
    return null;
  }

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: `translate(-50%, -50%) translate(${translateX}px, ${translateY}px) scale(${scale})`,
        width,
        height,
      }}
    >
      <GlassPanel style={{ width: "100%", height: "100%", padding: "16px" }}>
        {children}
      </GlassPanel>
    </div>
  );
};
