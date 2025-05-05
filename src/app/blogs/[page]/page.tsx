// app/blogs/[page]/page.tsx
import SingleBlogContent from "@/app/components/SingleBlogContent";
import type { Metadata } from "next";
const baseUrl = process.env.NEXT_PUBLIC_BLOG_API; // Load from .env
type Props = {
  params: Promise<{ page: string }>;
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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const newp = await params;

  console.log("check id", newp.page);
  if (newp.page !== "") {
    const state = await getPagedata(newp.page);

    return {
      title: state.data?.meta.title || process.env.SEO_TITLE,
      description: state.data?.meta.description || process.env.SEO_DES,
    };
  } else {
    return {
      title: process.env.SEO_TITLE,
      description: process.env.SEO_DES,
    };
  }
}

export default async function Page({ params }: Props) {
  const { page } = await params;

  return <> <SingleBlogContent page={page} /></>;
}
