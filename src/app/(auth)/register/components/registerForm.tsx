import React from "react";
import Input from "@/app/ui/global/Input";
import Button from "@/app/ui/global/Button";
import AnotherChoiceLogin from "../../ui/anotherChoiceLogin";
import Link from "next/link";

type Props = {};

export default function RegisterForm({}: Props) {
  return (
    <div className="w-[28rem]">
      <div>
        <h2 className="font-bold text-3xl">Create your account</h2>
        <p className="text-sm text-gray-400">It's free and easy</p>
      </div>
      {/* Register Form */}
      <form>
        {/* Full-name */}
        <Input
          id="fullname"
          label="Full name"
          type="text"
          name="fullName"
          placeholder="Enter your name"
          value=""
        />
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
        {/* Confirm Password */}
        <Input
          id="confirmPassword"
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          placeholder="Confirm your password"
          value=""
        />
        <input
          type="checkbox"
          name="privacyPolicy"
          id="privacy policy"
          className="mr-2"
        />
        <label htmlFor="privacy policy" className="text-sm">
          By creating an account means you agree to the{" "}
          <a href="#" className="font-bold hover:underline">
            Terms and Conditions
          </a>
          , and our{" "}
          <a href="#" className="font-bold hover:underline">
            Privacy Policy
          </a>
        </label>
        <div className="w-full py-2">
          <Button type="submit" text="Sign up" />
        </div>
      </form>
      <AnotherChoiceLogin />
      <div className="text-center">
        Already have an account ?{" "}
        <Link href="/login" className="font-bold hover:underline text-sm ">
          Sign In
        </Link>
      </div>
    </div>
  );
}
