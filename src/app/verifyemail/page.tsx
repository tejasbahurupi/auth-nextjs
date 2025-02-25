"use client";

import Link from "next/link";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function VerifyEmailPage() {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyUserEmail = async () => {
    try {
      const response = await axios.post("/api/users/verifyemail", { token });
      setVerified(true);
    } catch (error: any) {
      setError(true);
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, [token]);

  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl">Verify Email</h1>
      <h2 className="p-2 bg-orange-500 text-black">
        {token ? `${token}` : "No token found"}
      </h2>
      {verified && (
        <div>
          <h2 className="text-2xl">Email verified successfully</h2>
          <Link
            className="rounded bg-blue-500 py-2 px-4 text-white"
            href="/login">
            Login
          </Link>
        </div>
      )}
      {error && <div>Email verification failed</div>}
    </div>
  );
}
