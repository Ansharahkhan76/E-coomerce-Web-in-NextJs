import Link from "next/link";
import Navbar from "../Navbar/page";
import Footer from "../Footer/page";

export default function SignUp() {
  return (
    <>
      <Navbar />
      <div className="h-auto flex flex-col md:flex-row px-6 md:px-24 py-10 md:py-20">
        {/* Left Side (Image Section) */}
        <div className="h-auto w-full md:w-[625px] mb-8 md:mb-0">
          <img src="/signup.jpg" className="h-[580px] w-full object-cover" alt="Signup" />
        </div>

        {/* Right Side (Form Section) */}
        <div className="h-auto w-full md:w-[480px] pb-28 pt-16 pl-6 md:pl-24">
          <div className="w-full md:w-[371px] h-auto">
            <p className="text-2xl text-black font-semibold pb-3">Create an account</p>
            <p className="pb-3">Enter your details below!</p>
            <form action="Form">
              <div className="space-y-8">
                <input
                  type="text"
                  className="py-2 px-2 w-full border-b-2 border-b-slate-500 bg-white"
                  required
                  placeholder="Name"
                />
                <input
                  type="email"
                  className="py-2 px-2 w-full border-b-2 border-b-slate-500 bg-white"
                  required
                  placeholder="Email"
                />
                <input
                  type="password"
                  className="py-2 px-2 w-full border-b-2 border-b-slate-500 bg-white"
                  required
                  placeholder="Password"
                />

                <button className="py-3 w-full text-center text-white font-semibold bg-red-500 rounded-lg">
                  Create Account
                </button>
                <button className="py-3 w-full text-center text-black border-2 border-black bg-transparent rounded-lg">
                  Sign Up with Google
                </button>
              </div>
            </form>

            <div className="flex pl-12 gap-4 pt-4">
              <p>Already have an account? </p>
              <Link href="/LogIn">
                <button>
                  <p className="text-black">Log in →</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
