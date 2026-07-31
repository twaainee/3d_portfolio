import { motion } from "motion/react"

const DRIVE_LINK = "https://drive.google.com/drive/folders/1GKa467bzoE4CCk5c8Xz3_b9TGo9cuURo?usp=drive_link"

const GraphicWorksButton = () => {
  return (
    <motion.a
      href={DRIVE_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-white transition-colors bg-white/10 hover:bg-white/20 border border-white/20 rounded-full backdrop-blur-md shadow-lg group cursor-pointer w-full sm:w-auto"
      whileHover={{ y: -4, scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      <span>View Graphic Works</span>
      <img 
        src="assets/arrow-up.svg" 
        className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
        alt="External link" 
      />
    </motion.a>
  )
}

export default GraphicWorksButton
