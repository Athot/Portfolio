export default function AboutSkills() {
  return (
    <section id="skills" className="py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* about */}
        <div>
          <h3 className="text-primary  text-sm tracking-widest mb-4">
            ABOUT ME
          </h3>

          <h2 className="text-4xl font-bold mb-6">
            Passionate Full Stack & Flutter Developer
          </h2>
          <p className="text-paragraphColor-400 leading-relaxed mb-4">
            I am a full stack developer focused on building clean, scalable, and
            user-friendly web applications. I enjoy turning complex problems
            into simple, beautiful solutions.
          </p>

          <p className="text-paragraphColor-400 leading-relaxed">
            I primarily work with MERN, Flutter and modern backend tools, and
            I&apos;m always eager to learn new technologies and improve my
            craft.
          </p>
        </div>

        {/* skills */}
        <div>
          <h3 className="text-primary text-sm tracking-widest mb-4">SKILLS</h3>
          <h2 className="text-4xl font-bold mb-6">Tech I Work With</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              "JavaScript",
              "Angular",
              "TypeScript",
              "React",
              "Next.js",
              "Tailwind CSS",
              "Flutter",
              "Node.js",
              "Express",
              "MongoDB",
              "MySQL",
              "Git",
              "Docker",
              "REST APIs",
              "Vercel",
              "Java",
              "Python",
            ].map((skill) => (
              <div
                key={skill}
                className="border border-white/10 rounded-md px-4 py-3 text-sm text-gray-300 hover:border-pink-500 hover:text-white transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
