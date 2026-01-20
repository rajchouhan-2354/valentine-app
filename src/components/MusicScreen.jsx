import { Music } from "lucide-react";
import { songs } from "../data/songs";

export default function MusicScreen({ playingMusic, setPlayingMusic, onNext }) {
  return (
    <div className="w-full animate-fade-in px-2">
      <h2
        className="text-2xl sm:text-3xl font-light text-rose-700 mb-8 text-center"
        style={{ fontFamily: "Georgia, serif" }}
      >
        The Vibe Playlist
      </h2>

      <div className="space-y-3 mb-8">
        {songs.map((song, idx) => (
          <div
            key={idx}
            onClick={() => setPlayingMusic(playingMusic === idx ? null : idx)}
            className={`${song.color} border border-white/50 rounded-2xl p-4 shadow-sm cursor-pointer transition-all ${
              playingMusic === idx
                ? "ring-2 ring-rose-300 bg-opacity-100"
                : "bg-opacity-60"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/90 rounded-xl flex items-center justify-center">
                <Music
                  className={`w-6 h-6 text-rose-500 ${
                    playingMusic === idx ? "animate-pulse" : ""
                  }`}
                />
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-bold text-rose-700">
                  {song.title}
                </h3>
                <p className="text-rose-500 text-xs italic">{song.caption}</p>
              </div>

              {playingMusic === idx && (
                <div className="flex gap-0.5 items-end h-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-1 bg-rose-400 h-full animate-bounce"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button
          onClick={onNext}
          className="px-8 py-4 bg-rose-500 text-white rounded-full shadow-lg text-sm font-medium"
        >
          Let's Play a Game
        </button>
      </div>
    </div>
  );
}
