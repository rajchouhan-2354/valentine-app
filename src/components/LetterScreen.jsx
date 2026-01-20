import { Mail, Heart } from "lucide-react";

export default function LetterScreen({
  envelopeOpen,
  setEnvelopeOpen,
  letterVisible,
  setLetterVisible,
  onNext,
}) {
  if (!envelopeOpen) {
    return (
      <div
        onClick={() => {
          setEnvelopeOpen(true);
          setTimeout(() => setLetterVisible(true), 600);
        }}
        className="cursor-pointer w-64 h-44 bg-gradient-to-br from-pink-300 to-rose-400 rounded-xl flex items-center justify-center"
      >
        <Mail className="w-16 h-16 text-white" />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 shadow animate-fade-in">
      <div className="flex justify-center mb-4">
        <Heart className="text-rose-500" />
      </div>

      <p className="text-rose-700 text-sm leading-relaxed">
        There's something incredibly peaceful about the way you are...
      </p>

      <button
        onClick={onNext}
        className="mt-6 px-6 py-3 bg-rose-400 text-white rounded-full"
      >
        A Little Music?
      </button>
    </div>
  );
}
