import React from "react";
import { Sequence, useCurrentFrame, interpolate } from "remotion";
import { Scene1 } from "./Scene1";
import { Scene2 } from "./Scene2";

export const Scene3: React.FC = () => {
  const frame = useCurrentFrame();
  
  // From frame 300 to 450, we scale the entire container up to create a fly-through
  // We use frames 0-150 relative to Scene3 start (which is frame 300 globally in index)
  
  const scale = interpolate(frame, [0, 150], [1, 5], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Fade out effect at the end of the fly-through
  const opacity = interpolate(frame, [120, 150], [1, 0], {
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
        alignItems: "center",
        justifyContent: "center",
        transform: `scale(${scale})`,
        opacity: opacity,
        transformOrigin: "center center",
      }}
    >
      {/* We re-render the scenes inside this scalable container so they appear to fly backwards */}
      {/* The timeline handles their appearance via delays */}
      <Sequence from={-300} name="Scene1_clone">
        <Scene1 />
      </Sequence>
      
      <Sequence from={-150} name="Scene2_clone">
        <Scene2 />
      </Sequence>
    </div>
  );
};
