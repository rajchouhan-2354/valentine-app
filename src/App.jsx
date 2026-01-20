import React, { useState, useEffect } from "react";

/* Screens */
import LoadingScreen from "./components/LoadingScreen";
import ProposalScreen from "./components/ProposalScreen";
import QualitiesScreen from "./components/QualitiesScreen";
import LetterScreen from "./components/LetterScreen";
import MusicScreen from "./components/MusicScreen";
import MemoryGame from "./components/MemoryGame";
import GalleryScreen from "./components/GalleryScreen";

/* Data */
import { qualities } from "./data/qualities";
import { gameSymbols } from "./data/gameSymbols";

export default function App() {
  const [stage, setStage] = useState("loading");

  /* Loading */
  const [progress, setProgress] = useState(0);

  /* Qualities */
  const [currentCard, setCurrentCard] = useState(0);

  /* Letter */
  const [envelopeOpen, setEnvelopeOpen] = useState(false);
  const [letterVisible, setLetterVisible] = useState(false);

  /* Proposal */
  const [showNoWarning, setShowNoWarning] = useState(false);

  /* Music */
  const [playingMusic, setPlayingMusic] = useState(null);

  /* Game */
  const [gameCards, setGameCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [moves, setMoves] = useState(0);

  /* ---------------- LOADING ---------------- */
  useEffect(() => {
    if (stage !== "loading") return;

    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setStage("proposal"), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [stage]);

  /* ---------------- QUALITIES (FIXED CTA BUG) ---------------- */
  useEffect(() => {
    if (stage !== "qualities") return;

    setCurrentCard(0);

    const timer = setInterval(() => {
      setCurrentCard((prev) => {
        if (prev < qualities.length - 1) {
          return prev + 1;
        }
        clearInterval(timer); // 🔥 IMPORTANT FIX
        return prev;
      });
    }, 600);

    return () => clearInterval(timer);
  }, [stage]);

  /* ---------------- GAME INIT ---------------- */
  useEffect(() => {
    if (stage !== "game") return;

    const cards = [...gameSymbols, ...gameSymbols]
      .sort(() => Math.random() - 0.5)
      .map((symbol, idx) => ({ id: idx, symbol }));

    setGameCards(cards);
    setFlippedCards([]);
    setMatchedPairs([]);
    setMoves(0);
  }, [stage]);

  /* ---------------- RESTART ---------------- */
  const resetAll = () => {
    setStage("proposal");
    setCurrentCard(0);
    setEnvelopeOpen(false);
    setLetterVisible(false);
    setShowNoWarning(false);
    setPlayingMusic(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 overflow-x-hidden font-sans text-slate-800">
      {/* GLOBAL ANIMATIONS */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>

      <div className="relative z-10 w-full max-w-lg mx-auto min-h-[100dvh] flex flex-col justify-center items-center p-4 sm:p-6">
        {stage === "loading" && <LoadingScreen progress={progress} />}

        {stage === "proposal" && (
          <ProposalScreen
            onYes={() => setStage("qualities")}
            onNo={() => setShowNoWarning(true)}
            showNoWarning={showNoWarning}
            setShowNoWarning={setShowNoWarning}
          />
        )}

        {stage === "qualities" && (
          <QualitiesScreen
            currentCard={currentCard}
            onNext={() => setStage("letter")}
          />
        )}

        {stage === "letter" && (
          <LetterScreen
            envelopeOpen={envelopeOpen}
            setEnvelopeOpen={setEnvelopeOpen}
            letterVisible={letterVisible}
            setLetterVisible={setLetterVisible}
            onNext={() => setStage("music")}
          />
        )}

        {stage === "music" && (
          <MusicScreen
            playingMusic={playingMusic}
            setPlayingMusic={setPlayingMusic}
            onNext={() => setStage("game")}
          />
        )}

        {stage === "game" && (
          <MemoryGame
            gameCards={gameCards}
            setGameCards={setGameCards}
            flippedCards={flippedCards}
            setFlippedCards={setFlippedCards}
            matchedPairs={matchedPairs}
            setMatchedPairs={setMatchedPairs}
            moves={moves}
            setMoves={setMoves}
            onWin={() => setStage("gallery")}
          />
        )}

        {stage === "gallery" && <GalleryScreen onRestart={resetAll} />}
      </div>
    </div>
  );
}
