import React, { useRef, useState, useEffect } from "react";
import { Play, Pause, Heart } from "lucide-react";

// 🎵 audio imports (same files, new names)
import waalian from "../assets/audio/waalian.m4a";
import lagJaaGale from "../assets/audio/lag-jaa-gale.m4a";
import billionera from "../assets/audio/billionera.m4a";

const songs = [
  {
    title: "Khamosh Pal",
    caption: "When silence speaks louder than words 🌙",
    audio: waalian,
    bg: "from-pink-200 to-rose-200",
  },
  {
    title: "Tum Paas Ho",
    caption: "A feeling of being understood 🤍",
    audio: lagJaaGale,
    bg: "from-rose-200 to-pink-100",
  },
  {
    title: "Dil Ki Baat",
    caption: "Some emotions stay unspoken 💞",
    audio: billionera,
    bg: "from-purple-200 to-pink-200",
  },
];

export default function MusicScreen({ onNext }) {
  const audioRef = useRef(null);
  const timerRef = useRef(null);
  const [playingIndex, setPlayingIndex] = useState(null);

  const playSong = (song, index) => {
    stopSong();

    const audio = new Audio(song.audio);
    audioRef.current = audio;
    audio.volume = 0.9;

    audio.play().catch(() => {
      console.warn("Playback blocked until interaction");
    });

    setPlayingIndex(index);

    timerRef.current = setTimeout(() => {
      stopSong();
    }, 30000);
  };

  const stopSong = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    }
    clearTimeout(timerRef.current);
    setPlayingIndex(null);
  };

  useEffect(() => {
    return () => stopSong();
  }, []);

  return (
    <div className="relative min-h-[100dvh] bg-gradient-to-br from-pink-100 via-rose-50 to-pink-100 px-4 flex flex-col items-center overflow-hidden">
      {/* 🌸 Floating petals */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(14)].map((_, i) => (
          <span
            key={i}
            className="absolute text-pink-300/40 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: "-10%",
              fontSize: "18px",
              animationDelay: `${i * 1.4}s`,
              animationDuration: "20s",
            }}
          >
            🌸
          </span>
        ))}
      </div>

      {/* Header */}
      <div className="relative z-10 pt-12 text-center">
        <p className="text-rose-300 italic text-sm">
          Just a soft pause in time
        </p>
        <h2
          className="text-3xl font-extrabold text-rose-500 mt-2"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Little Moments in Music 🎶
        </h2>
      </div>

      {/* Song cards */}
      <div className="relative z-10 mt-10 w-full max-w-md space-y-5 flex-grow">
        {songs.map((song, index) => {
          const isPlaying = playingIndex === index;

          return (
            <div
              key={index}
              onClick={() => (isPlaying ? stopSong() : playSong(song, index))}
              className={`relative rounded-3xl p-5 bg-gradient-to-r ${song.bg}
                backdrop-blur-md border border-white/60
                shadow-xl cursor-pointer transition-all
                ${isPlaying ? "scale-[1.02]" : "hover:scale-[1.01]"}`}
            >
              {/* Soft glow */}
              {isPlaying && (
                <div className="absolute inset-0 rounded-3xl bg-white/20 blur-xl" />
              )}

              <div className="relative flex items-center gap-4">
                {/* Disc */}
                <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center shadow-inner">
                  💿
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h3 className="font-bold text-rose-700 text-lg">
                    {song.title}
                  </h3>
                  <p className="text-xs text-rose-500 italic">{song.caption}</p>

                  {isPlaying && (
                    <div className="flex gap-1 mt-2 h-4 items-end">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <span
                          key={i}
                          className="w-1 bg-rose-400 rounded-full animate-wave"
                          style={{ animationDelay: `${i * 0.12}s` }}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Control */}
                <div className="w-11 h-11 bg-rose-500 text-white rounded-full flex items-center justify-center shadow-lg">
                  {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                </div>
              </div>

              <div className="flex justify-between mt-4 text-xs text-rose-400">
                <span>30 sec preview</span>
                <Heart size={14} />
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="relative z-10 w-full max-w-xs pb-10">
        <button
          onClick={onNext}
          className="w-full py-4 bg-gradient-to-r from-pink-400 to-rose-500
          text-white rounded-full shadow-xl font-semibold tracking-wide"
        >
          Continue 💖
        </button>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes float {
          from { transform: translateY(-10vh); }
          to { transform: translateY(110vh); }
        }
        .animate-float {
          animation: float linear infinite;
        }

        @keyframes wave {
          0% { height: 25%; }
          50% { height: 100%; }
          100% { height: 25%; }
        }
        .animate-wave {
          animation: wave 1s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
