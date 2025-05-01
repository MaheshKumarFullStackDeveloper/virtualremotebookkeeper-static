import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
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
              <p>
                With Our Virtual Remote Bookkeeper Experts, you can trust that
                each service is delivered with professionalism, accuracy, and a
                focus on your unique business needs.
              </p>
            </div>
          </div>
          <div className="flex flex-col  flex-1 items-center justify-center  text-white  px-4  mb-[30px]">
            <h4 className="max-w-[300px] w-[100%] mt-0 mb-[30px] pr-0 text-[1.777rem] leading-snug font-medium capitalize font-stretch-condensed font-sans clear-both m-auto text-left text-white ">
              {" "}
              <span className="text-[#fe6b01] text-[30px] pr-[10px] "> -</span>Quick Links
            </h4>
            <div className=" float-none m-auto flex flex-col ">
              <ul className="w-auto">
                <li>
                  <Link href="quickbooks-bookkeeping-services"
                    className="block px-[15px] py-2 font-medium text-white uppercase text-[0.875rem] tracking-[0.188rem] hover:text-[#2bbdcc] transform transition duration-300" >QuickBooks Bookkeeping </Link>
                </li>
                <li>
                  <Link href="/zoho-bookkeeping/"
                    className="block px-[15px] py-2 font-medium text-white uppercase text-[0.875rem] tracking-[0.188rem] hover:text-[#2bbdcc] transform transition duration-300" >Zoho Bookkeeping</Link>
                </li>
                <li>
                  <Link href="/accounting-services/"
                    className="block px-[15px] py-2 font-medium text-white uppercase text-[0.875rem] tracking-[0.188rem] hover:text-[#2bbdcc] transform transition duration-300" >Accounting Services</Link>
                </li>
                <li>
                  <Link href="/professionals-bookkeeping-services/"
                    className="block px-[15px] py-2 font-medium text-white uppercase text-[0.875rem] tracking-[0.188rem] hover:text-[#2bbdcc] transform transition duration-300" >Professionals Bookkeeping</Link>
                </li>
                <li>
                  <Link href="/xero-bookkeeping-services/"
                    className="block px-[15px] py-2 font-medium text-white uppercase text-[0.875rem] tracking-[0.188rem] hover:text-[#2bbdcc] transform transition duration-300" >Xero Bookkeeping Services</Link>
                </li>
                <li>
                  <Link href="/blogs/"
                    className="block px-[15px] py-2 font-medium text-white uppercase text-[0.875rem] tracking-[0.188rem] hover:text-[#2bbdcc] transform transition duration-300" >blogs</Link>
                </li>
                

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
