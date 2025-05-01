// app/[page]/page.tsx
import { fetchData } from "../store/slice/dataSlice";
import { store } from "../store/store";
import CommonPageTemplate from "./CommonPageTemplate";
interface PageProps {
  params: {
    page: string;
    value: string;
  };
}

import type { Metadata } from "next";



export async function generateMetadata({ params}: PageProps): Promise<Metadata> {
   
  const resolvedParams = await params; // Await params before accessing properties
  if (resolvedParams.page !== "") {

  await store.dispatch(fetchData(resolvedParams.page));
    const state = store.getState().data;

    
    return {
      title: state.data?.meta.title ||process.env.SEO_TITLE,
      description: state.data?.meta.description ||process.env.SEO_DES,
    };

  }else{
    return {
    title:process.env.SEO_TITLE,
    description: process.env.SEO_DES
    }
  }
}

const Page: React.FC<PageProps> = async ({ params }) => {

  
  const newparams = await params;

      return(
        <> <CommonPageTemplate params={newparams}/></>
       
      )

};

export default Page;
