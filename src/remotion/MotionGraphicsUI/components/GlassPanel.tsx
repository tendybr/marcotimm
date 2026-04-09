import React from "react";

export const GlassPanel: React.FC<{
  children?: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ children, style }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.03)",
        backdropFilter: "blur(12px) saturate(150%)",
        border: "1px solid rgba(255, 255, 255, 0.15)",
        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.3)",
        borderRadius: "16px",
        overflow: "hidden",
        ...style,
      }}
    >
      {children}
    </div>
  );
};
