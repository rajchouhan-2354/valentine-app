import React, { useState } from "react";
import { Heart } from "lucide-react";

export default function LetterScreen({ onNext }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-[100dvh] w-full flex flex-col items-center justify-center px-6 bg-gradient-to-br from-pink-100 via-pink-50 to-rose-100 animate-fade-in">
      {/* Heading */}
      <p className="text-rose-300 text-sm italic mb-2 text-center">
        Just because today feels right
      </p>

      <h1
        className="text-center text-3xl sm:text-4xl font-extrabold text-rose-500 mb-6"
        style={{ fontFamily: "Georgia, serif" }}
      >
        A Valentine Note 💌
      </h1>

      {/* ================= ENVELOPE ================= */}
      {!open && (
        <div
          onClick={() => setOpen(true)}
          className="cursor-pointer w-full max-w-sm bg-pink-200/70 rounded-3xl p-6 shadow-xl border border-pink-100 text-center transition-transform active:scale-95"
        >
          {/* Envelope Shape */}
          <div className="relative w-full h-44 bg-pink-300 rounded-2xl overflow-hidden flex items-center justify-center">
            {/* Flap */}
            <div className="absolute top-0 left-0 w-full h-full bg-pink-400 clip-path-envelope" />

            {/* Heart Seal */}
            <div className="absolute z-10 bg-white p-2 rounded-full shadow-md">
              <Heart className="w-5 h-5 text-rose-500 fill-rose-400" />
            </div>
          </div>

          <p className="text-rose-500 text-sm mt-4">Click to open</p>

          <button className="mt-3 px-6 py-2 bg-white/70 rounded-full text-rose-500 text-xs shadow">
            A Valentine For You 💖
          </button>
        </div>
      )}

      {/* ================= LETTER ================= */}
      {open && (
        <div className="w-full max-w-sm bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-pink-100 animate-fade-in relative">
          {/* Top icon */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-rose-500 text-white p-2 rounded-full shadow">
            💕
          </div>

          <p className="text-rose-500 text-sm mb-4 font-semibold">
            Hey Vidushi 💗
          </p>

          <div className="text-slate-700 text-sm leading-relaxed font-light space-y-3">
            <p>
              I wanted to do something special today, simply because you matter
              to me.
            </p>

            <p>
              Valentine’s Day isn’t about grand gestures — it’s about the
              feeling of choosing someone, even in the quiet moments.
            </p>

            <p>
              I admire the way you care, understand, and bring calm positivity
              into my world. Being around you feels safe, natural, and real.
            </p>

            <p>
              I appreciate your honesty, your kindness, and the way you show up
              as yourself.
            </p>

            <p>
              I don’t know where this path leads, but I’d like to take a step
              forward and see where this connection can grow — at its own pace,
              in its own time.
            </p>

            <p className="italic text-rose-500">
              No pressure, no expectations — just something sincere, from the
              heart.
            </p>
          </div>

          <p className="text-right text-rose-400 text-sm mt-6 italic">
            Always 💕
          </p>

          {/* Next CTA */}
          <button
            onClick={onNext}
            className="mt-6 w-full py-3 bg-gradient-to-r from-pink-400 to-rose-500 text-white rounded-full shadow-lg text-sm font-semibold"
          >
            Continue ✨
          </button>
        </div>
      )}

      {/* Custom clip-path style */}
      <style>{`
        .clip-path-envelope {
          clip-path: polygon(0 0, 50% 50%, 100% 0, 100% 100%, 0 100%);
        }
      `}</style>
    </div>
  );
}
