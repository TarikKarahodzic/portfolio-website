import React from "react";
import "./globals.css";

import Navbar from "../components/Navbar";

export const metadata = {
  title: "Tarik Karahodzic",
  description: "Tarik Karahodzic's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="pt-26 pb-20">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
