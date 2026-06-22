import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark" | "flat";
}

/**
 * Geometric, accurate vector SVG reproduction of the Demystifying Smiles (DS) logo.
 * Left: Blue 'D' bracket shape (#B4D7FF)
 * Right: Orange 'S' block shape (#FFD9B8)
 * Text: "DEMYSTIFYING SMILES" (#314860 or white depending on variant)
 */
export default function Logo({ className = "", showText = true, size = "md", variant = "light" }: LogoProps) {
  // Sizing definitions
  const dimensions = {
    sm: { logoHeight: 28, textClass: "text-[10px] tracking-[0.16em]" },
    md: { logoHeight: 38, textClass: "text-[13px] tracking-[0.2em]" },
    lg: { logoHeight: 52, textClass: "text-[18px] tracking-[0.24em]" }
  };

  const current = dimensions[size];

  // Colors based on variants
  const blueColor = "#318ecb";
  const orangeColor = "#d3621c";
  const textColor = variant === "dark" ? "#ffffff" : "#314860";

  return (
    <div className={`inline-flex flex-col items-center justify-center ${className}`}>
      {/* SVG Icon part - matching the block letters exactly */}
      <svg
        height={current.logoHeight}
        viewBox="0 0 160 85"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="select-none"
      >
        {/* Left Shape: Precise Blue Blocky Bracket ']' - y is 12 to 72, x is 12 to 68 */}
        <path
          d="M 12,12 L 68,12 L 68,72 L 12,72 L 12,60 L 56,60 L 56,24 L 12,24 Z"
          fill={blueColor}
        />
        
        {/* Right Shape: Precise Orange Blocky 'S' - y is 12 to 72, x is 76 to 148 */}
        <path
          d="M 76,12 L 148,12 L 148,24 L 92,24 L 92,36 L 148,36 L 148,72 L 76,72 L 76,60 L 132,60 L 132,48 L 76,48 Z"
          fill={orangeColor}
        />
      </svg>

      {/* Underneath Text Logo - Cormorant / Playfair serif style */}
      {showText && (
        <span
          className={`font-serif font-extrabold uppercase mt-1 px-1 text-center transition-colors duration-200 ${current.textClass}`}
          style={{ color: textColor }}
        >
          Demystifying Smiles
        </span>
      )}
    </div>
  );
}
