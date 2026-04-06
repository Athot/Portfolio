// @ts-ignore: side-effect import for global CSS
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

// this is SEO metadata for the website, it will be used by the search engines to index the website and display it in the search results
export const metadata = {
  title: "Thotshang Mangkung | Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0f0f0f] text-white">
        <Navbar />
        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}
