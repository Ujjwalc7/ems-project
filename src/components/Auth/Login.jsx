import { useRef, useState } from "react";
import { useAuthContext } from "../../context/AuthProvider";
import Spline from "@splinetool/react-spline";

const Login = () => {
  const {updateUser} = useAuthContext();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(emailRef.current.value, passwordRef.current.value);
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <div className="h-screen relative">
      <Spline className='absolute' scene="https://prod.spline.design/vQ9Athq16dbrwBzS/scene.splinecode" />
      <div className="flex absolute h-screen w-screen items-center justify-around flex-col">
      <div className="w-full mb-[80px] flex items-center justify-center">
        <div>
          <h1 className="text-4xl text-center text-white">Empower your people to do their best work.</h1>
          <p className="text-center mt-4 text-white">One tool for your whole team. Write, plan and get organized.</p>
        </div>
      </div>
      <div className="rounded px-4 flex w-full max-w-[300px] relative flex-col justify-center">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            ref={emailRef}
            required
            className="border-2 outline-none text-sm py-1 focus:border-gray-600 px-3 text-black border-[rgb(184,90,90)] rounded-full"
            type="email"
            name="email"
            placeholder="Enter your email"
          />
          <input
            ref={passwordRef}
            required
            className="border-2 outline-none text-sm py-1 focus:border-gray-600 px-3 text-black border-[rgb(184,90,90)] rounded-full"
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <button
            type="submit"
            className="bg-[rgb(184,90,90)] active:bg-[rgb(176,77,77)] rounded-full py-1 text-white"
          >
            Log In
          </button>
        </form>
      </div>
      </div>
    </div>
  );
};
export default Login;
