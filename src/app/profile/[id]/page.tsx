import axios from "axios";
import Link from "next/link";
import { Toaster, toast } from "react-hot-toast";

export default async function UserProfile({ params }: any) {
  const { id } = await params;

  // const logout = () => {
  //   try {
  //   } catch (error) {
  //     console.error("Logout failed", error);
  //     toast.error("error logging out");
  //   }
  // };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-slate-900 text-white  ">
      <div className="flex justify-center items-center bg-slate-900 text-white text-4xl">
        Profile:
        <span className="bg-orange-500 rounded p-2 ml-2 text-black ">{id}</span>
      </div>
    </div>
  );
}
