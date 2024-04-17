import React from "react";
// import {FacebookIcon} from "../../icons/Icons"
import { FacebookIcon, GoogleIcon, AppleIcon } from "@/app/icons/Icons";
type Props = {};

export default function AnotherChoiceLogin({}: Props) {
  return (
    <div className="mt-[3rem]">
      {/* <div className="border-t text-center relative">
        <span className="absolute border -mt-3 border-red-400 w-fit">
          or do it via other accounts
        </span>
      </div> */}
      <div className="border-t text-center relative pb-[2rem]">
        <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-[0.8rem] bg-white px-4 text-gray-500 font-semibold text-sm">
          or do it via other accounts
        </span>
      </div>

      <div className="flex gap-4 py-[1rem] justify-center">
        <div className="text-center p-4 border border-gray-400 rounded-full">
          <FacebookIcon />
        </div>
        <div className="text-center p-4 border border-gray-400 rounded-full">
          <GoogleIcon />
        </div>
        <div className="text-center p-4 border border-gray-400 rounded-full">
          <AppleIcon />
        </div>
      </div>
    </div>
  );
}
