import React from "react";

export default function MediaPlaceholder({
  width = "w-20",
  height = "h-20",
  rounded = "rounded-full",
  label = "GIF",
}) {
  return (
    <div
      className={`${width} ${height} ${rounded} bg-pink-100/70 backdrop-blur-md 
      border-2 border-dashed border-pink-300 shadow-lg 
      flex items-center justify-center`}
    >
      <span className="text-[10px] text-pink-400 italic select-none text-center px-1">
        {label}
      </span>
    </div>
  );
}
