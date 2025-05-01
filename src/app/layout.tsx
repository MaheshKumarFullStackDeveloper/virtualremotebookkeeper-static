import type { Metadata } from "next";

/*  Project start date  22 April */
import { Poppins } from 'next/font/google';
import Header from "./components/Header";
import Footer from "./components/Footer";
import LayoutWrapper from "./LayoutWrapper";
import { Roboto } from 'next/font/google';
import { DM_Sans } from 'next/font/google';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
    <html lang="en" suppressHydrationWarning>
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
  );
}
