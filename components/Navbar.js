export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-bold text-pink-500">
          Thotshang<span className="text-white">Mangkung</span>
        </h1>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <li className="hover:text-white cursor-pointer">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-white cursor-pointer">
            {" "}
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:text-white cursor-pointer">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-white cursor-pointer">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* CTA */}
        {/* <button className="bg-pink-500 text-black px-4 py-2 rounded-md text-sm font-semibold hover:bg-pink-400 transition">
          Hire Me
        </button> */}
      </div>
    </nav>
  );
}
