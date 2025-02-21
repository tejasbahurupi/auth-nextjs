"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = useState("nothing");

  const logout = async () => {
    try {
      const response = await axios.get("/api/users/logout");
      console.log("Logout successful", response.data);
      toast.success("Logout successful! 🎉");
      router.push("/login");
    } catch (error) {
      console.error("Logout failed", error);
      toast.error("Logout failed. Please try again. ❌");
    }
  };

  const getUserDetails = async () => {
    try {
      const response = await axios.get("/api/users/me");
      console.log(response.data.data);
      setData(response.data.data._id);
    } catch (error) {
      console.error("Failed to fetch user details", error);
    }
  };

  useEffect(() => {
    // Fetch user details once when component mounts
    getUserDetails();
  }, []);

  useEffect(() => {
    // When data is updated (and is not the default value), redirect to profile page
    if (data !== "nothing") {
      router.push(`/profile/${data}`);
    }
  }, [data, router]);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-slate-900 text-3xl">
      <Toaster />
      Profile
      <button
        onClick={logout}
        className="bg-blue-500 rounded p-2 ml-2 mt-3 text-black">
        Logout
      </button>
    </div>
  );
}
