import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { loadFont as loadJetBrainsMono } from "@remotion/google-fonts/JetBrainsMono";
import { loadFont as loadInter } from "@remotion/google-fonts/Inter";

import { Scene1 } from "./Scene1";
import { Scene2 } from "./Scene2";
import { Scene3 } from "./Scene3";
import { Scene4 } from "./Scene4";
import { Scene5 } from "./Scene5";

// Ensure fonts are loaded before text is rendered to prevent flickering
loadJetBrainsMono();
loadInter();

export const MotionGraphicsUI: React.FC = () => {
  return (
    <AbsoluteFill style={{ 
      background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
      overflow: "hidden"
    }}>
      {/* 
        We use an additive rendering approach initially.
        Scene 1 starts at 0.
        Scene 2 starts at 150, while Scene 1 is still technically behind.
      */}
      <Sequence from={0} durationInFrames={300}>
        <Scene1 />
      </Sequence>

      <Sequence from={150} durationInFrames={150}>
        <Scene2 />
      </Sequence>

      {/* 
        Scene 3 scales up the whole container 
        (It visually duplicates Scene 1 and Scene 2 to mimic zooming into them) 
      */}
      <Sequence from={300} durationInFrames={150}>
        <Scene3 />
      </Sequence>

      {/* 
        Scene 4 replaces the screen with the Loading UI 
      */}
      <Sequence from={450} durationInFrames={90}>
        <Scene4 />
      </Sequence>

      {/* 
        Scene 5 displays the Success Checkmark
      */}
      <Sequence from={540} durationInFrames={60}>
        <Scene5 />
      </Sequence>
    </AbsoluteFill>
  );
};
