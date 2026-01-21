import React from "react";

export default function LoadingScreen({ progress }) {
  return (
    <div className="min-h-[100dvh] w-full flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-pink-50 to-rose-100 animate-fade-in px-6">
      {/* Character */}
      <div className="mb-10">
        {/* Replace emoji with image later if needed */}
        <div className="text-7xl animate-bounce">🎀</div>
      </div>

      {/* Title */}
      <h1
        className="text-2xl font-semibold text-rose-600 mb-1"
        style={{ fontFamily: "Georgia, serif" }}
      >
        A Valentine Moment
      </h1>

      {/* Subtitle */}
      <p className="text-rose-400 text-sm mb-8 font-light tracking-wide">
        is being prepared for you...
      </p>

      {/* Progress Bar */}
      <div className="w-full max-w-[260px] h-2 bg-white/70 rounded-full overflow-hidden shadow-inner mb-4">
        <div
          className="h-full bg-gradient-to-r from-pink-400 to-rose-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Dots Indicator */}
      <div className="flex gap-2">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={`w-2 h-2 rounded-full transition-colors ${
              progress / 34 > i ? "bg-rose-400" : "bg-rose-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
