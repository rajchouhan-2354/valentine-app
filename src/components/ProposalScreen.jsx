import React from "react";
import { ChevronRight } from "lucide-react";
import happy from "../assets/happy-valentines.gif";
import pooh from "../assets/winnie-the-pooh-pooh-bear.gif";

export default function ProposalScreen({ onYes }) {
  return (
    <div className="min-h-[100dvh] w-full flex flex-col items-center justify-center px-6 bg-gradient-to-br from-pink-100 via-pink-50 to-rose-100 animate-fade-in">
      {/* Top soft text */}
      <p className="text-rose-300 text-sm italic mb-2 text-center">
        Hey i have made something special for you…
      </p>

      {/* Main Heading */}
      <h1
        className="text-center text-4xl sm:text-5xl font-extrabold text-rose-500 leading-tight mb-6"
        style={{ fontFamily: "Georgia, serif" }}
      >
        Will You Be My <br /> Valentine ?
      </h1>

      {/* ================= CARD ================= */}
      <div className="relative w-full max-w-sm bg-pink-200/60 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-pink-100 text-center">
        {/* ===== TOP RIGHT GIF ===== */}
        <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-white/80 backdrop-blur-md border border-pink-200 shadow-lg flex items-center justify-center overflow-hidden">
          <img
            src={happy}
            alt="Happy Valentines"
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>

        {/* ===== BOTTOM LEFT GIF ===== */}
        <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-white/80 backdrop-blur-md border border-pink-200 shadow-lg flex items-center justify-center overflow-hidden">
          <img
            src={pooh}
            alt="Cute Pooh"
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>

        {/* Window dots */}
        <div className="flex gap-2 mb-4 justify-start">
          <span className="w-3 h-3 bg-red-300 rounded-full" />
          <span className="w-3 h-3 bg-yellow-300 rounded-full" />
          <span className="w-3 h-3 bg-green-300 rounded-full" />
        </div>

        <p className="text-rose-600 text-sm mb-3 leading-relaxed">
          A little reminder of what this day feels like with you.
        </p>

        <p className="text-rose-400 text-xs italic mb-6">
          Tap below when you're ready
        </p>

        {/* CTA */}
        <button
          onClick={onYes}
          className="w-full py-4 bg-gradient-to-r from-pink-400 to-rose-500 text-white rounded-full shadow-lg flex items-center justify-center gap-2 text-sm font-semibold active:scale-95 transition-all"
        >
          Open This ✨
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Bottom spacing */}
      <div className="h-10" />
    </div>
  );
}
