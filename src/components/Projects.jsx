import { ExternalLink } from "lucide-react"

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      desc:
        "Built a responsive e-commerce interface with product filtering, search, and full cart functionality using React state and hooks.",
      tech: ["React", "Redux", "Router", "TailwindCSS"],
      live: "https://ibrahim2144.github.io/ecommerce-app/",
      type: "live",
    },
    {
      id: 2,
      title: "Tip Calculator App",
      desc:
        "Responsive calculator that performs real-time tip calculations with clean UI and input validation.",
      tech: ["HTML", "CSS", "JavaScript"],
      live: "https://ibrahim2144.github.io/Tip-Calculator-App/",
      type: "live",
    },
    {
      id: 3,
      title: "Tic Tac Toe Game",
      desc:
        "Two-player game with turn switching logic and winner detection system built with react and tailwindCSS.",
      tech: ["React", "TailwindCSS"],
      live: "https://ibrahim2144.github.io/Tic-tac-toe/",
      type: "live",
    },
    {
      id: 4,
      title: "This Portfolio Website",
      desc:
        "My personal developer portfolio showcasing skills and projects",
      tech: ["React", "Tailwind CSS", "AOS"],
      live: "#",
      type: "highlight",
    },
  ]

  return (
    <section
      id="projects"
      className="
        min-h-[calc(100vh-6rem)]
        flex items-center
        relative overflow-hidden
        px-6 text-white
      "
    >
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-72 h-72 bg-primary/20 blur-3xl rounded-full top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-cyan-400/20 blur-3xl rounded-full bottom-10 right-10 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl md:text-6xl font-black">
            My <span className="text-primary">Projects</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A collection of projects built while learning and improving as a frontend developer.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`
                group relative p-6 rounded-2xl
                backdrop-blur-xl
                border transition-all duration-300
                hover:-translate-y-1
                ${
                  project.type === "highlight"
                    ? "bg-primary/10 border-primary/30"
                    : "bg-white/5 border-white/10 hover:border-primary/40"
                }
              `}
            >
              {/* Top right link */}
              {project.live && project.type !== "soon" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    absolute top-4 right-4
                    p-2 rounded-full
                    bg-white/5
                    border border-white/10
                    hover:border-primary/40
                    hover:text-primary
                    transition
                  "
                >
                  <ExternalLink size={16} />
                </a>
              )}

              {/* Badge */}
              {project.type === "highlight" && (
                <span className="text-xs text-primary border border-primary/30 px-3 py-1 rounded-full">
                  Current Site
                </span>
              )}

              {/* {project.type === "soon" && (
                <span className="text-xs text-gray-400 border border-gray-600 px-3 py-1 rounded-full">
                  Coming Soon
                </span>
              )} */}

              {/* Title */}
              <h3 className="text-xl font-bold mt-4 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mt-3 leading-relaxed text-sm md:text-base">
                {project.desc}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mt-5">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="
                      text-xs px-3 py-1
                      rounded-full
                      bg-white/5
                      border border-white/10
                      text-gray-300
                    "
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects