"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { Axios } from "axios";

export default function Signup() {
  const user = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignUp = async () => {};
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-center text-3xl">signup</h1>
    </div>
  );
}
