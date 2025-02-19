"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast"; // ✅ Importing React Hot Toast

export default function Signup() {
  const router = useRouter();
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  useEffect(() => {
    setButtonDisabled(!(user.email && user.password && user.username));
  }, [user]);

  const onSignUp = async () => {
    try {
      toast.loading("Signing up..."); // Show loading toast
      const response = await axios.post("/api/users/signup", user);

      toast.dismiss(); // Remove loading toast
      toast.success("Signup successful! 🎉");

      console.log("Signup successful", response.data);
      router.push("/login");
    } catch (error) {
      toast.dismiss();
      toast.error("Signup failed. Please try again. ❌");
      console.error("Signup failed", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-slate-900">
      <Toaster /> {/* ✅ This will display toasts */}
      <div className="bg-slate-700 p-8 flex justify-center items-center flex-col rounded-xl w-[400px]">
        <h1 className="text-center text-4xl text-white">Signup</h1>
        <br />
        <label
          htmlFor="username"
          className="block text-center p-2 text-2xl text-white">
          Username
        </label>
        <input
          type="text"
          id="username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="Username"
          className="bg-slate-500 text-white p-2 rounded-md w-full"
        />
        <label
          htmlFor="email"
          className="block text-center p-2 text-2xl text-white">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Email"
          className="bg-slate-500 text-white p-2 rounded-md w-full"
        />
        <label
          htmlFor="password"
          className="block text-center p-2 text-2xl text-white">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Password"
          className="bg-slate-500 text-white p-2 rounded-md w-full"
        />
        <button
          onClick={onSignUp}
          className={`bg-blue-500 m-3 text-white p-2 rounded-md w-full ${
            buttonDisabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={buttonDisabled}>
          Sign Up
        </button>
        <Link href="/login" className="text-blue-400 mt-2">
          Login Here
        </Link>
      </div>
    </div>
  );
}
