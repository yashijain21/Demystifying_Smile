import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: "light" | "dark" | "flat";
}


export default function Logo({
  className = "",
  showText = true,
  variant = "light",
}: LogoProps) {


  const blueColor = "#318ecb";
  const orangeColor = "#d3621c";


  const textColor =
    variant === "light"
      ? "#ffffff"
      : "#203040";


  return (

    <div
      className={`
        inline-flex
        flex-col
        items-center
        justify-center
        ${className}
      `}
    >


      {/* LOGO ICON */}

      <svg
        viewBox="0 0 160 85"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="
          select-none
          h-[22px]
          sm:h-[28px]
          transition-all
          duration-300
        "
      >

        {/* Blue D */}

        <path
          d="
          M 12,12 
          L 68,12 
          L 68,72 
          L 12,72 
          L 12,60 
          L 56,60 
          L 56,24 
          L 12,24 
          Z
          "
          fill={blueColor}
        />


        {/* Orange S */}

        <path
          d="
          M 76,12 
          L 148,12 
          L 148,24 
          L 92,24 
          L 92,36 
          L 148,36 
          L 148,72 
          L 76,72 
          L 76,60 
          L 132,60 
          L 132,48 
          L 76,48 
          Z
          "
          fill={orangeColor}
        />

      </svg>




      {/* TEXT */}

      {showText && (

        <span
          className="
            mt-1
            px-1
            text-center
            font-serif
            font-extrabold
            uppercase
            tracking-[0.16em]
            text-[8px]
            sm:text-[10px]
            transition-colors
            duration-300
          "
          style={{
            color: textColor,
          }}
        >
          Demystifying Smiles
        </span>

      )}


    </div>

  );
}