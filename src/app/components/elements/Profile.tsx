"use client";

import { selectAuth, authMe } from "@/lib/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { UserCircleIcon, BuildingStorefrontIcon } from '@heroicons/react/24/solid'
import { useEffect } from "react";

function Profile() {
  const me = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();

useEffect(() => {
  dispatch(authMe());
},[])


  return (
    <main>
      
      {me.user ? (
        <div className="flex gap-[2rem] items-center">
          <a href="/shop" className="hidden md:flex">
          <BuildingStorefrontIcon className="h-6 w-6 text-black" />
          </a>
          <a href="/profile">
          <UserCircleIcon className="h-6 w-6 text-black" />
          </a>
        </div>
      ) : (
        <div>
          <a href="/login">Login</a>
        </div>
      )}
    </main>
  );
}

export default Profile;
