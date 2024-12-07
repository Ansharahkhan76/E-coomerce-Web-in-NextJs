
"use client"
import { useState } from "react";

import { ChevronDown } from "lucide-react";
import { Search } from "lucide-react";
import { Heart } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { User } from "lucide-react";
import { LogOut } from "lucide-react";
import Link from "next/link";


// DropDownnnnn
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function Navbar() {
  const [isClick, setisClick] = useState(false);
    const toggleNavbar = ():void => {
        setisClick(!isClick)
    }
    return (
    <>
    {/* Black shop Now wali Line */}
    <div className="bg-black md:py-3 sm:py-4 sm:px-2 text-white text-center md:justify-evenly flex ">
      <div className="flex py-2 px-2 md:pl-72">
      <p className="text-sm md:text-base">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
      <p className="pl-5 sm:block cursor-not-allowed text-green-600"><b>Show Now!</b></p></div>
      <div className="lg:flex hidden md:block cursor-pointer text-right">
        English <ChevronDown className="" />
      </div>
      </div>
      {/* Navbar Start */}

      <div className=" md:px-24 md:flex pb-4 justify-between">
<nav className="bg-transparent">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 md:pt-4">
                            <Link href="/"  className="text-black  font-mono font-bold md:text-3xl">Exclusive</Link>
                        </div>
                    </div>
                    <div className="hidden md:pl-24 md:pt-4 md:block">
                        <div className="ml-4 flex items-center space-x-4">
                            <Link href="/" className="text-black hover:bg-black hover:text-white rounded-lg p-2">
                            Home
                            </Link>
                            <Link href="/Contact" className="text-black hover:bg-black hover:text-white rounded-lg p-2">
                            Contact
                            </Link>
                            <Link href="/About" className="text-black hover:bg-black hover:text-white rounded-lg p-2">
                            About
                            </Link>
                            <Link href="/SignUp" className="text-black hover:bg-black hover:text-white rounded-lg p-2">
                            Sign Up
                            </Link>
                            <Link href="/LogIn" className="text-black hover:bg-black hover:text-white rounded-lg p-2">
                            Log In
                            </Link>
                        </div>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button className="inline-flex items-center justify-center p-2 rounded-md text-black md:text-black hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black" 
                        onClick={toggleNavbar}>
                            {isClick ? (
                                <svg className="h-6 w-6"
                                xmlns="httsp://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                    <path 
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) :(
                                <svg className="h-6 w-6"
                                xmlns="httsp://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                    <path 
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h15m-7 6h7"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isClick && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
                        {/* again nav items ayngy home etc... */}
                        <Link href="/" className="text-black  hover:bg-slate-600 hover:text-white rounded-lg p-2">
                            Home
                            </Link>
                            <Link href="/Contact" className="text-black hover:bg-slate-600 hover:text-white rounded-lg p-2">
                            Contact
                            </Link>
                            <Link href="/About" className="text-black  hover:bg-slate-600 hover:text-white rounded-lg p-2">
                            About
                            </Link>
                            <Link href="/SignUp" className="text-black  hover:bg-slate-600 hover:text-white rounded-lg p-2">
                            Sign Up
                            </Link>
                            <Link href="/LogIn" className="text-black hover:bg-slate-600 hover:text-white rounded-lg p-2">
                            Log In
                            </Link>
                    </div>
                </div>
            )}
        </nav>


        <div className="px-2 flex">
        <div className="md:pt-7 py-2">
        <div className="flex bg-slate-300 sm:gap-2 md:gap-4 align-center pl-2 pt-2 pb-2"><input type="text" placeholder=" What are Looking for?" />
          <div className="pr-3"> <Search /></div></div>
        </div>
        
        <div className="gap-5  md:pt-8 py-2 pl-4 flex">
        <Link href="/WishList"><Heart /></Link>
       <Link href="/Cart"> <ShoppingCart /></Link>
       


{/* Shadcn ui menu box */}
<DropdownMenu>
  <DropdownMenuTrigger>
  <div className="bg-gray-800 hidden md:block py-2 px-2 rounded-full">
        <User className="text-white" />
        </div>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel><div className="flex justify-between"><User/> My Account</div></DropdownMenuLabel>
    <DropdownMenuSeparator />
    <Link href="/WishList"><DropdownMenuItem>My Wish List</DropdownMenuItem></Link>
    <Link href="/Cart"><DropdownMenuItem>My Cart Items</DropdownMenuItem></Link>
    <Link href="/About"><DropdownMenuItem>My Reviews</DropdownMenuItem></Link>
    <Link href="/"><DropdownMenuItem>Logout <LogOut /></DropdownMenuItem></Link>
  </DropdownMenuContent>
</DropdownMenu>
        
        </div>
        </div>
      </div>
          <div className="font-semibold"><hr /></div>


      </>
  );
}


export default Navbar;

