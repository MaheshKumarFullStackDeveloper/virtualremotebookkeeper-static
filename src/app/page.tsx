
import Image from "next/image";
import localFont from "next/font/local";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import QuickContact from "./components/QuickContact";
import { AccordionFaq } from "./components/AccordionFaq";
import ContactForm from "./components/ContactForm";
import LatestBlogArticle from "./components/LatestBlogArticle";
import { ArrowRightIcon } from "lucide-react";
import MainLoader from "@/lib/MainLoader";

interface Slide {
  title: string;
  description: string;
  linkText: string;
  link: string;
  id: string;
}

const georgia = localFont({
  src: [
    {
      path: "../../public/font/Georgia.woff2",
      weight: "normal",
      style: "normal",
    },
    {
      path: "../../public/font/Georgia.woff",
      weight: "normal",
      style: "normal",
    },
  ],
  display: "swap",
});

 
const baseUrl = process.env.NEXT_PUBLIC_PAGE_API; // Load from .env 
async function getPagedata(page: string) {
  try {
    const response = await fetch(`${baseUrl}/pages?slug=${page}`);
    const data = await response.json();

    if (Array.isArray(data) && data.length > 0 && data[0]?.content) {
      return data[0];
    } else {
      return {
        slug: page,
        content: "Page not Found",
      };
    }
  } catch (error) {
    console.error("Failed to fetch metadata:", error);
    return undefined;
  }
}

