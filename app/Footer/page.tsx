import Link from "next/link";
import Image from "next/image";
import { SendHorizontal } from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-black h-auto w-full">
      <div className="py-16 flex flex-col md:flex-row text-white justify-between px-6 md:px-24 space-y-8 md:space-y-0">
        {/* Exclusive Section */}
        <div className="h-auto w-full md:w-[230px] text-center md:text-left">
          <p className="text-3xl font-semibold">Exclusive</p>
          <p className="py-3">Subscribe</p>
          <p className="py-3">Get 10% off on Your First Order</p>
          <div className="flex bg-black border-2 border-white items-center pl-2 pt-2 pb-2">
            <input
              type="text"
              className="bg-black text-white"
              placeholder="Enter your email"
            />
            <div>
              <SendHorizontal className="pr-1" />
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="h-auto w-full md:w-[230px] text-center md:text-left">
          <p className="text-3xl font-semibold">Support</p>
          <p className="py-3">Governer House Sindh Karachi</p>
          <p className="py-3">
            <Link href="mailto:anshrahkhan29@gmail.com">
              anshrahkhan29@gmail.com /
            </Link>
          </p>
          <p className="py-3">
            <Link href="mailto:anshrahmhirah@gmail.com">
              anshrahmhirah@gmail.com
            </Link>
          </p>
          <p className="py-3">No # 03123456789</p>
        </div>

        {/* Account Section */}
        <div className="h-auto w-full md:w-[230px] text-center md:text-left">
          <p className="text-3xl font-semibold">Account</p>
          <p className="py-3">My Account</p>
          <Link href="/SignUp">
            <p className="py-3">Login / Register</p>
          </Link>
          <p className="py-3">Cart</p>
          <Link href="/WishList">
            <p className="py-3">Wishlist</p>
          </Link>
          <p className="py-3">Shop</p>
        </div>

        {/* Quick Links Section */}
        <div className="h-auto w-full md:w-[230px] text-center md:text-left">
          <p className="text-3xl font-semibold">Quick Link</p>
          <p className="py-3">Privacy Policy</p>
          <p className="py-3">Terms Of Use</p>
          <p className="py-3">FAQ</p>
          <Link href="/SignUp">
            <p className="py-3">Contact</p>
          </Link>
        </div>

        {/* Download App Section */}
        <div className="h-auto w-full md:w-[260px] text-center md:text-left">
          <p className="text-3xl font-semibold">Download APP</p>
          <p className="py-3 text-slate-600">Save $3 with App New User Only</p>
          <div className="flex justify-center md:justify-between">
            <div className="">
              <img src="/QR.jpg" className="h-28 w-28" alt="QR Code" />
            </div>
            <div className="text-sm text-center py-14">Roll No</div>
          </div>
          <p className="py-3">Hackathon E-Commerce Web Using NextJs & Tailwind CSS by</p>
          <p>
            <b>Ansharah Khan</b>
          </p>
        </div>
      </div>

      {/* Social Links Section */}
      <div className="py-2 px-6 md:px-24 text-center text-white">
        <div className="flex justify-center space-x-4 pt-6">
          <div className="rounded-full bg-white">
            <Link href="https://github.com/Ansharahkhan76">
              <Image
                alt="Github"
                height={40}
                width={40}
                src="/github.png"
                className="rounded-full"
              />
            </Link>
          </div>

          <div className="rounded-full bg-white">
            <Link href="https://www.linkedin.com/in/ansharah-khan-25a8162b7">
              <Image
                alt="LinkedIn"
                height={40}
                width={40}
                src="/linkedin.webp"
                className="rounded-sm"
              />
            </Link>
          </div>

          <div className="rounded-full bg-white">
            <Link href="mailto:anshrahkhan29@gmail.com">
              <Image
                alt="Email"
                height={40}
                width={40}
                src="/email.jpg"
                className="rounded-full filter"
              />
            </Link>
          </div>

          <div className="rounded-full bg-white">
            <Link href="https://www.instagram.com/_ansharah.khan_">
              <Image
                alt="Instagram"
                height={40}
                width={40}
                src="/insta.png"
                className="rounded-full filter"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
