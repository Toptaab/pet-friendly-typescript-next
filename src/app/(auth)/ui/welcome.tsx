import React from "react";
import Image from "next/image";
import Logo from "@/app/ui/global/Logo";

type Props = {};

export default function Welcome({}: Props) {
  return (
    <div className="flex-1 bg-gray-800 ">
      <div className="p-8">
        <Logo />
      </div>
      <div className="flex flex-col justify-around h-[calc(100vh-103px)]  items-center p-4 ">
        <div>
          <div className=" w-[24rem] flex flex-col gap-4 text-white">
            <h1 className="text-2xl font-bold">Welcome to Sweetdeli!</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Assumenda, maiores! Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>
        <Image
          src=""
          alt=""
          className="border border-white"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
}
