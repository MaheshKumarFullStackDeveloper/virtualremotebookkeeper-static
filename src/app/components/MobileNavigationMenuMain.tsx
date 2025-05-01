
import { Button } from "@/components/ui/button"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import Link from "next/link"
import Image from "next/image"
import NavigationMenuMain from "./NavigationMenuMain"

export function MobileNavigationMenuMain() {
  return (
    <Sheet  >
      <SheetTrigger asChild>
   <span className="mightytek-menu-box"> <span className="moblie-menu"><span className="hamburger"></span></span></span> 
      </SheetTrigger>
      <SheetContent className="bg-black">
        <SheetHeader >
        <Link href="/" className=" mt-[5px] ml-[20px] mb-[6px]">
           <div > <Image
              src="/theme_images/logo.png" width={80} height={80}   alt="logo" className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
            ></Image>
            </div>
            
          </Link>
        </SheetHeader>
        <div className="sideMob">
        <NavigationMenuMain  device='Mob'/>
        </div>
        <SheetFooter>
        <Link href="/contact-us" ><Button  
              size="default"
              variant="ghost"
              className="text-white text-[19px] bg-[#daa521] rounded-[1px] pt-[9px] mt-[-8px] tb-[17px] px-[40px] h-[51px] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-amber-500 no-underline"
            >Contact Us
            </Button></Link>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
