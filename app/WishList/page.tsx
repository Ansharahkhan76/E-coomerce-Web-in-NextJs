import Link from "next/link";
import Navbar from "../Navbar/page";
import Footer from "../Footer/page";
import Image from "next/image";
import { Heart } from "lucide-react";
import { Eye } from "lucide-react";
import { Star } from "lucide-react";
import { Trash2 } from "lucide-react";
import { ShoppingCart } from "lucide-react";

export default function WishList() {
  return (
    <>
      <Navbar />

      <div>
        <div className="py-12 flex px-4 md:px-24 justify-between">
          <div className="flex justify-evenly">
            <div className="text-2xl pr-24 font-bold">Wish List products (4)</div>
          </div>
          <button className="border-black border-2 text-black font-semibold bg-white py-4 px-7 rounded-lg">
            Move All to Bag
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="flex pt-12 pb-20 px-16 md:px-24 justify-between flex-wrap gap-8">

        {/* Card 1 */}
       <Link href="/Cart">
       <div className="h-[350px] w-[270px] mb-16">
          <div className="bg-slate-200 w-[270px] h-[250px]">
            <div className="flex pl-2 pr-2 pt-2 justify-between">
              <button className="flex rounded-lg bg-red-500 py-1 px-3 text-white text-lg font-semibold"> - 40%</button>
              <div><Trash2 size={20} /></div>
            </div>
            <div className="pl-12 pb-5">
              <Image className="justify-center" alt="" src="/gamepad.png" height={152} width={172}></Image>
            </div>
            <div className="bg-black w-full text-white text-center h-6">
              <p className="flex text-center px-16"> <ShoppingCart /> Add to Cart</p>
            </div>
          </div>
          <div className="pl-3 pt-3">
            <p className="text-lg font-medium">HAVIT HV-G92 Gamepad</p>
            <div className="flex gap-4 pt-1">
              <p className="text-red-800 text-base font-semibold">$120</p>
              <p className="text-slate-400 font-medium line-through">$160</p>
            </div>
            <div className="flex gap-4  border-b pb-12 border-slate-600  pt-1">
              <p className="flex text-yellow-500 text-base"> <Star /><Star /><Star /><Star /><Star /></p>
              <p className="text-slate-600 font-semibold">(88)</p>
            </div>
          </div>
        </div></Link>

        {/* Card 2 */}
        <Link href="/Cart">
        <div className="h-[350px] w-[270px] mb-16">
          <div className="bg-slate-200 w-[270px] h-[250px]">
            <div className="flex pl-2 pr-2 pt-2 justify-between">
              <button className="flex rounded-lg bg-red-500 py-1 px-3 text-white text-lg font-semibold"> - 35%</button>
              <div><Trash2 size={20} /></div>
            </div>
            <div className="pl-12 pb-5">
              <Image className="justify-center" alt="" src="/keyboard.png" height={152} width={172}></Image>
            </div>
            <div className="bg-black w-full text-white text-center h-6">
              <p className="flex text-center px-16"> <ShoppingCart /> Add to Cart</p>
            </div>
          </div>
          <div className="pl-3 pt-3">
            <p className="text-lg font-medium">AK-900 Wired Keyboard</p>
            <div className="flex gap-4 pt-1">
              <p className="text-red-800 text-base font-semibold">$960</p>
              <p className="text-slate-400 font-medium line-through">$1160</p>
            </div>
            <div className="flex gap-4  border-b pb-12 border-slate-600  pt-1">
              <p className="flex text-yellow-500 text-base"> <Star /><Star /><Star /><Star /><Star /></p>
              <p className="text-slate-600 font-semibold">(73)</p>
            </div>
          </div>
        </div></Link>

        {/* Card 3 */}
        <Link href="/Cart">
        <div className="h-[350px] w-[270px] mb-16">
          <div className="bg-slate-200 w-[270px] h-[250px]">
            <div className="pl-[230px]"><Trash2 size={20} /></div>
            <div className="pl-12 pb-6">
              <Image className="justify-center" alt="" src="/led.png" height={152} width={172}></Image>
            </div>
            <div className="bg-black w-full text-white text-center h-6">
              <p className="flex text-center px-16"> <ShoppingCart /> Add to Cart</p>
            </div>
          </div>
          <div className="pl-3 pt-3">
            <p className="text-lg font-medium">IPS LCD Gaming Monitor</p>
            <div className="flex gap-4 pt-1">
              <p className="text-red-800 text-base font-semibold">$370</p>
              <p className="text-slate-400 font-medium line-through">$4000</p>
            </div>
            <div className="flex gap-4  border-b pb-12 border-slate-600  pt-1">
              <p className="flex text-yellow-500 text-base"> <Star /><Star /><Star /><Star /><Star /></p>
              <p className="text-slate-600 font-semibold">(75)</p>
            </div>
          </div>
        </div></Link>

        {/* Card 4 */}
        <Link href="/Cart">
        <div className="h-[350px] w-[270px] mb-16">
          <div className="bg-slate-200 w-[270px] h-[250px]">
            <div className="pl-[230px]"><Trash2 size={20} /></div>
            <div className="pl-12 pb-5">
              <Image className="justify-center" alt="" src="/chair.png" height={152} width={172}></Image>
            </div>
            <div className="bg-black w-full text-white text-center h-6">
              <p className="flex text-center px-16"> <ShoppingCart /> Add to Cart</p>
            </div>
          </div>
          <div className="pl-3 pt-3">
            <p className="text-lg font-medium">S-Series Comfort Chair</p>
            <div className="flex gap-4 pt-1">
              <p className="text-red-800 text-base font-semibold">$375</p>
              <p className="text-slate-400 font-medium line-through">$4000</p>
            </div>
            <div className="flex gap-4  border-b pb-12 border-slate-600  pt-1">
              <p className="flex text-yellow-500 text-base"> <Star /><Star /><Star /><Star /><Star /></p>
              <p className="text-slate-600 font-semibold">(99)</p>
            </div>
          </div>
        </div></Link>

      </div>

      {/* "Just For You" Section */}
      <div className=" pb-12">
        <div className="py-12 flex px-4 md:px-24 justify-between">
          <div className="flex gap-5 justify-evenly">
            <div className="border-2 bg-red-600 h-10 w-6 rounded-lg"></div>
            <div className="text-2xl pr-24 font-bold">Just For You</div>
          </div>
          <Link href="/"><button className="border-black border-2 text-black font-semibold flex gap-3 bg-white py-4 px-7 rounded-lg">
            See All <Eye />
          </button></Link>
        </div>

        {/* "Just For You wala Cards */}
        <div className="flex pt-12 pb-20 px-16 md:px-24 justify-between flex-wrap gap-8">
          
          {/* Just For You Card 1 */}
          <Link href="/Cart">
          <div className="h-[350px] w-[270px] mb-16">
            <div className="bg-slate-200 w-[270px] h-[250px]">
              <div className="flex pl-2 pr-2 pt-2 justify-between">
                <button className="flex rounded-lg bg-red-500 py-1 px-3 text-white text-lg font-semibold"> - 40%</button>
                <div><Eye size={20} /></div>
              </div>
              <div className="pl-12 pb-5">
                <Image className="justify-center" alt="" src="/gamepad.png" height={152} width={172}></Image>
              </div>
              <div className="bg-black w-full text-white text-center h-6">
                <p className="flex text-center px-16"> <ShoppingCart /> Add to Cart</p>
              </div>
            </div>
            <div className="pl-3 pt-3">
              <p className="text-lg font-medium">HAVIT HV-G92 Gamepad</p>
              <div className="flex gap-4 pt-1">
                <p className="text-red-800 text-base font-semibold">$120</p>
                <p className="text-slate-400 font-medium line-through">$160</p>
              </div>
              <div className="flex gap-4  border-b pb-12 border-slate-600  pt-1">
                <p className="flex text-yellow-500 text-base"> <Star /><Star /><Star /><Star /><Star /></p>
                <p className="text-slate-600 font-semibold">(88)</p>
              </div>
            </div>
          </div></Link>

          {/* Add other Just For You cards below similarly */}
          
        </div>
      </div>

      <Footer />
    </>
  );
}
