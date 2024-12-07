import Link from "next/link";
import Image from "next/image";
import Navbar from "../Navbar/page";
import Footer from "../Footer/page";
import { LogIn } from "lucide-react";

export default function LoggedIn() {
  return (
    <>
      <Navbar />
      <div className="h-auto flex flex-col md:flex-row px-6 md:px-24 py-10 md:py-20">
        {/* Left Side (Image Section) */}
        <div className="h-auto w-full md:w-[625px] mb-8 md:mb-0">
          <img src="/signup.jpg" className="h-[580px] w-full object-cover" alt="Signup" />
        </div>

        {/* Right Side (Login Form Section) */}
        <div className="h-auto w-full md:w-[480px] pb-28 pt-16 pl-6 md:pl-24">
          <div className="w-full md:w-[371px] h-auto">
            <p className="text-2xl text-black font-semibold pb-3">Log In to Exclusive</p>
            <p className="pb-3">Enter your details below!</p>
            <form action="Form">
              <div className="space-y-8">
                <input
                  type="text"
                  className="py-2 px-2 w-full border-b-2 border-b-slate-500 bg-white"
                  required
                  placeholder="Email or Phone number"
                />
                <input
                  type="password"
                  className="py-2 px-2 w-full border-b-2 border-b-slate-500 bg-white"
                  required
                  placeholder="Password"
                />
                <button className="py-3 w-full text-center text-white font-semibold bg-red-500 rounded-lg">
                  Log In
                </button>
              </div>
            </form>

            <div className="flex justify-center pt-4">
              <button>
                <p className="text-red-700">Forgot password?</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
