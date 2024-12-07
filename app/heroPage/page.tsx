import Link from "next/link";
import { ChevronRight} from "lucide-react";
import Image from "next/image";
import Countdown from "../Countdown/page";
import { ArrowRight } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import { Star } from "lucide-react";
import { Heart } from "lucide-react";
import { Eye } from "lucide-react";
import { Smartphone } from "lucide-react";
import { Camera } from "lucide-react";
import { Watch } from "lucide-react";
import { Laptop } from "lucide-react";
import { Gamepad } from "lucide-react";
import { Headphones } from "lucide-react";
import { Bike } from "lucide-react";
import { Headset } from "lucide-react";
import { ShieldCheck } from 'lucide-react';
import Footer from "../Footer/page";


function HeroPage(){
    return(
        <>
        {/* Hero Section  */}
        <div className="py-12 flex md:px-24 sm:px-3">
            
                {/* Left div */}
                <div className="w-[310px] hidden sm:block font-medium">
                    <div className="">
               <Link href="#WomenProducts"><div className="flex justify-between pr-5 cursor-pointer">
                    <p>Women&apos;s Fashion </p><ChevronRight />
                    </div></Link>
                    <Link href="#MenProducts"><div className="flex pt-4 pr-5 justify-between cursor-pointer">
                    <p>Men&apos;s Fashion </p><ChevronRight />
                    </div></Link>
                    <p  className=" pt-4">Electronics</p>
                    <p className=" pt-4">Home & LifeStyle</p>
                    <p className=" pt-4">Medicine</p>
                    <p className=" pt-4">Sports & Outdoor</p>
                    <p  className=" pt-4">Baby&apos; & Toys</p>
                    <p className=" pt-4">Groceries & Pets</p>
                    <p className=" pt-4">Health & Beauty</p>
                    </div>
                </div>

                    {/* for grey line */}
                <div className="border-2 hidden sm:block border-slate-200">

                </div>

            {/* Right Div */}
            <div className="md:pl-20 px-16 md:px-4">
  <div className="bg-black text-white w-full md:w-[1000px] flex flex-col md:flex-row py-14 pr-6 px-4 md:px-12 justify-between h-auto md:h-[344px]">
    
    {/* Left side */}
    <div className="mb-6 md:mb-0">
      <div className="w-full md:w-[200px] h-12 flex">
        <Image 
          alt="Apple"
          src="/apple.png"
          height={40}
          width={49}
        />
        <p className="pt-4 pl-5">iPhone 14 Series</p>
      </div>
      
      <div>
        <p className="text-4xl md:text-6xl pt-4 font-bold">Up to 10% <br /> of Voucher</p>
      </div>
      
      <div className="pt-5 cursor-pointer flex gap-4">
        <p>Shop Now </p>
        <ArrowRight />
      </div>
    </div>

    {/* Right side */}
    <div className="flex justify-center md:justify-end">
      <Image 
        alt="Iphone"
        src="/iPhone.png"
        height={300} 
        width={300} 
        className="md:h-[300px]  md:w-[400px]"
      />
    </div>
  </div>
</div>

        </div>

        {/* Hero Sec-1 Complete */}

        {/* Home page -2 */}

        <div className="md:py-16 sm:py-8 sm:px-3 flex md:px-24">

            <div className="flex pl-4 ">
            <div className="border-2 px-3 bg-red-600 h-10 w-6 rounded-lg"></div>
            <p className="text-red-600 align-center pt-2 md:pl-4 pl-3 font-semibold">Today&apos;s</p>
            </div>
        </div>

            
        <div className="py-12 flex flex-col md:flex-row md:px-24 px-3 justify-between items-center md:items-center">
  <div className="flex md:justify-between w-full md:w-auto items-center mb-4 md:mb-0">
    <div className="text-2xl md:text-3xl font-bold md:pr-24 sm:gap-3">Flash Sales</div>
    <Countdown />
  </div>

  <div className="flex justify-center pr-20 gap-6">
    <div className="pt-5 px-2 rounded-full cursor-pointer">
      <ArrowLeft />
    </div>
    <div className="pt-5 px-2 rounded-full cursor-pointer">
      <ArrowRight />
    </div>
  </div>
</div>

{/* LEts start Cardssss */}

<div className="pt-12 pb-20 md:px-24 sm:px-10 flex flex-wrap justify-center md:justify-between gap-6">
  {/* First Card */}
  <Link href="/WishList"><div className="h-[350px] w-[270px] bg-slate-200 rounded-lg mb-16">
    <div className="flex pl-2 pr-2 pt-2 justify-between">
      <button className="flex rounded-lg bg-red-500 py-1 px-3 text-white text-lg font-semibold"> - 40%</button>
      <div>
        <div><Heart /></div>
        <div><Eye /></div>
      </div>
    </div>
    <div className="pl-12 pb-5">
      <Image className="justify-center" alt="" src="/gamepad.png" height={152} width={172} />
    </div>
    <div className="pl-3 bg-white pt-3">
      <p className="text-lg font-medium">HAVIT HV-G92 Gamepad</p>
      <div className="flex gap-4 pt-1">
        <p className="text-red-800 text-base font-semibold">$120</p>
        <p className="text-slate-400 font-medium line-through">$160</p>
      </div>
      <div className="flex border-b pb-12 border-slate-600 gap-4 pt-1">
        <p className="flex text-yellow-500 text-base"> <Star /><Star /><Star /><Star /><Star /></p>
        <p className="text-slate-600 font-semibold">(88)</p>
      </div>
    </div>
  </div></Link>

  {/* Second Card */}
  <Link href="/WishList"><div className="h-[350px] w-[270px] bg-slate-200 rounded-lg mb-16">
    <div className="flex pl-2 pr-2 pt-2 justify-between">
      <button className="flex rounded-lg bg-red-500 py-1 px-3 text-white text-lg font-semibold"> - 35%</button>
      <div>
        <div><Heart /></div>
        <div><Eye /></div>
      </div>
    </div>
    <div className="pl-12 pb-5">
      <Image className="justify-center" alt="" src="/keyboard.png" height={152} width={172} />
    </div>
    <div className="pl-3 bg-white pt-3">
      <p className="text-lg font-medium">AK-900 Wired Keyboard</p>
      <div className="flex gap-4 pt-1">
        <p className="text-red-800 text-base font-semibold">$960</p>
        <p className="text-slate-400 font-medium line-through">$1160</p>
      </div>
      <div className="flex gap-4 pt-1 border-b pb-12 border-slate-600">
        <p className="flex text-yellow-500 text-base"> <Star /><Star /><Star /><Star /><Star /></p>
        <p className="text-slate-600 font-semibold">(73)</p>
      </div>
    </div>
  </div></Link>

  {/* Third Card */}
  <Link href="/WishList"><div className="h-[350px] w-[270px] bg-slate-200 rounded-lg mb-16">
    <div className="flex pl-2 pr-2 pt-2 justify-between">
      <button className="flex rounded-lg bg-red-500 py-1 px-3 text-white text-lg font-semibold"> - 30%</button>
      <div>
        <div><Heart /></div>
        <div><Eye /></div>
      </div>
    </div>
    <div className="pl-12 pb-5">
      <Image className="justify-center" alt="" src="/led.png" height={152} width={172} />
    </div>
    <div className="pl-3 bg-white pt-3">
      <p className="text-lg font-medium">IPS LCD Gaming Monitor</p>
      <div className="flex gap-4 pt-1">
        <p className="text-red-800 text-base font-semibold">$370</p>
        <p className="text-slate-400 font-medium line-through">$4000</p>
      </div>
      <div className="flex gap-4 border-b pb-12 border-slate-600 pt-1">
        <p className="flex text-yellow-500 text-base"> <Star /><Star /><Star /><Star /><Star /></p>
        <p className="text-slate-600 font-semibold">(75)</p>
      </div>
    </div>
  </div></Link>

  {/* Fourth Card */}
  <Link href="/WishList">
  <div className="h-[350px] w-[270px] bg-slate-200 rounded-lg mb-16">
    <div className="flex pl-2 pr-2 pt-2 justify-between">
      <button className="flex rounded-lg bg-red-500 py-1 px-3 text-white text-lg font-semibold"> - 25%</button>
      <div>
        <div><Heart /></div>
        <div><Eye /></div>
      </div>
    </div>
    <div className="pl-12 ">
      <Image className="justify-center" alt="" src="/chair.png" height={152} width={172} />
    </div>
    <div className="pl-3 bg-white">
      <p className="text-lg font-medium">S-Series Comfort Chair</p>
      <div className="flex gap-4 pt-1">
        <p className="text-red-800 text-base font-semibold">$375</p>
        <p className="text-slate-400 font-medium line-through">$4000</p>
      </div>
      <div className="flex gap-4 border-b pb-12 border-slate-600 pt-1">
        <p className="flex text-yellow-500 text-base"> <Star /><Star /><Star /><Star /><Star /></p>
        <p className="text-slate-600 font-semibold">(99)</p>
      </div>
    </div>
  </div></Link>

</div> 



            

<center>
 <Link href="/About"> <button className="text-xl md:text-2xl font-semibold text-white bg-red-500 rounded-lg py-3 px-6 md:px-12">
    View All Products
  </button></Link>
</center>


{/* catogories */}

                <div className="py-12 text-slate-600"> <hr /></div>
                <div className="flex md:px-24 sm:py-6 px-10 md:py-12">
            <div className="border-2  bg-red-600 h-10 w-6 rounded-lg"></div>
            <p className="text-red-600 align-center pt-2 pl-4 font-semibold">Categories</p>
            </div>
            <div className="py-12 px-4 md:px-24 flex flex-col md:flex-row justify-between items-center">
    <div className="flex justify-center w-full md:w-auto mb-4 md:mb-0">
        <div className="text-xl md:text-2xl font-bold">Browse By Category</div>
    </div>
    <div className="flex justify-center gap-6">
        <div className="pt-5 px-2 rounded-full">
            <ArrowLeft />
        </div>
        <div className="pt-5 px-2 rounded-full">
            <ArrowRight />
        </div>
    </div>
</div>


{/* 6 icons boxes */}


<div className="px-16 md:px-24">
    <div className="flex flex-wrap justify-center gap-4 md:justify-between">
        <div className="w-full sm:w-[170px] h-36 border-slate-600 border-2 hover:bg-red-500 hover:text-white bg-slate-200 py-4 flex flex-col items-center justify-center text-center">
            <Smartphone size={44} strokeWidth={2.25} absoluteStrokeWidth />
            <p className="text-base font-semibold pt-5">Phone</p>
        </div>
        
        <div className="w-full  sm:w-[170px] h-36 border-slate-600 border-2 hover:bg-red-500 hover:text-white bg-slate-200 py-4 flex flex-col items-center justify-center text-center">
            <Laptop size={44} strokeWidth={2.25} absoluteStrokeWidth />
            <p className="text-base font-semibold pt-5">Computers</p>
        </div>

        <div className="w-full sm:w-[170px] h-36 border-slate-600 border-2 bg-red-500 hover:text-white  py-4 flex flex-col items-center justify-center text-center">
            <Watch size={44} strokeWidth={2.25} absoluteStrokeWidth />
            <p className="text-base font-semibold pt-5">SmartWatch</p>
        </div>

        <div className="w-full sm:w-[170px] h-36 border-slate-600 border-2 hover:bg-red-500 hover:text-white bg-slate-200 py-4 flex flex-col items-center justify-center text-center">
            <Camera size={44} strokeWidth={2.25} absoluteStrokeWidth />
            <p className="text-base font-semibold pt-5">Camera</p>
        </div>

        <div className="w-full sm:w-[170px] h-36 border-slate-600 border-2 hover:bg-red-500 hover:text-white bg-slate-200 py-4 flex flex-col items-center justify-center text-center">
            <Headphones size={44} strokeWidth={2.25} absoluteStrokeWidth />
            <p className="text-base font-semibold pt-5">HeadPhones</p>
        </div>

        <div className="w-full sm:w-[170px] h-36 border-slate-600 border-2 hover:bg-red-500 hover:text-white bg-slate-200 py-4 flex flex-col items-center justify-center text-center">
            <Gamepad size={44} strokeWidth={2.25} absoluteStrokeWidth />
            <p className="text-base font-semibold pt-5">Gaming</p>
        </div>
    </div>
</div>



<div className="py-14 text-slate-600">
    <hr />
</div>

<div className="flex px-16 md:px-24">
    <div className="border-2 bg-red-600 h-10 w-6 rounded-lg"></div>
    <p className="text-red-600 text-center pt-2 pl-4 font-semibold">This Month</p>
</div>

<div id="WomenProducts" className="py-12 flex flex-col md:flex-row px-4 md:px-24 justify-between items-center md:items-start">
    <div className="flex justify-center md:justify-start text-2xl font-bold pr-0 md:pr-24">
        Best Selling Products
    </div>
    <Link href="/About"><button className="text-white font-semibold bg-red-500 py-4 px-7 rounded-lg mt-4 md:mt-0">
        View All
    </button></Link>
</div>

{/* Again 3 Cardsss  */}

            <div  className=" md:flex pt-12 pb-20 justify-center  px-12 md:justify-between">

            <Link href="/WishList"> <div className=" mb-20 h-[350px] w-[270px]">
                <div className="bg-slate-200 w-[270px] h-[250px]">
                    <div className="flex pl-2 pr-2 pt-2 justify-between">
                       
                        <div >
                        <div className="pb-4"><Heart /></div>
                        <div><Eye /></div>
                        </div>
                         </div>
                         <div className="pl-12 pb-5">
                            <Image
                            className=" justify-center"
                            alt=""
                            src="/jacket.png"
                            height={152}
                            width={172}></Image>
                        </div>
                </div>
                <div className="pl-3 pt-3"> 
                    <p className="text-lg font-medium">The north coat</p>
                    <div className="flex gap-4 pt-1">
                        <p className="text-red-800 text-base font-semibold">$26</p>
                        <p className="text-slate-400 font-medium line-through">$360</p>
                    </div>
                    <div className="flex gap-4 pt-1  border-b pb-12 border-slate-600">
                        <p className="flex text-yellow-500 text-base"> <Star /><Star /><Star /><Star /><Star /></p>
                        <p className="text-slate-600 font-semibold">(84)</p>
                    </div>
                </div>
            </div></Link>

            <Link href="/WishList"><div className="mb-20 h-[350px] w-[270px]">
                <div className="bg-slate-200 w-[270px] h-[250px]">
                    <div className="flex pl-2 pr-2 pt-2 justify-between">
                        <div >
                        <div className="pb-4"><Heart /></div>
                        <div><Eye /></div>
                        </div>
                         </div>
                         <div className="pl-12 pb-5">
                            <Image
                            className=" justify-center"
                            alt=""
                            src="/purse.png"
                            height={152}
                            width={172}></Image>
                        </div>
                </div>
                <div className="pl-3 pt-3"> 
                    <p className="text-lg font-medium">Gucci duffle bag</p>
                    <div className="flex gap-4 pt-1">
                        <p className="text-red-800 text-base font-semibold">$960</p>
                        <p className="text-slate-400 font-medium line-through">$1160</p>
                    </div>
                    <div className="flex gap-4  border-b pb-12 border-slate-600 pt-1">
                        <p className="flex text-yellow-500 text-base"> <Star /><Star /><Star /><Star /><Star /></p>
                        <p className="text-slate-600 font-semibold">(65)</p>
                    </div>
                </div>
            </div></Link>

            <Link href="/WishList"><div className="mb-20 h-[350px] w-[270px]">
                <div className="bg-slate-200 w-[270px] h-[250px]">
                    <div className="flex pl-2 pr-2 pt-2 justify-between">
                        <div >
                        <div className="pb-4"><Heart /></div>
                        <div><Eye /></div>
                        </div>
                         </div>
                         <div className="pl-12 pb-5">
                            <Image
                            className=" justify-center"
                            alt=""
                            src="/speaker.png"
                            height={172}
                            width={212}></Image>
                        </div>
                </div>
                <div className="pl-3 pt-3"> 
                    <p className="text-lg font-medium">RGB liquid CPU Cooler</p>
                    <div className="flex gap-4 pt-1">
                        <p className="text-red-800 text-base font-semibold">$160</p>
                        <p className="text-slate-400 font-medium line-through">$170</p>
                    </div>
                    <div className="flex gap-4  border-b pb-12 border-slate-600 pt-1">
                        <p className="flex text-yellow-500 text-base"> <Star /><Star /><Star /><Star /><Star /></p>
                        <p className="text-slate-600 font-semibold">(75)</p>
                    </div>
                </div>
            </div></Link>

           <Link href="/WishList">
           <div className="mb-20 h-[350px] w-[270px]">
                <div className="bg-slate-200 w-[270px] h-[250px]">
                    <div className="flex pl-2 pr-2 pt-2 justify-between">
                        <div >
                        <div className="pb-4"><Heart /></div>
                        <div><Eye /></div>
                        </div>
                         </div>
                         <div className="pl-12 pb-5">
                            <Image
                            className=" justify-center"
                            alt=""
                            src="/studytable.png"
                            height={250}
                            width={212}></Image>
                        </div>
                </div>
                <div className="pl-3 pt-3"> 
                    <p className="text-lg font-medium">Small book Shelf</p>
                    <div className="flex gap-4 pt-1">
                        <p className="text-red-800 text-base font-semibold">$360</p>
                    </div>
                    <div className="flex gap-4  border-b pb-12 border-slate-600 pt-1">
                        <p className="flex text-yellow-500 text-base"> <Star /><Star /><Star /><Star /><Star /></p>
                        <p className="text-slate-600 font-semibold">(89)</p>
                    </div>
                </div>
            </div></Link>

            </div>
            


            {/* 3 card code end */}

            <div className="py-12 px-10 md:px-24">
    <div className="bg-black text-white w-full flex flex-col md:flex-row pl-4 md:pl-12 justify-between h-auto md:h-[430px]">

        {/* Left side */}
        <div className="text-center md:text-left">
            <div className="text-lime-600 font-semibold pt-12 text-lg">Categories</div>

            <div>
                <p className="text-4xl md:text-6xl pb-4 pt-4 font-bold">
                    Enhance Your <br /> Music Experience
                </p>
            </div>
            <div> 
                <Countdown /> 
            </div>
            <button className="py-5 px-12 mt-4 md:mt-0 rounded-lg bg-lime-700 text-black cursor-pointer flex gap-4 mx-auto md:mx-0">
                Buy Now
            </button>
        </div>

        {/* Right side */}
        <div className="mb-12 md:mb-0 flex justify-center">
            <Image 
                className="h-[350px] w-[350px] md:h-[530px] md:w-[600px] object-contain"
                alt="Speaker Mac"
                src="/micspe.png"
                height={500}
                width={500}
            />
        </div>

    </div>
</div>


                
 {/* Our Prooducts Sectionnnn */}


 <div className="flex px-16 md:px-24 py-12">
    <div className="border-2 bg-red-600 h-10 w-6 rounded-lg"></div>
    <p className="text-red-600 text-center md:text-left pt-2 pl-4 font-semibold">Our Products</p>
</div>

<div id="MenProducts" className="py-12 flex px-4 md:px-24 justify-between flex-col md:flex-row">
    <div className="flex justify-center md:justify-start mb-4 md:mb-0">
        <div className="text-2xl md:text-3xl font-bold text-center md:text-left">Explore Our Products</div>
    </div>
    <div className="flex justify-center gap-6">
        <div className="pt-5 px-2 rounded-full">
            <ArrowLeft />
        </div>
        <div className="pt-5 px-2 rounded-full">
            <ArrowRight />
        </div>
    </div>
</div>

            {/* Again againnnnnn Cardss */}

            <div className="md:flex pt-12 pb-20 px-16 md:justify-between">
            <Link href="/WishList">
            
            <div className="mb-16 h-[350px] w-[270px]">
                <div className="bg-slate-200 w-[270px] h-[250px]">
                    <div className="flex pl-2 pr-2 pt-2 justify-between">
                       
                        <div >
                        <div className="pb-4"><Heart /></div>
                        <div><Eye /></div>
                        </div>
                         </div>
                         <center>
                         <div className=" pb-8">
                            <Image
                            className=""
                            alt=""
                            src="/dogfood.jpg"
                            height={90}
                            width={105}></Image>
                        </div>
                         </center>
                </div>
                <div className="pl-3 pt-3"> 
                    <p className="text-lg font-medium">Breed Dry Dog Food</p>
                    <div className="flex gap-4 pt-1">
                        <p className="text-red-800 text-base font-semibold">$100</p>
                    
                    <div className="flex gap-4  border-b pb-12 border-slate-600 pt-1">
                        <p className="flex text-yellow-500 text-base fill-yellow-500"> <Star /><Star /><Star /><Star /><Star /></p>
                        <p className="text-slate-600 font-semibold">(84)</p></div>
                    </div>
                </div>
            </div></Link>

           <Link href="/WishList">
           <div className="mb-16 h-[350px] w-[270px]">
                <div className="bg-slate-200 w-[270px] h-[250px]">
                    <div className="flex pl-2 pr-2 pt-2 justify-between">
                       
                        <div >
                        <div className="pb-4"><Heart /></div>
                        <div><Eye /></div>
                        </div>
                         </div>
                         <center>
                         <div className=" pb-8">
                            <Image
                            className=""
                            alt=""
                            src="/camera.png"
                            height={140}
                            width={165}></Image>
                        </div>
                         </center>
                </div>
                <div className="pl-3 pt-3"> 
                    <p className="text-lg font-medium">CANON EOS DSLR Camera</p>
                    <div className="flex gap-4 pt-1">
                        <p className="text-red-800 text-base font-semibold">$360</p>
                    
                    <div className="flex gap-4  border-b pb-12 border-slate-600 pt-1">
                        <p className="flex text-yellow-500 text-base fill-yellow-500"> <Star /><Star /><Star /><Star /><Star /></p>
                        <p className="text-slate-600 font-semibold">(95)</p></div>
                    </div>
                </div>
            </div></Link>

            <Link href="/WishList">
            <div className="mb-16 h-[350px] w-[270px]">
                <div className="bg-slate-200 w-[270px] h-[250px]">
                    <div className="flex pl-2 pr-2 pt-2 justify-between">
                       
                        <div >
                        <div className="pb-4"><Heart /></div>
                        <div><Eye /></div>
                        </div>
                         </div>
                         <center>
                         <div className=" pb-8">
                            <Image
                            className=""
                            alt=""
                            src="/slimlaptop.png"
                            height={160}
                            width={195}></Image>
                        </div>
                         </center>
                </div>
                <div className="pl-3 pt-3"> 
                    <p className="text-lg font-medium">ASUS FHD Gaming Laptop</p>
                    <div className="flex gap-4 pt-1">
                        <p className="text-red-800 text-base font-semibold">$700</p>
                    
                    <div className="flex gap-4  border-b pb-12 border-slate-600 pt-1">
                        <p className="flex text-yellow-500 text-base fill-yellow-500"> <Star /><Star /><Star /><Star /><Star /></p>
                        <p className="text-slate-600 font-semibold">(325)</p></div>
                    </div>
                </div>
            </div></Link>

           <Link href="/WishList">
           <div className="mb-16 h-[350px] w-[270px]">
                <div className="bg-slate-200 w-[270px] h-[250px]">
                    <div className="flex pl-2 pr-2 pt-2 justify-between">
                       
                        <div >
                        <div className="pb-4"><Heart /></div>
                        <div><Eye /></div>
                        </div>
                         </div>
                         <center>
                         <div className=" ">
                            <Image
                            className=""
                            alt=""
                            src="/facewash - Copy.png"
                            height={160}
                            width={195}></Image>
                        </div>
                         </center>
                </div>
                <div className="pl-3 pt-3"> 
                    <p className="text-lg font-medium">ASUS FHD Gaming Laptop</p>
                    <div className="flex gap-4 pt-1">
                        <p className="text-red-800 text-base font-semibold">$700</p>
                    
                    <div className="flex gap-4  border-b pb-12 border-slate-600 pt-1">
                        <p className="flex text-yellow-500 text-base fill-yellow-500"> <Star /><Star /><Star /><Star /><Star /></p>
                        <p className="text-slate-600 font-semibold">(325)</p></div>
                    </div>
                </div>
            </div></Link>

            </div>

            {/* 2nd line Cards */}

            <Link href="/WishList">
            <div className="md:flex pt-12 pb-20 md:px-24 px-16 md:justify-between">

            <div className="mb-16 h-[350px] w-[270px]">
                <div className="bg-slate-200 w-[270px] h-[250px]">
                    <div className="flex pl-2 pr-2 pt-2 justify-between">
                        <button className="flex rounded-lg bg-lime-500 py-1 px-3 text-white text-lg font-semibold">New</button>
                        <div >
                        <div className=""><Heart /></div>
                        <div><Eye /></div>
                        </div>
                         </div>
                         <div className="pl-12 pb-5">
                            <Image
                            className=" justify-center"
                            alt=""
                            src="/kidcar.png"
                            height={152}
                            width={172}></Image>
                        </div>
                </div>
                <div className="pl-3 pt-3"> 
                    <p className="text-lg font-medium">Kids Electric Cars</p>
                    <div className="flex gap-4 pt-1">
                        <p className="text-red-800 text-base font-semibold">$960</p>
                    <div className="flex gap-4  pt-1">
                        <p className="flex text-yellow-500 text-base"> <Star /><Star /><Star /><Star /><Star /></p>
                        <p className="text-slate-600 font-semibold">(88)</p></div>
                    </div>
                    <div className="flex pt-1  border-b pb-12 border-slate-600 gap-2">
                            <div className="w-6 h-6 bg-white rounded-full p-1 border-black border-2"><div className="bg-red-600 rounded-full w-full h-full"></div></div>
                            <div  className="w-6 h-6 bg-red-600 rounded-full p-1 border-black border-2"></div>
                        </div>
                </div>
            </div>

            <div className="mb-16 h-[350px] w-[270px]">
                <div className="bg-slate-200 w-[270px] h-[250px]">
                    <div className="flex pl-2 pr-2 pt-2 justify-between">
                        <div >
                        <div className=""><Heart /></div>
                        <div><Eye /></div>
                        </div>
                         </div>
                         <div className="pl-12 pb-5">
                            <Image
                            className=" justify-center"
                            alt=""
                            src="/jrshoes.png"
                            height={152}
                            width={172}></Image>
                        </div>
                </div>
                <div className="pl-3 pt-3"> 
                    <p className="text-lg font-medium">Jr. Zoom Soccer Cleats</p>
                    <div className="flex gap-4 pt-1">
                        <p className="text-red-800 text-base font-semibold">$960</p>
                    <div className="flex gap-4 pt-1">
                        <p className="flex text-yellow-500 text-base"> <Star /><Star /><Star /><Star /><Star /></p>
                        <p className="text-slate-600 font-semibold">(88)</p></div>
                    </div>
                    <div className="flex pt-1  border-b pb-12 border-slate-600 gap-2">
                            <div className="w-6 h-6 bg-white rounded-full p-1 border-black border-2"><div className="bg-yellow-400 rounded-full w-full h-full"></div></div>
                            <div  className="w-6 h-6 bg-red-600 rounded-full p-1 border-black border-2"></div>
                        </div>
                </div>
            </div>

            <div className="mb-16 h-[350px] w-[270px]">
                <div className="bg-slate-200 w-[270px] h-[250px]">
                    <div className="flex pl-2 pr-2 pt-2 justify-between">
                        <button className="flex rounded-lg bg-lime-500 pt-1 px-3 text-white text-lg font-semibold">New</button>
                        <div >
                        <div className=""><Heart /></div>
                        <div><Eye /></div>
                        </div>
                         </div>
                         <div className="pl-4 pb-5">
                            <Image
                            className=" justify-center"
                            alt=""
                            src="/usbgame.png"
                            height={172}
                            width={222}></Image>
                        </div>
                </div>
                <div className="pl-3 pt-3"> 
                    <p className="text-lg font-medium">GP11 Shooter USB Gamepad</p>
                    <div className="flex gap-4 pt-1">
                        <p className="text-red-800 text-base font-semibold">$960</p>
                    <div className="flex gap-4 pt-1">
                        <p className="flex text-yellow-500 text-base"> <Star /><Star /><Star /><Star /><Star /></p>
                        <p className="text-slate-600 font-semibold">(88)</p></div>
                    </div>
                    <div className="flex pt-1  border-b pb-12 border-slate-600 gap-2">
                            <div className="w-6 h-6 bg-white rounded-full p-1 border-black border-2"><div className="bg-black rounded-full w-full h-full"></div></div>
                            <div  className="w-6 h-6 bg-red-600 rounded-full p-1 border-black border-2"></div>
                        </div>
                </div>
            </div>

            <div className="mb-16 h-[350px] w-[270px]">
                <div className="bg-slate-200 w-[270px] h-[250px]">
                    <div className="flex pl-2 pr-2 pt-2 justify-between">
                        <div >
                        <div className=""><Heart /></div>
                        <div><Eye /></div>
                        </div>
                         </div>
                         <div className="pl-12 pb-5">
                            <Image
                            className=" justify-center"
                            alt=""
                            src="/menjacket.png"
                            height={152}
                            width={172}></Image>
                        </div>
                </div>
                <div className="pl-3 pt-3"> 
                    <p className="text-lg font-medium">Quilted Satin Jacket</p>
                    <div className="flex gap-4 pt-1">
                        <p className="text-red-800 text-base font-semibold">$960</p>
                    <div className="flex gap-4 pt-1">
                        <p className="flex text-yellow-500 text-base"> <Star /><Star /><Star /><Star /><Star /></p>
                        <p className="text-slate-600 font-semibold">(88)</p></div>
                    </div>
                    <div className="flex pt-1 border-b pb-12 border-slate-600 gap-2">
                            <div className="w-6 h-6 bg-white rounded-full p-1 border-black border-2"><div className="bg-slate-600 rounded-full w-full h-full"></div></div>
                            <div  className="w-6 h-6 bg-red-600 rounded-full p-1 border-black border-2"></div>
                        </div>
                </div>
            </div>
            </div></Link>

            <center>
                <Link href="/About"><button className="text-2xl font-semibold text-white bg-red-500 rounded-lg py-3 px-12">View All Products</button></Link>
                </center>

                <div className="py-12 md:px-24 px-16">

                <div className="flex py-12">
            <div className="border-2  bg-red-600 h-10 w-6 rounded-lg"></div>
            <p className="text-red-600 align-center pt-2 pl-4 font-semibold">Featured</p>
            </div>
            <div className="md:pt-12 pt-6 flex  justify-between">
        <div className="flex justify-evenly">
                <div className="text-2xl  font-bold">New Arrival</div>
            </div>
            </div>
                </div>

{/* NEw arrival 4-divs */}
<div className="py-12 px-4 md:px-24">
    <div className="rounded-lg text-white w-full md:w-[1330px] flex flex-col md:flex-row justify-between h-auto md:h-[600px]">
        {/* Left side */}
        <div className="w-full md:w-[645px] mb-8 h-auto md:h-[600px] bg-black bg-cover bg-center" style={{ backgroundImage: 'url(/ps5.png)' }}>
            <div className="pl-8 pt-[60%] md:pt-[446px]">
                <div className="w-64 h-[122px]">
                    <p className="text-white font-semibold text-2xl">Play Station 5</p>
                    <p className="pt-1 w-60">Black and White version of the PS5 coming out on sale</p>
                    <button className="font-medium pt-3 gap-4 flex text-white">Shop Now <ArrowRight /></button>
                </div>
            </div>
        </div>

        {/* Right side */}
        <div className="w-full md:w-[645px] flex flex-col pb-8 md:pb-28 h-auto md:h-[600px] space-y-8">
            {/* Right Top */}
            <div className="bg-black h-auto md:h-[284px] flex flex-col md:flex-row justify-between">
                <div className="pl-12 pt-8 md:pt-[138px] w-full md:w-[255px] h-auto md:h-[122px]">
                    <p className="font-semibold text-xl">Women&apos;s Collections</p>
                    <p className="font-medium text-base">Featured woman collections that give you another vibe.</p>
                    <button className="font-medium pt-4 gap-4 flex text-white">Shop Now <ArrowRight /></button>
                </div>
                <div className="w-full md:w-[355px] h-auto md:h-[284px]">
                    <img src="/fgirl.png" className="w-full h-full object-cover" alt="Fashion" />
                </div>
            </div>

            {/* Right Bottom */}
            <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:h-[284px]">
                <div className="bg-black text-white w-full md:w-[305px] h-auto md:h-[284px] pl-6">
                    <div className="bg-cover bg-center" style={{ backgroundImage: 'url(/3speaker.png)', height: '100%', width: '100%' }}>
                        <h1 className="text-white text-2xl pt-[175px]">Speakers</h1>
                        <p>Amazon Wireless Speakers</p>
                        <button className="font-medium pt-4 gap-4 flex text-white">Shop Now <ArrowRight /></button>
                    </div>
                </div>

                <div className="bg-black w-full md:w-[305px] h-auto md:h-[284px]">
                    <div className="bg-cover bg-center" style={{ backgroundImage: 'url(/gucciPerfume.png)', height: '100%', width: '100%' }}>
                        <div className="pl-8">
                            <h1 className="text-white text-2xl pt-[175px]">Perfume</h1>
                            <p>GUCCI INTENSE OUD EDP</p>
                            <button className="font-medium pt-4 gap-4 flex text-white">Shop Now <ArrowRight /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

            

            {/* New arrival end */}




            <div className="py-12 px-4 md:px-24 flex flex-col md:flex-row justify-evenly space-y-8 md:space-y-0 md:space-x-8">
    {/* Free and Fast Delivery */}
    <div className="w-full md:w-[249px] h-[161px] flex flex-col items-center text-center">
        <div className="h-16 w-16 bg-slate-400 py-2 rounded-full flex items-center justify-center">
            <div className="bg-black h-12 w-12 rounded-full flex items-center justify-center">
                <Bike size={40} strokeWidth={1} className="text-white" />
            </div>
        </div>
        <p className="text-base font-lg pt-3 font-semibold">FREE AND FAST DELIVERY</p>
        <p className="text-sm">Free delivery for all orders over $140</p>
    </div>

    {/* 24/7 Customer Service */}
    <div className="w-full md:w-[249px] h-[161px] flex flex-col items-center text-center">
        <div className="h-16 w-16 bg-slate-400 py-2 rounded-full flex items-center justify-center">
            <div className="bg-black h-12 w-12 rounded-full flex items-center justify-center">
                <Headset size={40} strokeWidth={1} className="text-white pt-1" />
            </div>
        </div>
        <p className="text-base font-lg pt-3 font-semibold">24/7 CUSTOMER SERVICE</p>
        <p className="text-sm">Friendly 24/7 customer support available</p>
    </div>

    {/* Money Back Guarantee */}
    <div className="w-full md:w-[249px] h-[161px] flex flex-col items-center text-center">
        <div className="h-16 w-16 bg-slate-400 py-2 rounded-full flex items-center justify-center">
            <div className="bg-black h-12 w-12 rounded-full flex items-center justify-center">
                <ShieldCheck size={40} strokeWidth={1} className="text-white pt-1" />
            </div>
        </div>
        <p className="text-base font-lg pt-3 font-semibold">MONEY BACK GUARANTEE</p>
        <p className="text-sm">We return your money within 30 days</p>
    </div>
</div>


           <Footer / >


        </>
    )
}

export default HeroPage;