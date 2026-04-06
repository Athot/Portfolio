import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center" id="about">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* left content */}
        <div>
          <p className="text-2xl tracking-widest text-gray-400 mb-4">
            HELLO, I&apos;M
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Thotshang</span>
            <span className="text-white"> Mangkung</span>
          </h1>

          <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-400">
            Full Stack & Flutter Developer | MERN Stack
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl leading-relaxed">
            I am a passionate and dedicated Full Stack & Flutter Developer with
            expertise in the MERN stack. With a strong foundation in both
            frontend and backend development, I create seamless and efficient
            web and mobile applications. My commitment to delivering
            high-quality code and innovative solutions drives me to continuously
            learn and grow in the ever-evolving tech landscape.
          </p>

          {/* buttons */}
          <div className="mt-8 flex gap-4">
            <a
              href="/resume.pdf"
              className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-white transition"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="border-2 border-gray-200 text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* right image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full border-4 border-white overflow-hidden">
            {/* Accent bottom shape */}
            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-white z-0" />

            <Image
              src="/black.png"
              alt="Profile Image"
              fill
              sizes="(max-width: 768px) 320px, 384px"
              className="rounded-full object-cover z-10"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
