import Link from "next/link";
import Navbar from "../Navbar/page";
import Footer from "../Footer/page";
import { Store, CircleDollarSign, Crown, HandCoins, Bike, Headset, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="py-12 px-6 md:px-24">
        {/* Story Section */}
        <div className="flex flex-col md:flex-row justify-between pt-16 w-full h-auto md:h-[610px]">
          {/* Left Side (Text Content) */}
          <div className="pt-8 md:pt-20 w-full md:w-[570px]">
            <p className="text-black font-medium py-4 text-4xl md:text-5xl">Our Story</p>
            <p className="pb-4">Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands, serving 3 million customers across the region.</p>
            <p>Exclusive offers more than 1 Million products and is growing rapidly. We offer a diverse assortment in categories ranging from consumer electronics to fashion.</p>
          </div>
          {/* Right Side (Image) */}
          <div className="w-full md:w-[705px]">
            <img src="/about.jpg" className="w-full h-full object-cover" alt="About Image" />
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-12 flex flex-col md:flex-row justify-evenly px-6 md:px-24">
          {/* Stat Card 1 */}
          <div className="w-full md:w-[249px] border-2 border-slate-400 py-2 h-[161px] mb-6 md:mb-0">
            <center>
              <div>
                <div className="h-16 w-16 justify-center bg-slate-400 py-2 rounded-full mx-auto">
                  <div className="bg-black h-12 w-12 rounded-full">
                    <Store size={40} strokeWidth={1} className="text-white pt-1" />
                  </div>
                </div>
                <p className="font-lg pt-3 text-2xl font-semibold">15.5k</p>
                <p>Sellers active on our site</p>
              </div>
            </center>
          </div>

          {/* Stat Card 2 */}
          <div className="w-full md:w-[249px] border-2 border-slate-400 py-2 h-[161px] mb-6 md:mb-0">
            <center>
              <div>
                <div className="h-16 w-16 justify-center bg-slate-400 py-2 rounded-full mx-auto">
                  <div className="bg-black h-12 w-12 rounded-full">
                    <CircleDollarSign size={40} strokeWidth={1} className="text-white pt-1" />
                  </div>
                </div>
                <p className="text-2xl font-lg pt-3 font-semibold">33k</p>
                <p>Monthly product sales</p>
              </div>
            </center>
          </div>

          {/* Stat Card 3 */}
          <div className="w-full md:w-[249px] border-2 border-slate-400 py-2 h-[161px] mb-6 md:mb-0">
            <center>
              <div>
                <div className="h-16 w-16 justify-center bg-slate-400 py-2 rounded-full mx-auto">
                  <div className="bg-black h-12 w-12 rounded-full">
                    <Crown size={40} strokeWidth={1} className="text-white pt-1" />
                  </div>
                </div>
                <p className="text-2xl font-lg pt-3 font-semibold">45.5k</p>
                <p>Customers active on our site</p>
              </div>
            </center>
          </div>

          {/* Stat Card 4 */}
          <div className="w-full md:w-[249px] border-2 border-slate-400 py-2 h-[161px] mb-6 md:mb-0">
            <center>
              <div>
                <div className="h-16 w-16 justify-center bg-slate-400 py-2 rounded-full mx-auto">
                  <div className="bg-black h-12 w-12 rounded-full">
                    <HandCoins size={40} strokeWidth={1} className="text-white pt-1" />
                  </div>
                </div>
                <p className="text-2xl font-lg pt-3 font-semibold">25k</p>
                <p>Annual sales on our site</p>
              </div>
            </center>
          </div>
        </div>

        {/* Team Section */}
        <div className="px-6 md:px-24 py-12">
          <div className="w-full h-auto flex flex-col md:flex-row justify-between">
            {/* Card 1 */}
            <div className="h-full w-full md:w-[400px] mb-8 md:mb-0">
              <div className="w-full h-[430px] bg-gray-200">
                <img src="/man-1.png" className="h-full object-cover px-16" alt="Tom Cruise" />
              </div>
              <p className="text-2xl pl-4 pt-6 font-semibold">Tom Cruise</p>
              <p className="text-base pl-4 pt-2 border-b pb-12 border-slate-600">Founder & Chairman</p>
            </div>

            {/* Card 2 */}
            <div className="h-full w-full md:w-[400px] mb-8 md:mb-0">
              <div className="w-full h-[430px] bg-gray-200">
                <img src="/women-2.png" className="h-full object-cover px-16" alt="Emma Watson" />
              </div>
              <p className="text-2xl pl-4 pt-6 font-semibold">Emma Watson</p>
              <p className="text-base pl-4 pt-2 border-b pb-12 border-slate-600">Managing Director</p>
            </div>

            {/* Card 3 */}
            <div className="h-full w-full md:w-[400px]">
              <div className="w-full h-[430px] bg-gray-200">
                <img src="/men-3.png" className="h-full object-cover px-16" alt="Bill Gates" />
              </div>
              <p className="text-2xl pl-4 pt-6 font-semibold">Bill Gates</p>
              <p className="text-base pl-4 pt-2 border-b pb-12 border-slate-600">Product Designer</p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-12 flex flex-col md:flex-row justify-evenly px-6 md:px-24">
          {/* Feature 1 */}
          <div className="w-full md:w-[249px] h-[161px] mb-6 md:mb-0">
            <center>
              <div>
                <div className="h-16 w-16 justify-center bg-slate-400 py-2 rounded-full mx-auto">
                  <div className="bg-black h-12 w-12 rounded-full">
                    <Bike size={40} strokeWidth={1} className="text-white" />
                  </div>
                </div>
                <p className="text-base font-lg pt-3 font-semibold">FREE AND FAST DELIVERY</p>
                <p>Free delivery for all orders over $140</p>
              </div>
            </center>
          </div>

          {/* Feature 2 */}
          <div className="w-full md:w-[249px] h-[161px] mb-6 md:mb-0">
            <center>
              <div>
                <div className="h-16 w-16 justify-center bg-slate-400 py-2 rounded-full mx-auto">
                  <div className="bg-black h-12 w-12 rounded-full">
                    <Headset size={40} strokeWidth={1} className="text-white pt-1" />
                  </div>
                </div>
                <p className="text-base font-lg pt-3 font-semibold">24/7 CUSTOMER SERVICE</p>
                <p>Friendly 24/7 customer support available</p>
              </div>
            </center>
          </div>

          {/* Feature 3 */}
          <div className="w-full md:w-[249px] h-[161px] mb-6 md:mb-0">
            <center>
              <div>
                <div className="h-16 w-16 justify-center bg-slate-400 py-2 rounded-full mx-auto">
                  <div className="bg-black h-12 w-12 rounded-full">
                    <ShieldCheck size={40} strokeWidth={1} className="text-white pt-1" />
                  </div>
                </div>
                <p className="text-base font-lg pt-3 font-semibold">MONEY BACK GUARANTEE</p>
                <p>We return your money within 30 days</p>
              </div>
            </center>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
