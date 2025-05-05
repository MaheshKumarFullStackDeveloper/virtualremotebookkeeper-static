import React from 'react'
import Carousel from './Carousel';
import axios from 'axios';
import Image from 'next/image';
import GetBlogCategoryName from './GetBlogCategoryName';
import QuickContact from './QuickContact';

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

  const fetchPosts = async (category?: string): Promise<PaginatedResponse> => {
    const response = await axios.get<Post[]>(`${baseUrl}/blogs`, {
      params: {
        _page: 1,
        _limit: 5,
        ...(category && { category }),
      },
    });
  
    return { data: response.data };
  };
  
  async function getPagedata(page: string) {
    try {
      const response = await fetch(`${baseUrl}/blogs?slug=${page}`);
      const data = await response.json();
  
      if (Array.isArray(data) && data.length > 0 && data[0]?.content) {
        return data[0];
      } else {
        return {
          slug: page,
          title: "",
          category: "",
          created: "",
          meta: {
            title: "",
            description: "",
          },
          photo: "",
          content: "Page not Found",
        };
      }
    } catch (error) {
      console.error("Failed to fetch metadata:", error);
      return undefined;
    }
  }
  

  
  async function SingleBlogContent({ page }: { page: string }) {

 
    const metadatas = await getPagedata(page);
    const { data } = await fetchPosts(metadatas?.category || "");
  
    const slides: Post[] = data.length > 0 ? data : [];
  
    if (metadatas?.content === "Page not Found") {
      return <h1 className="text-black">Page not Found</h1>;
    } else {
      return (
        <div className="w-full m-auto bg-[#fefefe] justify-between mb-24 text-center">
          <div className="bg-[#003a3a] w-full m-auto py-5 md:py-20 mb-5 md:mb-8 lg:mb-12 text-center">
            <h2 className="max-w-[1370px] m-auto text-[#fff]">{metadatas?.title}</h2>
          </div>
          <div className="flex flex-col md:flex-row max-w-[1370px] gap-10 w-full m-auto">
            <div className="flex-8 shadow-[10px_10px_50px_rgba(0,0,0,0.05)] mb-3">
              <Image
                src={`/blogs/${metadatas?.photo}` || "/default-image.png"}
                width={1400}
                height={500}
                alt="home-banner"
                className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:backdrop-blur-md"
              />
              <div className="w-full px-8 pt-8 pb-0 text-left justify-between">
                <span className="before-style tracking-[0.25rem] uppercase text-[0.875rem] mb-0.5 rounded-[0px] text-[#285bd4] text-left">
                  {metadatas?.created}
                </span>
                <span className="before-style tracking-[0.25rem] uppercase text-[0.875rem] mb-0.5 rounded-[0px] text-[#596475] text-left">
                  Admin
                </span>
                <span className="tracking-[0.25rem] uppercase text-[0.875rem] mb-0.5 rounded-[0px] text-[#596475] text-left">
                  <GetBlogCategoryName category={metadatas?.category || ""} />
                </span>
              </div>
              <div
                className="text-left p-8 pt-0 singleBlogPage"
                dangerouslySetInnerHTML={{ __html: metadatas?.content || "" }}
              />
            </div>
            <div className="flex-4">
              <div className="p-10 bg-[#fff] mb-3 shadow-[10px_10px_50px_rgba(0,0,0,0.05)] text-white text-left">
                <div className="bg-black p-5 text-white text-left">
                  <QuickContact />
                </div>
              </div>
              <div className="px-5 py-10 bg-[#fff] mb-3 shadow-[10px_10px_50px_rgba(0,0,0,0.05)] text-white text-left">
                <h4 className="w-[100%] mt-0 mb-[30px] text-black leading-snug font-medium capitalize font-stretch-condensed font-sans clear-both m-auto text-left">
                  <span className="text-[#fe6b01] text-[30px] pr-[10px]">-</span>
                  Latest post
                </h4>
                {data.length > 0 ? <Carousel slides={slides} /> : null}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  

export default SingleBlogContent