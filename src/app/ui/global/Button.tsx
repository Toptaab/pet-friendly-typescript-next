import React from "react";

type Props = {
  text: string;
  type: "button" | "submit" | "reset";
};

export default function Button({ type, text }: Props) {
  return (
    <button
      className="bg-black rounded-full py-2 text-white text-center w-full"
      type={type}
    >
      {text}
    </button>
  );
}