export default async function Home() {
  const HomeContent = await getPagedata('home');
  const pageData =JSON.stringify(HomeContent.content);


  if (pageData === null) { 
    return (<MainLoader/>); 

  }else if (pageData=== 'Page not Found') { 
    return (<h1 className="text-black">Page not Found</h1>); 

  }else{

  const parsedData = JSON.parse(pageData);

  let section2 = null;
  if (parsedData?.section2?.status) {
    section2 = parsedData?.section2;
  }
  let section3 = null;
  if (parsedData?.section3?.status) {
    section3 = parsedData?.section3;
  }
  let section4 = null;
  if (parsedData?.section4) {
    section4 = parsedData?.section4;
  }
  let section5 = null;
  if (parsedData?.section5?.status) {
    section5 = parsedData?.section5;
  }
  let section6 = null;
  if (parsedData?.section6?.status) {
    section6 = parsedData?.section6;
  }
  let section7 = null;
  if (parsedData?.section7?.status) {
    section7 = parsedData?.section7;
  }
  let section8 = null;
  if (parsedData?.section8?.status) {
    section8 = parsedData?.section8;
  }
  let section9 = null;
  if (parsedData?.section9?.status) {
    section9 = parsedData?.section9;
  }
  let section10 = null;
  if (parsedData?.section10?.status) {
    section10 = parsedData?.section10;
  }

  let section11 = null;
  if (parsedData?.section11?.status) {
    section11 = parsedData?.section11;
  }
  return (
    <>
      <div className="bg-[rgb(42,108,101)] w-[100%] p-4 m-auto h-[850px] ">
        <div className="flex flex-col sm:flex-row max-w-[1370px] w-full m-auto  ">
          <div className="flex-[1.2] float-left lg:ml-16 md:ml-5 sm:ml-1">
            <p className="leading-9 font-normal text-[25px] text-white font-Roboto mt-[50px]">
              Your Trusted Partner in Stress-Free Bookkeeping
            </p>

            <span
              className={`text-[#DAA520] border-b-[5px] text-left border-solid border-[#DAA520] rounded-[10px] capitalize -tracking-normal font-medium ${georgia.className}  text-[40px] sm:text-[40px] md:text-[55px] lg:text-[75px] leading-[55px] sm:leading-[55px] md:leading-[70px] lg:leading-[92px] `}
            >
              Focus on Growth,
            </span>
            <span
              className={`text-white capitalize tracking-normal text-left outline-none font-medium ${georgia.className} text-[40px] sm:text-[40px] md:text-[55px] lg:text-[75px] leading-[55px] sm:leading-[55px] md:leading-[70px] lg:leading-[92px]  `}
            >{`We'll Handle`}
            </span>
            <br />
            <span
              className={`text-white capitalize text-left font-medium ${georgia.className} text-[40px] sm:text-[40px] md:text-[55px] lg:text-[75px] leading-[55px] sm:leading-[55px] md:leading-[70px] lg:leading-[92px] `}
            >
              Your Books.{" "}
            </span>
            <p className="leading-6 font-normal text-[19px] text-white font-sans mt-[20px]">
              Our certified bookkeepers provide seamless financial management,
              accessible remotely from wherever you are, ensuring your books are
              always accurate and up to date.
            </p>
            <p className="mt-[30px]">
              <Link href="/contact-us">
                <Button
                  size="default"
                  variant="default"
                  className=" text-white font-Roboto font-[500] text-[20px] bg-[#daa521] rounded-[1px] pt-[9px] mt-[-8px] tb-[17px] px-[60px] h-[51px] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-black hover:text-white  no-underline "
                >
                 
                  Contact Us
                </Button>
              </Link>
            </p>
            <div className="flex flex-col md:flex-row w-full m-auto  ">
              <div className="flex-1 mt-[30px] ">
               
                <Image
                  src="/theme_images/Client.png"
                  width={300}
                  height={80}
                  alt="home-banner"
                  className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
                ></Image>
              </div>
              <div className="flex-1 ">
               
                <p className="leading-8 mt-10 font-normal text-[23px] text-white font-Roboto">
                  Trusted over 250+ client
                  <br /> accorss country
                </p>{" "}
              </div>
            </div>
          </div>

          <div className="flex-1 hidden md:block">
            <Image
              src="/theme_images/home-banner.png"
              width={523}
              height={750}
              alt="home-banner"
              className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:backdrop-blur-md"
            ></Image>
          </div>
        </div>
      </div>

      {section2 !== null && section2.status === "true" && (
        <>
          <div className="flex flex-col md:flex-row my-5  max-w-[1370px] w-full m-auto p-5">
            <div className="flex-1 p-4">
              <Image
                src={section2?.photo || "/default-image.png"}
                width={625}
                height={352}
                alt="home-banner"
                className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:backdrop-blur-md"
              ></Image>
            </div>
            <div className="flex-1 bg-black text-white px-7 py-8 p-2 text-left border-[0.5px] ">
              <QuickContact />
            </div>
          </div>
        </>
      )}

      {section3 !== null && section3.status === "true" && (
        <>
          <div className="my-5 md:my-8 lg:my-11 max-w-[1370px] w-full m-auto p-5">
            <h3>{section3?.title}</h3>
          </div>
          <div className="flex flex-col md:flex-row my-1 md:my-5  max-w-[1370px] w-full m-auto p-1 md:p-5">
            <div className="flex-1 mt-1 lg:mt-16 text-[18px] text-[#596475] p-5 pr-8 leading-[1.66em] ">
              {section3?.description}
            </div>
            <div className="flex-1 p-2   ">
              <Image
                src={section3?.photo || "/default-image.png"}
                width={623}
                height={352}
                alt="home-banner"
                className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:backdrop-blur-md"
              ></Image>
            </div>
          </div>
        </>
      )}

      {section4 !== null && section4.length > 0 && (
        <>
          <div className="my-5  max-w-[1370px] bg-[#003A3A] w-full m-auto p-5">
            <div className="flex flex-col md:flex-row  max-w-[1100px] bg-[#003A3A] w-full m-auto p-2">
              {section4.map((slide: Slide, index: number) => (
                <div
                  key={index}
                  className={`${
                    index === 1 ? "" : "bg-[#B1ADA4] "
                  } flex-1 p-3 mb-3`}
                >
                  <h1 className="text-[#dbc100] text-[49px] mt-3 mb-8">
                   
                    {slide.id}
                  </h1>
                  <p className="text-center w-full m-auto">
                    <strong className="text-[18px] text-white leading-[31px]  uppercase">
                      {slide.title}
                    </strong>
                  </p>
                  <p className="text-center w-full m-auto px-6 mb-10">
                    <span className="text-[16px] text-white leading-[31px]  ">
                      {slide.description}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {section5 !== null && section5.status === "true" && (
        <>
          <div className="flex flex-col md:flex-row my-5 md:my-14 bg-[#16252D] max-w-[1420px] w-full m-auto p-1 md:p-5">
            <div className="flex-1  py-2 px-5 ">
              <h2 className=" text-[#DAA520] text-left">{section5?.title}</h2>
              <ul className="list-disc pl-5 mt-6 text-white">
                <div
                  className="text-left p-8 pt-0 singleBlogPage"
                  dangerouslySetInnerHTML={{ __html: section5?.description }}
                />
              </ul>
              <Link href={section5?.link || '#'}>
               
                <Button
                  size="lg"
                  variant="default"
                  className="bg-[#DAA520] text-black mt-10 px-10 ml-3 mb-6 text-[16px] hover:bg-[#DAA520]  hover:-translate-y-1 hover:scale-90 hover:backdrop-blur-md"
                >
                  {section5?.linkText} <ArrowRightIcon className="h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="flex-1 p-2   ">
              <Image
                src={section5?.photo || "/default-image.png"}
                width={720}
                height={369}
                alt="home-banner"
                className="mt-7 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:backdrop-blur-md"
              ></Image>
            </div>
          </div>
        </>
      )}

      {section6 !== null && section6.status === "true" && (
        <>
          <div className="my-5 md:my-8 lg:my-5 max-w-[1370px] bg-black w-full m-auto p-5  px-1 md:px-16">
            <h2 className="text-[#DAA520] mt-5 ">{section6?.title}</h2>

            <div className="grid  grid-cols-1  min-[460px]:grid-cols-2  md:grid-cols-2  gap-3 max-w-[1370px] w-full m-auto p-1 md:p-2">
              {section6.box && section6.box.map((slide: Slide, index: number) => (
                <div key={index} className=" p-2 ">
                  <h4 className="text-white text-left font-dm">  {slide.title}
                  </h4>
                  <p className=" font-dm"> {slide.description}</p>
                  <Link href={slide.link || '#'}>
                   
                    <Button
                      size="lg"
                      variant="default"
                      className="bg-[#DAA520] hover:bg-[#DAA520] cursor-alias transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110  text-black mt-10 px-14 ml-3 mb-6 text-[16px]"
                    >
                      {slide.linkText} <ArrowRightIcon className="h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {section7 !== null && section7.status === "true" && (
        <>
          <div className="my-5 md:my-8 lg:my-6 max-w-[1370px] bg-[#003a3a] w-full m-auto p-5  text-center  px-1 md:px-16 pb-14">
            <h2 className="text-[#fff] mt-5 ">{section7?.title}</h2>

            <div className="flex flex-col md:flex-row  max-w-[1370px] w-full m-auto p-1 md:p-2 mb-14">
              {section7.box && section7.box.map((slide: Slide, index: number) => (
                <div
                  key={index}
                  className="flex-1 border border-solid border-white p-4 m-2   text-left"
                >
                  <h4 className="text-white text-left font-dm">
                    {slide?.title}
                  </h4>
                  <p className=" font-dm  text-left">{slide?.description}</p>
                  <Link href={slide?.link || '#'}>
                   
                    <Button
                      size="lg"
                      variant="default"
                      className="bg-[#fff] hover:bg-[#DAA520] cursor-alias transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110  text-black mt-10 px-14 mb-6 text-[16px] hover:border hover:border-solid hover:border-white"
                    >
                      {slide?.linkText} <ArrowRightIcon className="h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
            <Link
              className="my-20 mt-16 mx-auto float-none"
              href={section7?.link || '#'}
            >
             
              <Button
                size="lg"
                variant="default"
                className="bg-[#DAA520] hover:bg-[#DAA520] cursor-alias transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110  text-black  px-20 py-1 text-[16px] text-center "
              >
                {section7?.linkText} <ArrowRightIcon className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </>
      )}

      {section8 !== null &&
        section8.status !== null &&
        section8.status === "true" && (
          <>
            <div className="flex flex-col md:flex-row my-1 md:my-5  max-w-[1370px] w-full m-auto p-1 md:p-5">
              <div className="flex-1 p-2   ">
                <Image
                  src={section8?.photo || "/default-image.png"}
                  width={623}
                  height={352}
                  alt="home-banner"
                  className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:backdrop-blur-md"
                ></Image>
              </div>
              <div className="flex-1 text-[18px] text-[#596475] p-5  leading-[1.66em] ">
                <h2 className="text-left">{section8?.title}</h2>
                {section8?.description}
              </div>
            </div>
          </>
        )}

      {section9 !== null && section9.status === "true" && (
        <>
          <div className="my-5 md:my-8 lg:my-6 max-w-[1370px] bg-[#003a3a] w-full m-auto p-5  text-center  px-1 md:px-16 pb-14">
            <h2 className="text-[#fff] mt-5 ">{section9?.title}</h2>

            <div className="flex flex-col md:flex-row  max-w-[1370px] w-full m-auto p-1 md:p-2 mb-14">
              {section9.box.map((slide: Slide, index: number) => (
                <div
                  key={index}
                  className="flex-1 border border-solid border-white p-4 m-2   text-left"
                >
                  <h4 className="text-white text-left font-dm">
                    {slide?.title}
                  </h4>
                  <p className=" font-dm  text-left">{slide?.description}</p>
                  <Link href={slide?.link || '#'}>
                   
                    <Button
                      size="lg"
                      variant="default"
                      className="bg-[#fff] hover:bg-[#DAA520] cursor-alias transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110  text-black mt-10 px-14 mb-6 text-[16px] hover:border hover:border-solid hover:border-white"
                    >
                      {slide?.linkText} <ArrowRightIcon className="h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
            <Link
              className="my-20 mt-16 mx-auto float-none"
              href={section9?.link || '#'}
            >
             
              <Button
                size="lg"
                variant="default"
                className="bg-[#DAA520] hover:bg-[#DAA520] cursor-alias transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110  text-black  px-20 py-1 text-[16px] text-center "
              >
                {section9?.linkText} <ArrowRightIcon className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </>
      )}

      <LatestBlogArticle />

      {section10 !== null && section10.status === "true" && (
        <>
          <div className="my-5 md:my-8 lg:my-11 max-w-[1370px] w-full m-auto p-5">
            <h2>{section10?.title}</h2>

            <div className=" max-w-[1100px] w-full m-auto p-2">
              <AccordionFaq faqs={section10?.box} />
            </div>
          </div>
        </>
      )}

      {section11 !== null && section11.status === "true" && (
        <>
          <div className="my-5 md:my-8 lg:my-11 max-w-[1100px]  text-center  w-full m-auto p-5">
            <h2>{section11?.title}</h2>
            <p className=" my-12 text-center text-[#596475]">
              {section11?.description}
            </p>

            <ContactForm />
          </div>
        </>
      )}
    </>
  );
 }
}
