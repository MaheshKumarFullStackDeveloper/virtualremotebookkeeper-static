import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavigationMenuMain from "./NavigationMenuMain";
import { MobileNavigationMenuMain } from "./MobileNavigationMenuMain";

function Header() {
  return (
    <>
      <header className="border-b bg-black sticky top-0 z-50 ">
        <div className="container  mx-auto max-w-[1400px] px-[12px]  flex items-center justify-between ">
          <Link
            href="/"
            className="flex  justify-center items-center mt-[5px] mb-[6px]"
          >
            <div>
              {" "}
              <Image
                src="/theme_images/logo.png"
                width={153}
                height={122}
                alt="logo"
                className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
              ></Image>
            </div>
          </Link>
          <div className="flex flex-1 items-end justify-end  text-white  px-4">
            <div className="hidden min-[936px]:block">
              <NavigationMenuMain device="Desk" />
            </div>
            <div className="hidden max-[936px]:block">
              <MobileNavigationMenuMain />
            </div>
          </div>
          <div className="hidden min-[880px]:block text-right text-white w-auto  max-w-[200px] px-4 ">
            <Link href="/contact-us/">
              <Button
                size="default"
                variant="ghost"
                className="text-white text-[19px] bg-[#daa521] rounded-[1px] pt-[9px] mt-[-8px] tb-[17px] px-[40px] h-[51px] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-amber-500 no-underline"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
