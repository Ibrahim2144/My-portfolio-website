import { Calendar, GraduationCap } from "lucide-react"

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Mechanical Engineering",
      institution: "Olabisi Onabanjo University",
      duration: "2020 - 2025",
      details:
        "Developed a strong foundation in structured design, analytical thinking, and complex problem-solving. I now apply these skills to building modern, responsive web applications using React, JavaScript, and frontend tools.",
    },
    {
      id: 2,
      degree: "Frontend Web Development Bootcamp",
      institution: "Creating Great Standard Hub",
      duration: "2024",
      details:
        "Focused on core web development fundamentals including semantic HTML, modern CSS, and responsive UI design. Built several hands-on projects from scratch.",
    },
  ]

  return (
    <section
      id="education"
      className="
        min-h-[calc(100vh-6rem)]
        flex items-center justify-center
        relative overflow-hidden
        px-6 text-white
      "
    >
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-72 h-72 bg-primary/20 blur-3xl rounded-full top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-cyan-400/20 blur-3xl rounded-full bottom-10 right-10 animate-pulse"></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 max-w-5xl w-full text-center">
        {/* Badge
        <div
          className="
            inline-flex items-center gap-2
            px-4 py-2 mb-8
            rounded-full
            bg-blue-500/10
            border border-blue-500/20
            text-blue-300 text-sm
          "
          data-aos="fade-up"
        >
          🎓 Academic Journey
        </div> */}

        {/* Title */}
        <h2
          className="text-4xl md:text-6xl font-black pt-24"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          My <span className="text-primary">Education 🎓 </span>
        </h2>

        <p
          className="text-gray-400 mt-4 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          My academic background in engineering shaped my analytical thinking
          and problem-solving mindset, which I now apply in software development.
        </p>

        {/* Timeline / Cards */}
        <div className="mt-14 space-y-6">
          {educationData.map((edu, index) => (
            <div
              key={edu.id}
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
              className="
                group relative
                text-left
                p-6 md:p-8
                rounded-2xl
                bg-white/5
                border border-white/10
                backdrop-blur-xl
                hover:border-primary/40
                transition-all duration-300
              "
            >
              {/* Top row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div
                    className="
                      p-3 rounded-xl
                      bg-white/5
                      border border-white/10
                      group-hover:border-primary/40
                      transition
                    "
                  >
                    <GraduationCap className="text-primary" size={22} />
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-bold group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                <div
                  className="
                    flex items-center gap-2
                    text-xs
                    px-3 py-1
                    rounded-full
                    bg-white/5
                    border border-white/10
                    w-fit
                  "
                >
                  <Calendar size={12} className="text-primary" />
                  <span className="text-gray-300">{edu.duration}</span>
                </div>
              </div>

              {/* Details */}
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                {edu.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education