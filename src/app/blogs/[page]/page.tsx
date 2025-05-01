// app/[page]/page.tsx

import Carousel from "@/app/components/Carousel";
import QuickContact from "@/app/components/QuickContact";
import type { Metadata } from "next";
import Image from "next/image";
import axios from "axios";

import GetBlogCategoryName from "@/app/components/GetBlogCategoryName";

interface PageProps {
  params: {
    page: string;
  };
}
interface Post {
  id: number;
  title: string;
  created: string;
  photo: string;
  category: string;
  slug: string;
}
interface PaginatedResponse {
  data: Post[];
}
const fetchPosts = async (
  category?: string // Optional parameter for category
): Promise<PaginatedResponse> => {
  const response = await axios.get<Post[]>(`http://localhost:5000/blogs`, {
    params: {
      _page: 1,
      _limit: 5,
      ...(category && { category }), // Add the category parameter if provided
    },
  });

  return { data: response.data };
};

async function getPagedata(page: string) {
  try {
    const response = await fetch(`http://localhost:5000/blogs?slug=${page}`);
    const data = await response.json();

    
  if (Array.isArray(data) && data.length > 0 && data[0]?.content) {
   
    return  data[0];
  }else{
    const newArray =  {  slug: page,
      title: "",
      category: "",
      created: "",
      meta: {
        title: "",
        description: ""
      },
      photo: "",
      content: "Page not Found" }
  
  
    return  newArray;
  }
  
  } catch (error) {
    console.error("Failed to fetch metadata:", error);
    return undefined;
  }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const newParams = await params;
  
  const { page } = newParams;

  const metadatas = await getPagedata(page);

  if (typeof metadatas !== "undefined") {
    const metadata = metadatas.meta;
    return {
      title: metadata?.title || process.env.SEO_TITLE,
      description: metadata?.description ||  process.env.SEO_DES,
      // Add other metadata properties as needed
    };
  } else {
    return {
      title:process.env.SEO_TITLE,
      description: process.env.SEO_DES,
      // Add other metadata properties as needed
    };
  }
}

const Page: React.FC<PageProps> = async ({ params }) => {
  const newParams = await params;
  
  const { page } = newParams;

  const metadatas = await getPagedata(page);
 
  const { data } = await fetchPosts(metadatas.category);


  let slides: Post[]=[];
  if(data.length > 0){
   slides =data;
  }

  if (typeof metadatas !== "undefined") {

   if (metadatas.content=== 'Page not Found') { 
    return (<h1 className="text-black">Page not Found</h1>); 

  }else{
    return (
      <div className=" w-full m-auto bg-[#fefefe] justify-between  mb-24 text-center ">
        <div className=" bg-[#003a3a] w-full m-auto py-5 md:py-20 mb-5 md:mb-8 lg:mb-12 text-center">
          <h2 className="max-w-[1370px]  m-auto text-[#fff]  ">
            {metadatas.title}
          </h2>
        </div>
        <div className=" flex flex-col md:flex-row max-w-[1370px] gap-10 w-full m-auto">
          <div className="flex-8  shadow-[10px_10px_50px_rgba(0,0,0,0.05)] mb-3">
            <Image
              src={`/blogs/${metadatas.photo}`|| "/default-image.png"}
              width={1400}
              height={500}
              alt="home-banner"
              className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:backdrop-blur-md"
            ></Image>
            <div className="w-full px-8 pt-8 pb-0 text-left justify-between" >
            <span className=" before-style tracking-[0.25rem] uppercase text-[0.875rem] mb-0.5 rounded-[0px] text-[#285bd4] text-left">{metadatas.created}</span>
            
            <span className=" before-style tracking-[0.25rem] uppercase text-[0.875rem] mb-0.5 rounded-[0px] text-[#596475] text-left">Admin</span>  
            
             <span className=" tracking-[0.25rem] uppercase text-[0.875rem] mb-0.5 rounded-[0px] text-[#596475] text-left"><GetBlogCategoryName category={ metadatas.category}/> </span> 
            </div>
            <div
              className="text-left p-8 pt-0 singleBlogPage"
              dangerouslySetInnerHTML={{ __html: metadatas.content }}
            />
          </div>
          <div className="flex-4 ">
            <div className="p-10   bg-[#fff] mb-3 shadow-[10px_10px_50px_rgba(0,0,0,0.05)] text-white text-left">
              <div className="bg-black p-5  text-white text-left">
                <QuickContact />
              </div>
            </div>
            <div className="px-5  py-10   bg-[#fff] mb-3 shadow-[10px_10px_50px_rgba(0,0,0,0.05)] text-white text-left">
              <h4 className=" w-[100%] mt-0 mb-[30px]  text-black leading-snug font-medium capitalize font-stretch-condensed font-sans clear-both m-auto text-left  ">
                {" "}
                <span className="text-[#fe6b01] text-[30px] pr-[10px] ">
                  {" "}
                  -
                </span>
                Latest post
              </h4>
              {data.length > 0 ? (<><Carousel slides={slides} /></>) :(<></>) }
              
            </div>
          </div>
        </div>
      </div>
    );
    }
  } else {
    return (
      <div>
        <h1>Page not fond</h1>
      </div>
    );
  }
};

export default Page;
