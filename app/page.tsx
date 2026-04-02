import Image from "next/image";
import Hero from "@/components/Hero";
import AboutSkills from "@/components/AboutSkills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-center bg-black">
    //   <h1 className="text-4xl font-bold text-white">
    //     Welcome to Thotshang Portfolio
    //   </h1>
    // </main>
    <>
      <Hero />
      <AboutSkills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
