const Footer = () => {
  return (
    <footer className="mt-14 border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container mx-auto p-4 md:p-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <div className="text-white text-2xl md:text-3xl font-black cursor-pointer">
          MY <span className="text-primary">PORTFOLIO</span>
        </div>

        <p className="text-slate-600 text-sm md:text-base">
          {/* Send Message */}
          All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer