import React from "react";
import Input from "@/app/ui/global/Input";
import Button from "@/app/ui/global/Button";
import AnotherChoiceLogin from "../../ui/anotherChoiceLogin";
import Link from "next/link";

type Props = {};

export default function LoginForm({}: Props) {
  return (
    <div className="w-[28rem]">
      <div className="flex flex-col gap-2">
        <h2 className="font-bold text-3xl">Welcome Back!</h2>
        <p className="text-sm text-gray-400">Let's your pet fun</p>
      </div>
      {/* Login Form */}
      <form>
        {/* Email or Mobile */}
        <Input
          id="email of phone number"
          label="Email or phone number"
          type="text"
          name="fullName"
          placeholder="Email or phone number"
          value=""
        />
        {/* Password */}
        <Input
          id="password"
          label="Password"
          type="password"
          name="password"
          placeholder="Type your password"
          value=""
        />

        <div className="w-full py-2">
          <Button type="submit" text="Sign up" />
        </div>
      </form>
      <AnotherChoiceLogin />
      <div className="text-center">
        Don't have an account ?{" "}
        <Link href="/register" className="font-bold hover:underline text-sm ">
          Sign Up
        </Link>
      </div>
    </div>
  );
}
