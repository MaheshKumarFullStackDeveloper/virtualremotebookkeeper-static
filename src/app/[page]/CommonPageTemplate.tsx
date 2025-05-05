"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import QuickContact from "../components/QuickContact";
import { AccordionFaq } from "../components/AccordionFaq";
import ContactForm from "../components/ContactForm";
import LatestBlogArticle from "../components/LatestBlogArticle";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchData,
  selectData,
  selectStatus,
} from "../store/slice/dataSlice";
import { AppDispatch } from "../store/store";
import { useEffect } from "react";
import { ArrowRightIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import MainLoader from "@/lib/MainLoader";

interface Slide {
  title: string;
  description: string;
  linkText: string;
  link: string;
  id: string;
}
interface PageProps {
  url :string;
}

export default function CommonPageTemplate( { url}: PageProps ) {
  const router = useRouter();

  const  page  = url;
  console.log("check page",url)
  if(page===""){
    console.log("redirect to home")
    void  router.push('/')
  }

  const dispatch = useDispatch<AppDispatch>();
  const pageData = useSelector(selectData);
  const status = useSelector(selectStatus);
  const pathname = usePathname();
 
 
  useEffect(() => {

    if(page===""){
      console.log("redirect to home")
      void  router.push('/')
    }
  
    console.log("test 1 ",page)
    if (pageData === null ||  pageData?.slug !==page ) {
      console.log("test 2",page)
      if (status === "idle" ||  pageData?.slug !==page ) {
        console.log("test 3 ",page)
        dispatch(fetchData(page));
      }
    }
  }, [dispatch, status, pageData, page,pathname]); 

  
  if (pageData === null) { 
    return (<MainLoader/>); 

  }else if (pageData.content=== 'Page not Found') { 
    return (<h1 className="text-black">Page not Found</h1>); 

  }else{
  const parsedData = JSON.parse(pageData?.content);

  let sectionContect = null;
  if (parsedData?.sectionContect?.status) {
    sectionContect = parsedData?.sectionContect;
  }

/*   let section1 = null;
  if (parsedData?.section1?.status) {
    section1 = parsedData?.section1;
  } */
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
  return (
    <>
     
     {sectionContect !== null && sectionContect.status === "true" && (
             <>
               <div className="flex flex-col md:flex-row my-5 mt-0  bg-[#003A3A]  max-w-[1370px] w-full m-auto p-8 pt-[60px]">
                <h1 className="text-white text-center justify-center w-[100%] ">{sectionContect?.pageTitle}</h1>
                  
                
               </div>
            
               <div className=" my-5 mt-0   max-w-[1370px] text-center justify-between w-full m-auto p-8 ">
               <h2>{sectionContect?.title}</h2>
                       <p className="  text-center text-[#596475]">
                         {sectionContect?.subTitle}
                       </p>
                </div>
               <div className="flex flex-col md:flex-row my-5 mt-0   max-w-[1370px] w-full m-auto p-8 pt-[60px]">
                 
                 <div className="flex-1 bg-black text-white border-white border-solid border-7 px-7 py-8 p-2 text-left ">
                   <QuickContact />
                 </div>
                 <div className="flex-1 p-4 text-center">
                  
                 <div className="pagesec text-center "
                  dangerouslySetInnerHTML={{ __html: sectionContect?.description }}
                />
                 </div>
               </div>
             </>
           )}

           {section2 !== null &&  section2.status === "true" && (
                     <>
                       <div className="flex flex-col md:flex-row my-1 md:my-5  max-w-[1370px] w-full m-auto p-1 md:p-5">
                         <div className="flex-1 p-2 pt-2 md:pt-16  h-[100%] justify-between ">
                           <Image
                             src={section2?.photo || "/default-image.png"}
                             width={623}
                             height={352}
                             alt="home-banner"
                             className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:backdrop-blur-md"
                           ></Image>
                         </div>
                         <div className="flex-1 text-[18px] text-[#596475] p-5  leading-[1.66em] ">
                           <h2 className="text-left">{section2?.title}</h2>
                         
                           <div  className="text-[#596475] text-left pagesec"  dangerouslySetInnerHTML={{ __html: section2?.description }} />
                         </div>
                       </div>
                     </>
                   )}

                     {section3 !== null && section3.status === "true" && (
                           <>
                             <div className="my-5 md:my-8 lg:my-5 max-w-[1370px] bg-black w-full m-auto p-5  px-1 md:px-16">
                               <h2 className="text-[#DAA520] mt-5 ">{section3?.title}</h2>
                   
                               <div className="grid  grid-cols-1  min-[460px]:grid-cols-2  md:grid-cols-2  gap-3 max-w-[1370px] w-full m-auto p-1 md:p-2">
                                 {section3.box && section3.box.map((slide: Slide, index: number) => (
                                   <div key={index} className=" p-2 ">
                                     <h4 className="text-white text-left font-dm">
                                       {" "}
                                       {slide.title}
                                     </h4>
                                     <p className=" font-dm"> {slide.description}</p>
                                     <Link href={slide.link || '#'}>
                                       {" "}
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

{section4 !== null && section4.status === "true" && (
        <>
          <div className="my-5 md:my-8 lg:my-6 max-w-[1370px] bg-[#003a3a] w-full m-auto p-5  text-center  px-1 md:px-16 pb-14">
            <h2 className="text-[#fff] mt-5 ">{section4?.title}</h2>

            <div className="flex flex-col md:flex-row  max-w-[1370px] w-full m-auto p-1 md:p-2 mb-14">
              {section4.box && section4.box.map((slide: Slide, index: number) => (
                <div
                  key={index}
                  className="flex-1 border border-solid border-white p-4 m-2   text-left"
                >
                  <h4 className="text-white text-left font-dm">
                    {slide?.title}
                  </h4>
                  <p className=" font-dm  text-left">{slide?.description}</p>
                  <Link href={slide?.link || '#'}>
                    {" "}
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
              href={section4?.link}
            >
              {" "}
              <Button
                size="lg"
                variant="default"
                className="bg-[#DAA520] hover:bg-[#DAA520] cursor-alias transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110  text-black  px-20 py-1 text-[16px] text-center "
              >
                {section4?.linkText} <ArrowRightIcon className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </>
      )}

{section5 !== null && section5.status === "true" && (
        <>
          <div className="my-5 md:my-8 lg:my-6 max-w-[1370px] bg-[#003a3a] w-full m-auto p-5  text-center  px-1 md:px-16 pb-14">
            <h2 className="text-[#fff] mt-5 ">{section5?.title}</h2>

            <div className="flex flex-col md:flex-row  max-w-[1370px] w-full m-auto p-1 md:p-2 mb-14">
              {section5.box && section5.box.map((slide: Slide, index: number) => (
                <div
                  key={index}
                  className="flex-1 border border-solid border-white p-4 m-2   text-left"
                >
                  <h4 className="text-white text-left font-dm">
                    {slide?.title}
                  </h4>
                  <p className=" font-dm  text-left">{slide?.description}</p>
                  <Link href={slide?.link || '#'}>
                    {" "}
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
              href={section5?.link}
            >
              {" "}
              <Button
                size="lg"
                variant="default"
                className="bg-[#DAA520] hover:bg-[#DAA520] cursor-alias transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110  text-black  px-20 py-1 text-[16px] text-center "
              >
                {section5?.linkText} <ArrowRightIcon className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </>
      )}

           
            <LatestBlogArticle />
           
                 {section6 !== null && section6.status === "true" && (
                   <>
                     <div className="my-5 md:my-8 lg:my-11 max-w-[1370px] w-full m-auto p-5">
                       <h2>{section6?.title}</h2>
           
                       <div className=" max-w-[1100px] w-full m-auto p-2">
                         <AccordionFaq faqs={section6?.box} />
                       </div>
                     </div>
                   </>
                 )}
           
                 {section7 !== null && section7.status === "true" && (
                   <>
                     <div className="my-5 md:my-8 lg:my-11 max-w-[1100px]  text-center  w-full m-auto p-5">
                       <h2>{section7?.title}</h2>
                       <p className=" my-12 text-center text-[#596475]">
                         {section7?.description}
                       </p>
           
                       <ContactForm />
                     </div>
                   </>
                 )}
    </>
  );
 }
}
