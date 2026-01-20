import { ChevronRight } from "lucide-react";
import { qualities } from "../data/qualities";

export default function QualitiesScreen({ currentCard, onNext }) {
  return (
    <div className="w-full animate-fade-in px-2">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="text-4xl mb-3">✨</div>
        <h2
          className="text-2xl sm:text-3xl font-light text-rose-700 mb-2"
          style={{ fontFamily: "Georgia, serif" }}
        >
          What Makes You Special
        </h2>
        <p className="text-rose-400 text-sm font-light max-w-xs mx-auto">
          Just a few things that quietly stand out about you
        </p>
      </div>

      {/* Cards */}
      <div className="space-y-6 mb-12">
        {qualities.map((quality, idx) => {
          const visible = idx <= currentCard;

          return (
            <div
              key={idx}
              className={`relative transition-all duration-700 ease-out
                ${
                  visible
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-8 scale-95"
                }
              `}
            >
              {/* Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-300 to-rose-300 rounded-3xl blur opacity-20" />

              {/* Card */}
              <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-5 shadow-lg border border-pink-100">
                <div className="flex items-start gap-4">
                  {/* Icon bubble */}
                  <div className="shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-200 to-rose-200 flex items-center justify-center shadow-inner text-2xl">
                    {quality.emoji}
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-rose-700 mb-1">
                      {quality.title}
                    </h3>
                    <p className="text-rose-500 text-sm leading-relaxed">
                      {quality.desc}
                    </p>
                  </div>
                </div>

                {/* Soft divider */}
                <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-rose-200 to-transparent" />
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      {currentCard === qualities.length - 1 && (
        <div className="text-center animate-fade-in">
          <button
            onClick={onNext}
            className="group px-10 py-4 bg-gradient-to-r from-pink-400 to-rose-500 text-white rounded-full shadow-xl flex items-center gap-3 mx-auto text-sm font-medium active:scale-95 transition-all"
          >
            Read My Note
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      )}
    </div>
  );
}
