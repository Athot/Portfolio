export default function ProjectCard({
  title,
  type,
  description,
  tech,
  github,
  live,
}) {
  return (
    <div className="border border-white/10 rounded-xl p-6 hover:border-primary-500 transition bg-black/40">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-4">
        {description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tech.map((item) => (
          <span
            key={item}
            className="text-xs px-3 py-1 rounded-full border border-white/10 text-gray-300"
          ></span>
        ))}
      </div>

      {/* links */}

      <div className="flex gap-4">
        {github && (
          <a
            href={github}
            target="_blank"
            className="text-sm font-semibold text-pink-500 hover:underline"
          >
            GitHub →
          </a>
        )}

        {live && (
          <a
            href={live}
            target="_blank"
            className="text-sm font-semibold text-gray-500 hover:text-white"
          >
            {type === "app" ? "View on App Store →" : "Live Demo →"}
          </a>
        )}
      </div>
    </div>
  );
}
