export default function LoadingScreen({ progress }) {
  return (
    <div className="w-full flex flex-col items-center animate-fade-in">
      <div className="text-5xl mb-6 animate-bounce">🎀</div>
      <h2 className="text-xl sm:text-2xl font-light text-rose-600 mb-8 text-center px-4">
        Preparing something special for you…
      </h2>

      <div className="w-full max-w-[280px] bg-white/50 backdrop-blur-sm rounded-full h-2.5 overflow-hidden shadow-sm border border-pink-100">
        <div
          className="h-full bg-gradient-to-r from-pink-400 to-rose-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-4 text-rose-400 text-sm font-medium tracking-widest">
        {progress}%
      </p>
    </div>
  );
}
