"use client";
import React from "react";
import { SparklesCore } from "../components/ui/sparkles";

export function SparklesPreview() {
  return (
    <div className="flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="absolute">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
    </div>
  );
}
