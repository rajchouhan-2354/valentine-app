import React, { useState } from "react";

const SYMBOLS = ["🌙", "💝", "🌸", "✨", "🦋", "🍓"];

/* 🌸 Fixed leaves (do not regenerate) */
const LEAVES = Array.from({ length: 14 }).map((_, i) => ({
  id: i,
  left: `${(i * 7) % 100}%`,
  delay: `${i * 1.3}s`,
  size: `${12 + (i % 5) * 4}px`,
  duration: `${14 + (i % 6) * 2}s`,
}));

export default function MemoryGame({ onWin }) {
  const [cards, setCards] = useState(() =>
    [...SYMBOLS, ...SYMBOLS]
      .sort(() => Math.random() - 0.5)
      .map((symbol, i) => ({ id: i, symbol })),
  );
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);

  /* ---------- CARD FLIP ---------- */
  const flipCard = (index) => {
    if (flipped.length === 2) return;
    if (flipped.includes(index)) return;
    if (matched.includes(cards[index].symbol)) return;

    const next = [...flipped, index];
    setFlipped(next);

    if (next.length === 2) {
      setMoves((m) => m + 1);
      const [a, b] = next;

      if (cards[a].symbol === cards[b].symbol) {
        setMatched((prev) => [...prev, cards[a].symbol]);
        setTimeout(() => setFlipped([]), 250);
      } else {
        setTimeout(() => setFlipped([]), 650);
      }
    }
  };

  const resetGame = () => {
    setCards(
      [...SYMBOLS, ...SYMBOLS]
        .sort(() => Math.random() - 0.5)
        .map((symbol, i) => ({ id: i, symbol })),
    );
    setFlipped([]);
    setMatched([]);
    setMoves(0);
  };

  return (
    <div className="relative min-h-[100dvh] overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-pink-100 flex flex-col items-center px-4">
      {/* 🌸 FLOATING LEAVES (STABLE) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {LEAVES.map((leaf) => (
          <span
            key={leaf.id}
            className="absolute text-pink-300/40 animate-float-down"
            style={{
              left: leaf.left,
              top: "-10%",
              fontSize: leaf.size,
              animationDelay: leaf.delay,
              animationDuration: leaf.duration,
            }}
          >
            🌸
          </span>
        ))}
      </div>

      {/* ---------- HEADER ---------- */}
      <div className="relative z-10 pt-8 text-center">
        <p className="text-rose-300 text-sm italic">A little fun for today</p>

        <h2
          className="text-2xl sm:text-3xl font-extrabold text-rose-500 mt-1"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Valentine Memory Match 💗
        </h2>
      </div>

      {/* ---------- STATS ---------- */}
      <div className="relative z-10 flex gap-4 mt-6">
        <div className="bg-white/80 backdrop-blur-md px-6 py-3 rounded-2xl shadow border border-pink-100 text-center">
          <p className="text-xs text-rose-400">Moves</p>
          <p className="text-xl font-bold text-rose-500">{moves}</p>
        </div>
        <div className="bg-white/80 backdrop-blur-md px-6 py-3 rounded-2xl shadow border border-pink-100 text-center">
          <p className="text-xs text-rose-400">Matched</p>
          <p className="text-xl font-bold text-rose-500">
            {matched.length}/{SYMBOLS.length}
          </p>
        </div>
      </div>

      {/* ---------- GAME GRID ---------- */}
      <div className="relative z-10 flex-grow flex items-center justify-center w-full">
        <div className="grid grid-cols-4 gap-4">
          {cards.map((card, index) => {
            const isOpen =
              flipped.includes(index) || matched.includes(card.symbol);

            return (
              <button
                key={card.id}
                onClick={() => flipCard(index)}
                className="w-[70px] h-[70px] active:scale-95 transition-all"
              >
                {/* CARD SHELL */}
                <div
                  className={`w-full h-full rounded-[22px] flex items-center justify-center 
                    transition-all duration-500 shadow-lg
                    ${
                      isOpen
                        ? "bg-white/90 border border-pink-200"
                        : "bg-gradient-to-br from-pink-400 via-rose-400 to-pink-500"
                    }`}
                >
                  {/* INNER CONTENT */}
                  {isOpen ? (
                    <span className="text-2xl">{card.symbol}</span>
                  ) : (
                    <div
                      className="w-9 h-9 rounded-full bg-white/30 backdrop-blur-md 
                                    flex items-center justify-center text-white font-bold text-lg"
                    >
                      ?
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ---------- CONTROLS ---------- */}
      <div className="relative z-10 w-full max-w-xs pb-8">
        <button
          onClick={resetGame}
          className="w-full py-3 bg-white/80 backdrop-blur-md rounded-full shadow border border-pink-100
                     text-rose-500 font-semibold"
        >
          Reset Game
        </button>

        {matched.length === SYMBOLS.length && (
          <button
            onClick={onWin}
            className="w-full mt-3 py-3 bg-gradient-to-r from-pink-400 to-rose-500
                       text-white rounded-full shadow-lg font-semibold animate-bounce"
          >
            Next ✨
          </button>
        )}
      </div>

      {/* 🌸 FIXED FLOAT ANIMATION */}
      <style>{`
        @keyframes float-down {
          from { transform: translateY(-10vh); }
          to { transform: translateY(110vh); }
        }
        .animate-float-down {
          animation-name: float-down;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
}
