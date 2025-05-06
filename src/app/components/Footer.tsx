import Image from "next/image";
import Link from "next/link";
import React from "react";
import { store } from "../store/store";
const homeUrl = process.env.NEXT_PUBLIC_BASE_PATH; // Load from .env
interface footerMenus {
  name: string;
  url: string;
}


function Footer() {

      const footerMenu = store.getState().data.footerMenu;
      const footerText = store.getState().data.footerText;
  
  return (
    <>
      {" "}
      <footer className="border-b bg-black  ">
        <div className="container  mx-auto max-w-[1400px] px-[12px] pt-[70px]  flex flex-col md:flex-row items-center justify-between ">
          <div className="flex-1 items-start justify-start  text-white mb-12 ">
            <div className="w-[100%] text-left mb-[57px]">
              <Link
                href="/"
                className="flex-1 justify-start items-left mb-[6px]"
              >
                {" "} 
                <Image
                  src="/theme_images/cropped-virtualremote-bookkeeper.png"
                  width={134}
                  height={134}
                  alt="logo"
                  className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
                ></Image>
              </Link>
            </div>
            <div>
              <p>{footerText}</p>
            </div>
          </div>
          <div className="flex flex-col  flex-1 items-center justify-center  text-white  px-4  mb-[30px]">
            <h4 className="max-w-[300px] w-[100%] mt-0 mb-[30px] pr-0 text-[1.777rem] leading-snug font-medium capitalize font-stretch-condensed font-sans clear-both m-auto text-left text-white ">
              <span className="text-[#fe6b01] text-[30px] pr-[10px] "> -</span>Quick Links
            </h4>
            <div className=" float-none m-auto flex flex-col ">
              <ul className="w-auto">
             
                {footerMenu && footerMenu.map((item: footerMenus, index: number) => (
                  <li key={index}>

                  <Link href={`${homeUrl}${item.url}`}
                    className="block px-[15px] py-2 font-medium text-white uppercase text-[0.875rem] tracking-[0.188rem] hover:text-[#2bbdcc] transform transition duration-300" >{item.name} </Link>
                </li>
))}

                
              

              </ul>
            </div>
          </div>
        </div>

		<div className="container  mx-auto max-w-[1400px] py-[30px] border-t-[1px] border-[#0e1527] ">
			<div className="row">
									<div className="m-0 text-left text-white text-[0.875rem]">
													<span className="copyright">© 2025 Virtualremotebookeeper. All Rights Reserved.</span>
											</div>
								</div>

	</div>
      </footer>
    </>
  );
}

export default Footer;
