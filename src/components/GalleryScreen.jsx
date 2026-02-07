import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";

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
        {[
          { img: img1, text: "Thinking of you", rot: "rotate-2" },
          { img: img2, text: "A little gift", rot: "-rotate-2" },
          { img: img3, text: "Sweet moments", rot: "rotate-1" },
          { img: img4, text: "Just us", rot: "-rotate-1" },
        ].map((item, index) => (
          <div
            key={index}
            className={`bg-white p-3 pb-8 rounded-lg shadow-xl w-56 ${item.rot}`}
          >
            <div className="aspect-square bg-white rounded-md mb-3 shadow-inner flex items-center justify-center p-2">
              <img
                src={item.img}
                alt={item.text}
                className="max-w-full max-h-full object-contain rounded-sm"
              />
            </div>
            <p className="text-rose-600 font-serif italic text-sm">
              {item.text}
            </p>
          </div>
        ))}
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
