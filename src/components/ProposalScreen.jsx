import { Sparkles } from "lucide-react";

export default function ProposalScreen({
  onYes,
  onNo,
  showNoWarning,
  setShowNoWarning,
}) {
  return (
    <div className="text-center animate-fade-in relative px-2">
      <div className="text-6xl sm:text-8xl mb-4 animate-pulse">💌</div>

      <h1
        className="text-3xl sm:text-6xl font-light text-rose-700 mb-4"
        style={{ fontFamily: "Georgia, serif" }}
      >
        Will You Be My Valentine?
      </h1>

      <p className="text-base sm:text-xl text-rose-500 mb-10 max-w-xs mx-auto">
        A little digital bouquet of reasons why you're amazing.
      </p>

      <div className="flex flex-col gap-4 max-w-[280px] mx-auto">
        <button
          onClick={onYes}
          className="w-full py-4 bg-gradient-to-r from-pink-400 to-rose-500 text-white rounded-2xl shadow-lg flex justify-center items-center gap-2"
        >
          Yes! <Sparkles className="w-5 h-5" />
        </button>

        <button
          onClick={() => setShowNoWarning(true)}
          className="w-full py-4 bg-white/80 text-rose-400 rounded-2xl border"
        >
          No
        </button>
      </div>

      {showNoWarning && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-rose-900/30 backdrop-blur-md">
          <div className="bg-white rounded-3xl p-6 text-center max-w-xs">
            <div className="text-5xl mb-4">🥺</div>
            <h3 className="text-xl font-bold text-rose-700 mb-2">
              Are you really sure?
            </h3>
            <p className="text-rose-500 mb-6 text-sm">
              My digital heart might break just a little...
            </p>

            <button
              onClick={onYes}
              className="w-full py-3 bg-rose-500 text-white rounded-xl mb-2"
            >
              Okay, I'll be your Valentine!
            </button>

            <button
              onClick={() => setShowNoWarning(false)}
              className="text-rose-400 text-xs"
            >
              Let me think again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
