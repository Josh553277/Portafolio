"use client";

export const Button = ({ text, variant, descripcion, onClick }: any) => {
  if (variant === "primary") {
    return (
      <button
        onClick={onClick}
        className=" w-36 h-162 bg-purple-500 rounded-lg text-white font-semibold font-sans text-sm gap-8 py-2"
      >
        {text}
        {descripcion}
      </button>
    );
  } else if (variant === "secondary") {
    return (
      <button
        onClick={onClick}
        className="w-36 h-162 text-gray-800 rounded-lg border-gray-800 font-semibold font-sans text-sm gap-8 py-2"
      >
        {text}
        {descripcion}
      </button>
    );
  }

  return null;
};
