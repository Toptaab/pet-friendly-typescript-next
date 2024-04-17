import Welcome from "../ui/welcome";
import LoginForm from "./components/loginForm";

export default function Login() {
  return (
    <main className="flex w-full h-screen">
      <div className="w-[50%]">
        <Welcome />
      </div>
      <div className="w-[50%] flex justify-center items-center">
        <LoginForm />
      </div>
    </main>
  );
}
