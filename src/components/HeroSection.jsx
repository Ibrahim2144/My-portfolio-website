import { Download } from "lucide-react"

const HeroSection = () => {
  const scrollToContact = () => {
    const section = document.querySelector("#contact")
    if (section) section.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="
        min-h-[calc(100vh-6rem)]
        flex items-center justify-center
        relative overflow-hidden
        px-6 text-white
      "
      data-aos="zoom-in-up"
    >
      {/* Background glow blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-72 h-72 bg-primary/30 blur-3xl rounded-full top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-cyan-400/20 blur-3xl rounded-full bottom-10 right-10 animate-pulse"></div>
      </div>

      {/* Glass card */}
      <div
        className="
          relative z-10
          max-w-4xl w-full
          text-center
          bg-white/5
          border border-white/10
          backdrop-blur-xl
          rounded-3xl
          px-6 py-14 md:py-20
          shadow-[0_0_60px_rgba(0,200,255,0.08)]
        "
      >
        {/* Badge */}
        <div
          className="
            inline-flex items-center gap-2
            px-4 py-2 mb-8
            rounded-full
            bg-green-500/10
            border border-green-500/20
            text-green-300 text-sm
          "
          data-aos="fade-up"
        >
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
          Open to opportunities
        </div>

        {/* Name */}
        <h1
          className="text-5xl md:text-7xl font-black leading-tight"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-cyan-300">
            Ibrahim
          </span>
        </h1>

        {/* Role */}
        <h4
          className="text-2xl md:text-4xl font-bold text-white/90 mt-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Frontend Website Developer👨🏽‍💻
        </h4>

        {/* Description */}
        <p
          className="
            mt-8
            text-gray-300
            text-lg md:text-xl
            max-w-2xl mx-auto
            leading-relaxed
          "
          data-aos="fade-up"
          data-aos-delay="300"
        >
          I build responsive and interactive web applications with React,
          JavaScript, and modern frontend tools. Currently evolving into a
          full-stack developer with backend skills.
        </p>

        {/* Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <button
            onClick={scrollToContact}
            className="
              px-7 py-3 rounded-full
              bg-linear-to-r from-primary to-cyan-400
              hover:scale-105 transition-all
              font-medium shadow-lg
            "
          >
            Let's Talk
          </button>

          <a
            href="/myResume.pdf"
            download="myResume.pdf"
            className="
              px-7 py-3 rounded-full
              border border-cyan-400
              text-cyan-300
              flex items-center justify-center gap-2
              hover:scale-105 transition-all
              backdrop-blur-md
              bg-white/5
            "
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>

        {/* Tech pills
        <div
          className="flex flex-wrap justify-center gap-3 mt-12"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          {["HTML", "CSS", "JavaScript", "React", "Tailwind", "TypeScript"].map(
            (tech, index) => (
              <span
                key={index}
                className="
                  px-4 py-2
                  rounded-full
                  bg-white/5
                  border border-white/10
                  text-gray-300
                  text-sm
                  hover:border-cyan-400/40
                  transition-all
                "
              >
                {tech}
              </span>
            )
          )}
        </div> */}
      </div>
    </section>
  )
}

export default HeroSection