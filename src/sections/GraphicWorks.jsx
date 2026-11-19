import FlexCarousel from '../components/FlexCarousel'
import TechText from '../components/TechText'
import './GraphicWorks.css'

const graphicWorks = [
  { src: '/assets/graphics/VOUGE-1.png', title: 'Vogue Editorial', alt: 'Vogue editorial graphic design' },
  { src: '/assets/graphics/illit.jpg', title: 'ILLIT', alt: 'ILLIT graphic design' },
  { src: '/assets/graphics/holding_on.png', title: 'Holding On', alt: 'Holding On graphic design' },
  { src: '/assets/graphics/hiphop.jpg', title: 'Hip Hop', alt: 'Hip hop graphic design' },
  { src: '/assets/graphics/Ethics Collage(1).png', title: 'Ethics Collage', alt: 'Ethics themed collage design' },
  { src: '/assets/graphics/download.jpg', title: 'Visual Study', alt: 'Graphic design visual study' },
]

const GraphicWorks = () => (
  <section id="graphics" className="portfolio-graphic-section section-spacing overflow-hidden">
    <h2 className="portfolio-graphic-title" aria-label="Graphic Design">
      <span className="sr-only">Graphic Design</span>
      <TechText
        text="Graphic Design"
        className="portfolio-graphic-techtext"
        fontSize={200}
        fontWeight={700}
        letterSpacing={-0.045}
        color="#f5f3ff"
        accentColor="#ca2f8c"
        reach={160}
        draggable={false}
      />
    </h2>
    <FlexCarousel
      items={graphicWorks}
      className="portfolio-graphic-carousel"
      cardHeight={0.68}
      gap={16}
      intro="none"
      captureWheel={false}
    />
  </section>
)

export default GraphicWorks
