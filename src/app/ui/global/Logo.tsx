import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";

type Props = {};

export default function Logo({}: Props) {
  return (
    <div className="flex justify-center items-baseline py-2 px-4 gap-2 rounded-full bg-white w-fit">
      <StarIcon className="h-[1rem] w-[1rem]" />
      <p>Logo</p>
    </div>
  );
}
