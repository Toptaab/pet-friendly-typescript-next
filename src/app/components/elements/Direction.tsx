"use client";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

function Direction() {
  const [openModal, setOpenModel] = useState(false);

  return (
    <main className="flex items-center flex-1 relative">
      <div className="hidden md:flex gap-[2rem] border-l-[1px] border-gray-300 ps-[1rem]">
        <a href="/">Home</a>
        <a href="/Search">Search</a>
        <a href="/Map">Map</a>
      </div>

      {/* ---------------------------------- mobile ---------------------------------- */}
      <div className="flex md:hidden justify-end flex-1">
        <Bars3Icon
          className="h-6 w-6 text-black"
          onClick={() => setOpenModel(!openModal)}
        />
      </div>

      {/* ----------------------------------mobile modal  ----------------------------------- */}
      {openModal ? (
        <div className="flex md:hidden fixed right-[46px] top-[45px] border-2 h-[10rem] w-[10rem]">
          modal
        </div>
      ) : null}
    </main>
  );
}

export default Direction;
