import { motion } from "motion/react"

const DRIVE_LINK = "https://drive.google.com/drive/folders/1GKa467bzoE4CCk5c8Xz3_b9TGo9cuURo?usp=drive_link"

const GraphicWorksCard = () => {
  return (
    <div className="relative size-full overflow-hidden flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#1b0b3a] via-[#110729] to-[#090317] border border-fuchsia-500/30 shadow-xl group hover:border-fuchsia-400/50 transition-all duration-300">
      
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-fuchsia-500/25 rounded-full blur-3xl group-hover:bg-fuchsia-500/40 transition-all duration-700 pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-purple-600/30 rounded-full blur-3xl group-hover:bg-indigo-500/45 transition-all duration-700 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(202,47,140,0.08)_0,transparent_70%)] pointer-events-none" />

      {/* Header Info */}
      <div className="z-10">
        <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white via-fuchsia-100 to-pink-300 bg-clip-text text-transparent">
          Graphic & Visual Works
        </p>
        <p className="subtext text-xs sm:text-sm text-purple-200/70 mt-2">
          Explore my collection of graphic designs, visual branding, digital art, and marketing assets on Google Drive.
        </p>
      </div>

      {/* High Impact Drive CTA Button */}
      <div className="z-10 mt-6 flex justify-start">
        <motion.a
          href={DRIVE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white rounded-full bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 hover:from-fuchsia-500 hover:via-purple-500 hover:to-indigo-500 shadow-[0_0_20px_rgba(202,47,140,0.4)] hover:shadow-[0_0_28px_rgba(202,47,140,0.65)] border border-white/20 transition-all duration-300 cursor-pointer overflow-hidden group/btn"
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          {/* Shimmer Light Effect */}
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]" />
          
          <span className="relative z-10 font-bold">Open Drive Gallery</span>
          <img
            src="assets/arrow-up.svg"
            className="relative z-10 w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 filter drop-shadow"
            alt="External Drive Link"
          />
        </motion.a>
      </div>

    </div>
  )
}

export default GraphicWorksCard
