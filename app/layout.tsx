import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./style.css";
// import Navbar from "@/components/Navbar";
// import { Provider } from 'react-redux';
// import store from '@/redux/store';
import Head from 'next/head';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inifimuse",
  description: "Infimuse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
          <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* You can add other head elements here */}
      </Head>
          {/* <Provider store={store}> */}
      <body className={inter.className}>{children}</body>
      {/* </Provider> */}
    </html>
  );
}
