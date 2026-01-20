import { useEffect } from "react";
import { Heart, RotateCcw } from "lucide-react";
import { gameSymbols } from "../data/gameSymbols";

export default function MemoryGame({
  gameCards,
  setGameCards,
  flippedCards,
  setFlippedCards,
  matchedPairs,
  setMatchedPairs,
  moves,
  setMoves,
  onWin,
}) {
  useEffect(() => {
    initGame();
  }, []);

  const initGame = () => {
    const cards = [...gameSymbols, ...gameSymbols]
      .sort(() => Math.random() - 0.5)
      .map((symbol, idx) => ({ id: idx, symbol }));

    setGameCards(cards);
    setFlippedCards([]);
    setMatchedPairs([]);
    setMoves(0);
  };

  const handleFlip = (id) => {
    if (
      flippedCards.length === 2 ||
      flippedCards.includes(id) ||
      matchedPairs.includes(gameCards.find((c) => c.id === id)?.symbol)
    )
      return;

    const newFlipped = [...flippedCards, id];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(moves + 1);
      const [first, second] = newFlipped;

      const firstCard = gameCards.find((c) => c.id === first);
      const secondCard = gameCards.find((c) => c.id === second);

      if (firstCard.symbol === secondCard.symbol) {
        setMatchedPairs([...matchedPairs, firstCard.symbol]);
        setFlippedCards([]);
      } else {
        setTimeout(() => setFlippedCards([]), 800);
      }
    }
  };

  return (
    <div className="w-full animate-fade-in flex flex-col items-center px-1">
      <h2
        className="text-2xl sm:text-3xl font-light text-rose-700 mb-4 text-center"
        style={{ fontFamily: "Georgia, serif" }}
      >
        Memory Match
      </h2>

      <div className="mb-6 flex gap-6 text-xs text-rose-600 font-semibold bg-white/60 px-5 py-2 rounded-full shadow-sm">
        <span>Moves: {moves}</span>
        <span>
          Matched: {matchedPairs.length}/{gameSymbols.length}
        </span>
      </div>

      <div className="grid grid-cols-4 gap-2 w-full max-w-[320px] mb-8 perspective-1000">
        {gameCards.map((card) => {
          const isFlipped =
            flippedCards.includes(card.id) ||
            matchedPairs.includes(card.symbol);

          return (
            <div
              key={card.id}
              onClick={() => handleFlip(card.id)}
              className="aspect-square cursor-pointer relative transition-all duration-500"
              style={{
                transformStyle: "preserve-3d",
                transform: isFlipped ? "rotateY(180deg)" : "rotateY(0)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-300 to-rose-400 rounded-lg shadow border border-white flex items-center justify-center backface-hidden">
                <Heart className="w-5 h-5 text-white/70" />
              </div>

              <div className="absolute inset-0 bg-white rounded-lg shadow border border-pink-50 flex items-center justify-center text-2xl rotate-y-180 backface-hidden">
                {card.symbol}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex gap-3">
        <button
          onClick={initGame}
          className="p-3 bg-white text-rose-600 rounded-full shadow"
        >
          <RotateCcw className="w-5 h-5" />
        </button>

        {matchedPairs.length === gameSymbols.length && (
          <button
            onClick={onWin}
            className="px-8 py-3 bg-rose-500 text-white rounded-full shadow-lg text-sm font-semibold animate-bounce"
          >
            Claim Prize!
          </button>
        )}
      </div>
    </div>
  );
}
