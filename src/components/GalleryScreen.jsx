export default function GalleryScreen({ onRestart }) {
  return (
    <div className="w-full text-center animate-fade-in px-2 overflow-y-auto">
      <h2
        className="text-3xl sm:text-4xl font-light text-rose-700 mb-8"
        style={{ fontFamily: "Georgia, serif" }}
      >
        For You, With Love
      </h2>

      <div className="flex flex-col gap-6 items-center mb-10">
        <div className="bg-white p-3 pb-8 rounded shadow-lg rotate-2 border-4 border-white w-56">
          <div className="aspect-square bg-pink-50 rounded flex items-center justify-center text-6xl mb-3 shadow-inner">
            🐶💐
          </div>
          <p className="text-rose-600 font-serif italic text-sm">
            Thinking of you
          </p>
        </div>

        <div className="bg-white p-3 pb-8 rounded shadow-lg -rotate-2 border-4 border-white w-56">
          <div className="aspect-square bg-purple-50 rounded flex items-center justify-center text-6xl mb-3 shadow-inner">
            🐱🎁
          </div>
          <p className="text-rose-600 font-serif italic text-sm">
            A little gift
          </p>
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl border border-white shadow-md mb-6">
        <div className="text-5xl mb-3 animate-pulse">💝</div>
        <h3 className="text-xl sm:text-2xl font-bold text-rose-700 mb-2">
          Happy Valentine's Day!
        </h3>
        <p className="text-rose-500 font-light text-sm mb-6">
          Thank you for being exactly who you are.
        </p>

        <button
          onClick={onRestart}
          className="w-full py-4 bg-gradient-to-r from-pink-400 to-rose-400 text-white rounded-2xl text-sm font-medium"
        >
          ← Back to Start
        </button>
      </div>
    </div>
  );
}
