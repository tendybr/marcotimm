import React from "react";
import { FloatingWindow } from "./components/FloatingWindow";

export const Scene2: React.FC = () => {
  return (
    <>
      {/* Top Left Window */}
      <FloatingWindow
        startFrame={0}
        delay={0}
        endX={-500}
        endY={-250}
        width={350}
        height={250}
      >
        <div style={{
          color: "#00f0ff",
          fontFamily: '"Inter", sans-serif',
          fontSize: "18px",
        }}>
          DATA CORE ACTIVE
        </div>
        <div style={{
          marginTop: "16px",
          color: "rgba(255, 255, 255, 0.7)",
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: "14px",
          display: "flex",
          flexDirection: "column",
          gap: "8px"
        }}>
          <div>&gt; INITIALIZING NEURAL LINK...</div>
          <div>&gt; OPTIMIZING PATHWAYS...</div>
          <div>&gt; SYNC RATE: 98.4%</div>
        </div>
      </FloatingWindow>

      {/* Bottom Right Window */}
      <FloatingWindow
        startFrame={0}
        delay={10}
        endX={450}
        endY={250}
        width={300}
        height={200}
      >
        <div style={{
          color: "#00f0ff",
          fontFamily: '"Inter", sans-serif',
          fontSize: "18px",
        }}>
          SYSTEM METRICS
        </div>
        <div style={{
          marginTop: "16px",
          color: "rgba(255, 255, 255, 0.7)",
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: "14px",
          display: "flex",
          flexDirection: "column",
          gap: "8px"
        }}>
          <div>CPU: 42%</div>
          <div>MEM: 16GB/64GB</div>
          <div>NET: 1.2GB/s</div>
        </div>
      </FloatingWindow>

      {/* Top Right Window */}
      <FloatingWindow
        startFrame={0}
        delay={20}
        endX={480}
        endY={-200}
        width={250}
        height={250}
      >
        <div style={{
          color: "#00f0ff",
          fontFamily: '"Inter", sans-serif',
          fontSize: "18px",
        }}>
          NODE STATUS
        </div>
        <div style={{ marginTop: "16px" }}>
          <div style={{
            width: "100%",
            height: "8px",
            backgroundColor: "rgba(0, 240, 255, 0.2)",
            borderRadius: "4px",
            overflow: "hidden"
          }}>
            <div style={{
              width: "70%",
              height: "100%",
              backgroundColor: "#00f0ff",
              boxShadow: "0 0 10px rgba(0, 240, 255, 0.8)"
            }} />
          </div>
        </div>
      </FloatingWindow>
    </>
  );
};
