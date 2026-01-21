import { useEffect, useState } from "react";

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
  const [progress, setProgress] = useState(0);

  const [currentCard, setCurrentCard] = useState(0);
  const [envelopeOpen, setEnvelopeOpen] = useState(false);
  const [letterVisible, setLetterVisible] = useState(false);
  const [playingMusic, setPlayingMusic] = useState(null);

  const [gameCards, setGameCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [moves, setMoves] = useState(0);

  /* Splash / Loading */
  useEffect(() => {
    if (stage !== "loading") return;

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

  /* Qualities sequence (CTA-safe) */
  useEffect(() => {
    if (stage !== "qualities") return;

    setCurrentCard(0);
    const timer = setInterval(() => {
      setCurrentCard((prev) => {
        if (prev < qualities.length - 1) return prev + 1;
        clearInterval(timer);
        return prev;
      });
    }, 600);

    return () => clearInterval(timer);
  }, [stage]);

  /* Memory Game Init */
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

  return (
    <>
      {stage === "loading" && <LoadingScreen progress={progress} />}

      {stage === "proposal" && (
        <ProposalScreen onYes={() => setStage("qualities")} />
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

      {stage === "gallery" && (
        <GalleryScreen onRestart={() => setStage("proposal")} />
      )}
    </>
  );
}
