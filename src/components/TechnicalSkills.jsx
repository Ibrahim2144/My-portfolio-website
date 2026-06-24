import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  // FaGitAlt
  FaGithub,
} from "react-icons/fa"

import { RiTailwindCssFill } from "react-icons/ri"
import { SiTypescript } from "react-icons/si"

import {
  Brain,
  Search,
  RefreshCcw,
  Zap,
  MonitorSmartphone,
} from "lucide-react"

const TechnicalSkills = () => {
  const coreSkills = [
    {
      id: 1,
      name: "HTML5",
      level: "Advanced",
      icon: FaHtml5,
    },
    {
      id: 2,
      name: "CSS3",
      level: "Advanced",
      icon: FaCss3Alt,
    },
    {
      id: 3,
      name: "JavaScript (ES6+)",
      level: "Intermediate",
      icon: FaJs,
    },
    {
      id: 4,
      name: "React.js",
      level: "Intermediate",
      icon: FaReact,
    },
    {
      id: 5,
      name: "Tailwind CSS",
      level: "Advanced",
      icon: RiTailwindCssFill,
    },
    {
      id: 6,
      name: "TypeScript",
      level: "Learning",
      icon: SiTypescript,
    },
    {
      id: 7,
      name: "Git & GitHub",
      level: "Intermediate",
      icon: FaGithub,
    },
    {
      id: 8,
      name: "Responsive Web Design",
      level: "Advanced",
      icon: MonitorSmartphone,
    },
  ]

  const softSkills = [
    {
      id: 1,
      name: "Analytical Problem-Solving",
      icon: Brain,
    },
    {
      id: 2,
      name: "Attention to Detail",
      icon: Search,
    },
    {
      id: 3,
      name: "Adaptability",
      icon: RefreshCcw,
    },
    {
      id: 4,
      name: "Fast Learner",
      icon: Zap,
    },
  ]

  return (
    <section
      id="skills"
      className="py-24 text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Heading */}
        <div
          data-aos="fade-up"
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Technologies, tools, and strengths I use to build
            responsive and user-friendly web applications.
          </p>
        </div>

        {/* Core Skills */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {coreSkills.map((skill, index) => {
            const Icon = skill.icon

            return (
              <div
                key={skill.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-primary transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center justify-between mb-6">
                  <Icon
                    size={34}
                    className="text-primary"
                  />

                  <span
                    className={`text-xs px-3 py-1 rounded-full font-medium
                    ${
                      skill.level === "Advanced"
                        ? "bg-green-500/20 text-green-400"
                        : skill.level === "Intermediate"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-blue-500/20 text-blue-400"
                    }`}
                  >
                    {skill.level}
                  </span>
                </div>

                <h3 className="font-semibold text-lg">
                  {skill.name}
                </h3>
              </div>
            )
          })}
        </div>

        {/* Soft Skills */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3 className="text-2xl font-bold mb-4 text-center">
            Strengths
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon

              return (
                <div
                  key={skill.id}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  className="flex items-center gap-3 px-5 py-3 rounded-full bg-[#111827] border border-white/10 hover:border-primary transition-all duration-300"
                >
                  <Icon
                    size={18}
                    className="text-primary"
                  />

                  <span className="text-gray-300">
                    {skill.name}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechnicalSkills