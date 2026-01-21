import React, { useRef, useState, useEffect } from "react";
import { Play, Pause, Heart } from "lucide-react";

// 🎵 M4A audio imports (30s clips)
import waalian from "../assets/audio/waalian.m4a";
import lagJaaGale from "../assets/audio/lag-jaa-gale.m4a";
import billionera from "../assets/audio/billionera.m4a";

const songs = [
  {
    title: "Waalian",
    caption: "Some feelings feel calm and deep 🍃",
    audio: waalian,
    bg: "from-pink-200 to-rose-200",
  },
  {
    title: "Lag Jaa Gale",
    caption: "Because closeness matters 🤍",
    audio: lagJaaGale,
    bg: "from-green-200 to-emerald-200",
  },
  {
    title: "Billionera",
    caption: "When emotions say more than words 💕",
    audio: billionera,
    bg: "from-purple-200 to-pink-200",
  },
];

export default function MusicScreen({ onNext }) {
  const audioRef = useRef(null);
  const timerRef = useRef(null);
  const [playingIndex, setPlayingIndex] = useState(null);

  /* ▶️ PLAY SONG (30 seconds only) */
  const playSong = (song, index) => {
    stopSong();

    const audio = new Audio(song.audio);
    audioRef.current = audio;
    audio.volume = 0.9;

    audio.play().catch(() => {
      console.warn("Playback blocked until user interaction");
    });

    setPlayingIndex(index);

    // ⏱ Stop after 30 seconds
    timerRef.current = setTimeout(() => {
      stopSong();
    }, 30000);
  };

  /* ⏸ STOP SONG */
  const stopSong = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    }
    clearTimeout(timerRef.current);
    setPlayingIndex(null);
  };

  /* 🧹 CLEANUP */
  useEffect(() => {
    return () => {
      stopSong();
    };
  }, []);

  return (
    <div className="relative min-h-[100dvh] bg-gradient-to-br from-pink-100 via-rose-50 to-pink-100 px-4 flex flex-col items-center">
      {/* 🌸 FLOATING PETALS */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <span
            key={i}
            className="absolute text-pink-300/40 animate-float-down"
            style={{
              left: `${(i * 9) % 100}%`,
              top: "-10%",
              fontSize: "16px",
              animationDelay: `${i * 1.2}s`,
              animationDuration: "18s",
            }}
          >
            🌸
          </span>
        ))}
      </div>

      {/* ---------- HEADER ---------- */}
      <div className="relative z-10 pt-10 text-center">
        <p className="text-rose-300 italic text-sm">A little melody for you</p>
        <h2
          className="text-3xl font-extrabold text-rose-500 mt-1"
          style={{ fontFamily: "Georgia, serif" }}
        >
          A Song For You 🎵
        </h2>
      </div>

      {/* ---------- SONG LIST ---------- */}
      <div className="relative z-10 mt-8 w-full max-w-md space-y-4 flex-grow">
        {songs.map((song, index) => {
          const isPlaying = playingIndex === index;

          return (
            <div
              key={index}
              onClick={() => (isPlaying ? stopSong() : playSong(song, index))}
              className={`rounded-3xl p-4 bg-gradient-to-r ${song.bg}
                          shadow-lg border border-white/50 cursor-pointer
                          active:scale-95 transition-all`}
            >
              <div className="text-xs text-rose-500 tracking-widest mb-1">
                SIDE A
              </div>

              <div className="flex items-center gap-4">
                {/* Reel */}
                <div className="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-inner">
                  🎧
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h3 className="font-bold text-rose-700">{song.title}</h3>
                  <p className="text-xs text-rose-500 italic">{song.caption}</p>

                  {/* 🌊 SOUND WAVES */}
                  {isPlaying && (
                    <div className="flex gap-1 mt-2 h-4 items-end">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <span
                          key={i}
                          className="w-1 bg-rose-400 rounded-full animate-wave"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Play / Pause */}
                <div className="w-10 h-10 bg-rose-500 text-white rounded-full flex items-center justify-center shadow-md">
                  {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                </div>
              </div>

              <div className="flex justify-between mt-3 text-xs text-rose-400">
                <span>0:30</span>
                <Heart size={14} />
              </div>
            </div>
          );
        })}
      </div>

      {/* ---------- CTA ---------- */}
      <div className="relative z-10 w-full max-w-xs pb-8">
        <button
          onClick={onNext}
          className="w-full py-4 bg-gradient-to-r from-pink-400 to-rose-500
                     text-white rounded-full shadow-lg font-semibold"
        >
          Let’s Play a Game 💕
        </button>
      </div>

      {/* ---------- ANIMATIONS ---------- */}
      <style>{`
        @keyframes float-down {
          from { transform: translateY(-10vh); }
          to { transform: translateY(110vh); }
        }
        .animate-float-down {
          animation: float-down linear infinite;
        }

        @keyframes wave {
          0% { height: 20%; }
          50% { height: 100%; }
          100% { height: 20%; }
        }
        .animate-wave {
          animation: wave 1s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
