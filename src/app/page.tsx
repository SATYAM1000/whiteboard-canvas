"use client";
import Tools from "@/components/tools";
import React, { useRef } from "react";

const WhiteBoard = () => {
  const canvasRef = useRef(null);
  return (
    <div className="w-screen h-screen bg-white/90">
      <Tools />
      <div className="w-full h-px bg-gray-500" />
      <div className="flex-1 overflow-hidden relative">
        <canvas ref={canvasRef} width={"100%"} height={"100%"} />
      </div>
    </div>
  );
};

export default WhiteBoard;
