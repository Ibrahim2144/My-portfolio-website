import myImage from './../assets/myImage.png'

const AboutSection = () => {
  return (
    <section
      id="about"
      className="
        text-white
        relative overflow-hidden
        min-h-[calc(100vh-6rem)]
        flex items-center
        px-6"
    >
      {/* Background glow (same system as Hero/Education) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-72 h-72 bg-primary/20 blur-3xl rounded-full top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-cyan-400/20 blur-3xl rounded-full bottom-10 right-10 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-14 items-center relative z-10">
        
        {/* TEXT SIDE */}
        <div data-aos="fade-right">
          
          {/* Small badge (adds structure like Hero)
          <div className="
            inline-flex items-center gap-2
            px-4 py-2 mb-6
            rounded-full
            bg-white/5
            border border-white/10
            text-gray-300 text-sm
          ">
            About Me
          </div> */}

          {/* Heading */}
          <h2 className="pt-16 text-4xl md:text-5xl font-extrabold mb-6 ml-8">
            More <span className="text-primary">About</span> Me 👨🏽‍💻
          </h2>

          {/* Paragraph (cleaned but same content meaning) */}
          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 ">
            I'm Ibrahim, a frontend developer based in Lagos, Nigeria, with a Mechanical Engineering background from Olabisi Onabanjo University.
            <br /><br />
            My engineering background shaped my thinking — structured, logical, and focused on solving problems efficiently. I bring that mindset into building clean, responsive, and user-friendly web interfaces.
            <br /><br />
            I'm currently expanding into backend development while sharpening my frontend skills, with the goal of becoming a well-rounded full-stack developer.
          </p>

          {/* Skill-style highlights (consistent with Skills page) */}
          {/* <div className="flex flex-wrap gap-3">
            {[
              "Problem Solving",
              "Logical Thinking",
              "UI Attention to Detail",
              "Fast Learner",
            ].map((item, index) => (
              <span
                key={index}
                className="
                  px-4 py-2
                  rounded-full
                  bg-white/5
                  border border-white/10
                  text-gray-300 text-sm
                  hover:border-primary/40
                  transition-all
                "
              >
                {item}
              </span>
            ))}
          </div> */}
        </div>

        {/* IMAGE SIDE (kept your structure) */}
        <div
          className="mt-1 mb-8 md:mt-18 mr-8 flex justify-center lg:justify-end relative"
          data-aos="fade-left"
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            
            {/* subtle glow behind image */}
            <div className="absolute inset-0 z-0 rounded-full bg-primary/20 blur-2xl"></div>

            {/* border frame (your original vibe preserved) */}
            <div className="absolute inset-0 z-0 rounded-full shadow-lg border border-primary translate-x-4 translate-y-4"></div>

            {/* image container */}
            <div className="
              relative z-10
              w-full h-full
              bg-[#111a3e]
              rounded-full
              overflow-hidden
              border border-[#1f1641]
            ">
              <img
                src={myImage}
                alt="About"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default AboutSection