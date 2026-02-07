export default function GalleryScreen({ onRestart }) {
  return (
    <div className="w-full text-center animate-fade-in px-2 overflow-y-auto">
      <h2
        className="text-3xl sm:text-4xl font-light text-rose-700 mb-10"
        style={{ fontFamily: "Georgia, serif" }}
      >
        For You, With Love
      </h2>

      {/* 💌 POLAROID GALLERY */}
      <div className="flex flex-wrap justify-center gap-8 mb-12">
        {/* Card 1 */}
        <div className="bg-white p-3 pb-8 rounded-lg shadow-xl rotate-2 w-56">
          <div className="aspect-square bg-white rounded-md mb-3 shadow-inner flex items-center justify-center p-2">
            <img
              src="../src/assets/1.jpg"
              alt="Thinking of you"
              className="max-w-full max-h-full object-contain rounded-sm"
            />
          </div>
          <p className="text-rose-600 font-serif italic text-sm">
            Thinking of you
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-3 pb-8 rounded-lg shadow-xl -rotate-2 w-56">
          <div className="aspect-square bg-white rounded-md mb-3 shadow-inner flex items-center justify-center p-2">
            <img
              src="../src/assets/2.jpg"
              alt="A little gift"
              className="max-w-full max-h-full object-contain rounded-sm"
            />
          </div>
          <p className="text-rose-600 font-serif italic text-sm">
            A little gift
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-3 pb-8 rounded-lg shadow-xl rotate-1 w-56">
          <div className="aspect-square bg-white rounded-md mb-3 shadow-inner flex items-center justify-center p-2">
            <img
              src="../src/assets/3.jpg"
              alt="Sweet moments"
              className="max-w-full max-h-full object-contain rounded-sm"
            />
          </div>
          <p className="text-rose-600 font-serif italic text-sm">
            Sweet moments
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-3 pb-8 rounded-lg shadow-xl -rotate-1 w-56">
          <div className="aspect-square bg-white rounded-md mb-3 shadow-inner flex items-center justify-center p-2">
            <img
              src="../src/assets/4.jpg"
              alt="Just us"
              className="max-w-full max-h-full object-contain rounded-sm"
            />
          </div>
          <p className="text-rose-600 font-serif italic text-sm">Just us</p>
        </div>
      </div>

      {/* 💝 FINAL MESSAGE */}
      <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl border border-white shadow-md mb-8 max-w-md mx-auto">
        <div className="text-5xl mb-3 animate-pulse">💝</div>
        <h3 className="text-xl sm:text-2xl font-bold text-rose-700 mb-2">
          Happy Valentine&apos;s Day!
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
