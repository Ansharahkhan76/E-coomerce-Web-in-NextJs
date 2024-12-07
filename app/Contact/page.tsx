import Link from "next/link";
import Navbar from "../Navbar/page";
import Footer from "../Footer/page";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="py-12 px-6 md:px-24">
        <div className="flex flex-col md:flex-row justify-between pt-16 w-full h-auto md:h-[500px]">
          {/* Left Side (Contact Information) */}
          <div className="w-full md:w-[340px] h-full py-8 px-6 md:px-8">
            <div className="flex gap-4 md:gap-6">
              <Phone className="pt-1" size={36} strokeWidth={2} />
              <p className="font-base text-xl md:text-2xl">Call Us</p>
            </div>
            <p className="py-4">We are available 24/7, 7 days a week.</p>
            <p className="border-b pb-6 border-slate-600">Phone: +923123456789</p>

            <div className="flex pt-3 gap-4 md:gap-6">
              <Mail size={32} strokeWidth={1} />
              <p className="font-base text-xl md:text-2xl">Write To Us</p>
            </div>
            <p className="py-3">Fill out our form and we will contact you within 24 hours.</p>
            <p className="border-b pb-8 border-slate-600">Email: anshrahkkhan29@gmail.com</p>
          </div>

          {/* Right Side (Form Section) */}
          <div className="w-full md:w-[1100px] h-auto shadow-lg shadow-slate-500 px-6 md:px-10 py-6 md:py-10">
            <div className="flex flex-col md:flex-row px-4 md:px-28 pb-12 gap-4 md:gap-6">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="py-2 px-2 bg-slate-200 w-full md:w-[30%]"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="py-2 px-2 bg-slate-200 w-full md:w-[30%]"
              />
              <input
                type="number"
                placeholder="Your Phone"
                required
                className="py-2 px-2 bg-slate-200 w-full md:w-[30%]"
              />
            </div>
            <div className="px-[10px] md:px-[123px]">
              <textarea
                name="message"
                className="pt-2 pb-12 px-2 h-48 w-full bg-slate-200"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <div className="px-[10px] md:px-[123px] pt-5">
              <button className="bg-red-500 py-4 px-7 rounded-lg text-white font-semibold w-full md:w-auto">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
