import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    // {
    //   title: "Support Ticket System",
    //   description:
    //     "A full stack ticket management system with role-based access, ticket categorization, and priority handling.",
    //   tech: ["React", "Node.js", "Express", "MongoDB"],
    //   github: "#",
    //   live: "#",
    // },
    {
      title: "AI Guitar & Vocal Generator",
      type: "website",
      description:
        "An AI-powered system that detects lyrics and guitar chords from audio and generates a structured PDF output.",
      tech: ["Python", "Flask", "Whisper", "TensorFlow"],
      github: "https://github.com/Athot/GuitarChordsGenerator",
      // live: null,
    },
    // {
    //   title: "Online Vegetable Store",
    //   description:
    //     "A full-stack vegetable store web application where customers can browse, view, and purchase fresh vegetables online. It also includes an admin dashboard for managing products, orders, and inventory efficiently.",
    //   tech: ["PHP", "MySQL", "HTML", "JavaScript", "CSS", "Bootstrap"],
    //   github: "https://github.com/Athot/vegetable_store",
    // },
    {
      title: "Employee Management System",
      type: "website",
      description:
        "Secure authentication system with login, registration, protected routes, and persistent user sessions.",
      tech: ["MongoDB", "Express", "React", "Node.js", "tailwindcss"],
      github: "https://github.com/Athot/Employee-Management-System",
      live: "https://employee-management-system-six-mu.vercel.app/",
    },
    {
      title: "PrayagEduAdmin",
      type: "app",
      description:
        "Built and deployed a Flutter-based mobile app for school principals to manage and switch between multiple schools, monitor staff attendance, student attendance, results, and PTM requests with real-time updates.",
      tech: ["Flutter", "PHP", "Mysql"],
      live: "https://apps.apple.com/in/app/prayagedu-admin/id6747156448",
    },
  ];

  return (
    <section className="py-24 border-t border-white/10" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-pink-500 text-sm tracking-widest mb-4">PROJECTS</h3>

        <h2 className="text-4xl font-bold mb-12">Things I’ve Built</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
