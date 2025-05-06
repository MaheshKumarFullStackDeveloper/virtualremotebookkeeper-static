import type { Metadata } from "next";

/*  Project start date  22 April */
import { Poppins } from 'next/font/google';
import Header from "./components/Header";
import Footer from "./components/Footer";
import LayoutWrapper from "./LayoutWrapper";
import { Roboto } from 'next/font/google';
import { DM_Sans } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from "next/head";

const dmSans = DM_Sans({
  weight: ['400', '700'], // Specify font weights
  subsets: ['latin'],    // Specify subsets
  display: 'swap',       // Optional: Improves performance
});

const poppins = Poppins({
  subsets: ['latin'],  // Specify the desired subset (e.g., 'latin')
  weight: ['400', '700'], // Define the desired weights (e.g., '400' and '700')
  display: 'swap', // Optional: Use 'swap' for immediate fallback font display
});



const roboto = Roboto({
  weight: ['400', '700'], // Specify font weights
  subsets: ['latin'],    // Specify subsets
  display: 'swap',       // Optional: Improves performance
});

import "./globals.css";
import "./style.css";
import { Suspense } from "react";
import MainLoader from "@/lib/MainLoader";


export const metadata: Metadata = {
  title: process.env.SEO_TITLE,
  description: process.env.SEO_DES,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense fallback={<MainLoader/>}>

    <html lang="en" suppressHydrationWarning>
    <Head>
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js.hs-scripts.com/22315073.js"
        ></script>
      </Head>

      <body
        className={`${poppins.className} ${roboto.className} ${dmSans.className}`}
      >
        <LayoutWrapper>
        <Header/>
        {children}
        <Footer/>
        </LayoutWrapper>
        <ToastContainer />

      </body>
    </html>
    </Suspense>

  );
}
