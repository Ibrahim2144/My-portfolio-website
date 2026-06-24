import { useState } from "react"
import { FaEnvelope, FaPhone, FaMapMarkedAlt } from "react-icons/fa"

const ContactSection = () => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.target)

    try {
      const res = await fetch("https://formspree.io/f/mbdvldwo", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (res.ok) {
        setSuccess(true)
        e.target.reset()

        setTimeout(() => setSuccess(false), 2500)
      } else {
        alert("Message failed. Try again.")
      }
    } catch (err) {
      alert("Network error. Try again.")
    }

    setLoading(false)
  }

  const contactInfo = [
    {
      id: 1,
      icon: FaEnvelope,
      title: "Email",
      value: "kolawoleibrahim100@gmail.com",
      link: "mailto:kolawoleibrahim100@gmail.com",
    },
    {
      id: 2,
      icon: FaPhone,
      title: "Phone",
      value: "+23470414133065",
      link: "tel:+23470414133065",
    },
    {
      id: 3,
      icon: FaMapMarkedAlt,
      title: "Location",
      value: "Lagos, Nigeria",
      link: null,
    },
  ]

  return (
    <section
      id="contact"
      className="
        min-h-[calc(100vh-6rem)]
        flex items-center justify-center
        px-6 text-white relative overflow-hidden
      "
    >
      {/* background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-72 h-72 bg-primary/20 blur-3xl rounded-full top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-cyan-400/20 blur-3xl rounded-full bottom-10 right-10 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-6xl w-full">

        {/* HEADER */}
        <div className="text-center mt-24 mb-8" data-aos="fade-up">
          <h2 className="text-4xl md:text-6xl font-black">
            Get In <span className="text-primary">Touch</span>
          </h2>

          <h3 className="text-gray-400 mt-4 max-w-2xl mx-auto">
            I'm open to collaborations, freelance gigs and 9-5 roles.
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT SIDE */}
          <div className="space-y-6" data-aos="fade-right">
            {contactInfo.map((info) => {
              const Icon = info.icon

              return (
                <div
                  key={info.id}
                  className="
                    flex items-center gap-4
                    p-4 rounded-xl
                    bg-white/5 border border-white/10
                  "
                >
                  <Icon className="text-primary" />
                  <div>
                    <p className="text-white text-sm">{info.title}</p>
                    <p className="text-gray-400 text-sm">{info.value}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="
              p-6 md:p-8 rounded-2xl
              bg-white/5 border border-white/10
              backdrop-blur-xl space-y-5
            "
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Your email"
              className="
                w-full p-3 rounded-lg
                bg-black/20 border border-white/10
                text-white outline-none
                focus:border-primary/50
              "
            />

            <textarea
              name="message"
              required
              rows="5"
              placeholder="Your message"
              className="
                w-full p-3 rounded-lg
                bg-black/20 border border-white/10
                text-white outline-none
                focus:border-primary/50
                resize-none
              "
            />

            <button
              type="submit"
              disabled={loading}
              className={`
                w-full py-3 rounded-full
                bg-linear-to-r from-primary to-cyan-400
                font-medium transition-all
                ${success ? "scale-105" : ""}
              `}
            >
              {success
                ? "✓ Message Sent"
                : loading
                ? "Sending..."
                : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection