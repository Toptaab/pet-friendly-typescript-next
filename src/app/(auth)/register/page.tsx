import React from "react";
import RegisterForm from "./components/registerForm";
import Welcome from "../ui/welcome";

type Props = {};

export default function RegisterPage({}: Props) {
  return (
    <main className="flex w-full h-screen">
      <div className="w-[50%]">
        <Welcome />
      </div>
      <div className="w-[50%] flex justify-center items-center">
        <RegisterForm />
      </div>
    </main>
  );
}
