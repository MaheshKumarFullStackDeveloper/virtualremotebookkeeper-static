"use client";
import Image from "next/image";
import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BLOG_API; // Load from .env

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
  limit?: number // Optional parameter for category
): Promise<PaginatedResponse> => {
  const response = await axios.get<Post[]>(`${baseUrl}/blogs`, {
    params: {
      _page: 1,
      _limit: limit,
    },
  });

  return { data: response.data };
};


import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

function LatestBlogArticle() {
  const [posts, setPosts] = useState<Post[]>([]); // Explicitly typed

  useEffect(() => {
    const loadPosts = async () => {
        setPosts([]);
      const { data } = await fetchPosts(3);
      setPosts(data);
      console.log("loadDataOnlyOnce");
    };

    loadPosts();
  }, []);

  return (<>

     <div className="my-5 md:my-8 lg:my-11 max-w-[1370px]  text-center  w-full m-auto p-5">
             <h2>latest blog & article</h2>
             <p className=" my-12 text-center text-[#596475]">Explore our latest blogs and articles for valuable insights, tips, and expert advice on bookkeeping, finance, and business management to empower your success</p>
     {posts.length !== 0 ? (
        <>
            <div className="flex flex-col md:flex-row my-1 md:my-5  max-w-[1370px] w-full  m-auto p-1 md:p-5">
       
      
        {posts.map((post,index) => (
           <div key={index} className="flex-1 p-2   ">
          <Image
                           src={`/blogs/${post.photo}` || "/default-image.png"}
                           width={419}
                           height={236}
                           alt={post.title}
                           className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 mb-5"
                         ></Image>
                         <div className=" max-w-[90%] w-full m-auto text-left mb-7">
         <Link className="break-words block text-left text-[25px] capitalize font-georgia text-black font-medium p-5 leading-[35px]" href={`/blogs/${post.slug}`}>{post.title}</Link>
         </div>
       
       </div>
        ))}
         </div>
        
       </>
      ) : (
        <>not fond</>
      )}
      
      <Link className="my-20 mt-16 mx-auto float-none" href="/blog"> <Button  size="lg" variant="default" className="bg-[#DAA520] hover:bg-[#DAA520] cursor-alias transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110  text-white  px-20 py-1 text-[16px]" >View More  <ArrowRightIcon className="h-5 w-5" />
      </Button></Link>
      </div>
  </>);
}

export default LatestBlogArticle;
