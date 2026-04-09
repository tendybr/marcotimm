import React from "react";
import { useCurrentFrame, spring, interpolate, random } from "remotion";
import { GlassPanel } from "./components/GlassPanel";

const Bar: React.FC<{ index: number; targetHeight: number }> = ({ index, targetHeight }) => {
  const frame = useCurrentFrame();
  
  const height = interpolate(
    frame - (index * 5), 
    [20, 100], 
    [0, targetHeight],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  return (
    <div
      style={{
        width: "30px",
        height: `${height}%`,
        backgroundColor: "#00f0ff",
        boxShadow: "0 0 10px rgba(0, 240, 255, 0.8)",
        borderRadius: "4px 4px 0 0",
        margin: "0 8px"
      }}
    />
  );
};

export const Scene1: React.FC = () => {
  const frame = useCurrentFrame();

  const scale = spring({
    frame,
    fps: 30,
    config: { damping: 12 },
  });

  // Binary numbers logic
  const binaryString = new Array(20).fill(0).map((_, i) => {
    // Generate random binary strings changing every 5 frames
    return Math.floor(random(`binary-${i}-${Math.floor(frame / 5)}`) * 2);
  }).join('');

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ transform: `scale(${scale})` }}>
        <GlassPanel
          style={{
            width: "600px",
            height: "400px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "32px",
          }}
        >
          {/* Header with running binary */}
          <div style={{
            fontFamily: '"JetBrains Mono", monospace',
            color: "#00f0ff",
            textShadow: "0 0 5px rgba(0, 240, 255, 0.5)",
            fontSize: "24px",
            letterSpacing: "4px"
          }}>
            SYS.INIT() {binaryString}
          </div>

          {/* Bar Chart */}
          <div style={{
            display: "flex",
            alignItems: "flex-end",
            height: "200px",
            width: "100%",
            borderBottom: "1px solid rgba(0, 240, 255, 0.3)",
            paddingBottom: "8px"
          }}>
            <Bar index={1} targetHeight={40} />
            <Bar index={2} targetHeight={75} />
            <Bar index={3} targetHeight={50} />
            <Bar index={4} targetHeight={90} />
            <Bar index={5} targetHeight={100} />
            <Bar index={6} targetHeight={65} />
          </div>
        </GlassPanel>
      </div>
    </div>
  );
};
