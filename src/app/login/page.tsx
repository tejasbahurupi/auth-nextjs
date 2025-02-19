"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { Axios } from "axios";

export default function LoginPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {};
  return (
    <div className="flex justify-center items-center h-screen bg-slate-900">
      <div className="bg-slate-700 p-8 flex justify-center items-center flex-col rounded-xl w-[400px]">
        <h1 className="text-center text-4xl">Login</h1>
        <br />
        <label htmlFor="email" className="block text-center p-2 text-2xl">
          email
        </label>
        <input
          type="text"
          id="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="email"
          className="bg-slate-500 text-white p-2 rounded-md"
        />
        <label htmlFor="password" className="block text-center p-2 text-2xl">
          password
        </label>
        <input
          type="password"
          id="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="password"
          className="bg-slate-500 text-white p-2 rounded-md"
        />
        <button
          onClick={onLogin}
          className="bg-blue-500 m-3 text-white p-1 rounded-md focus:outline-none focus:border-gray-500">
          Sign Up
        </button>
        <Link href="/signup">Signup Here</Link>
      </div>
    </div>
  );
}
