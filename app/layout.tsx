import React from "react";
import "./globals.css";

import { Space_Grotesk } from 'next/font/google';
import Navbar from "../components/Navbar";

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });

export const metadata = {
  title: "Tarik Karahodzic",
  description: "Tarik Karahodzic's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} pb-20`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
