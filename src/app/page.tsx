"use client";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchData,
  selectData,
  selectStatus,
} from "./store/slice/dataSlice";
import { AppDispatch } from "./store/store";
import { useEffect } from "react";
import MainLoader from "@/lib/MainLoader";



export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const pageData = useSelector(selectData);
  const status = useSelector(selectStatus);

  const pageSlug = "home";

  

  useEffect(() => {
  
  //  console.log("test 1  home - ",pageData?.slug);
    if (pageData === null || pageData?.slug !==pageSlug) {
   //   console.log("test 2 home -",pageData?.slug);
      if (status === "idle" ||  pageData?.slug !==pageSlug ) {
    //    console.log("test 3 home");
      dispatch(fetchData(pageSlug));
      }
    }
  
  }, [dispatch, status, pageData,pageSlug]);

  if (pageData === null) { 
    return (<MainLoader/>); 

  }else if (pageData.content=== 'Page not Found') { 
    return (<h1 className="text-black">Page not Found</h1>); 

  }else{

  const parsedData = JSON.parse(pageData?.content);

 
  let section3 = null;
  if (parsedData?.section3?.status) {
    section3 = parsedData?.section3;
  }

  return (
    <>
     

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

    
    </>
  );
 }
}
