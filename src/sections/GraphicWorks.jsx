import FlexCarousel from '../components/FlexCarousel'
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
    <h2 className="text-heading portfolio-graphic-title">Graphic Design</h2>
    <FlexCarousel
      items={graphicWorks}
      className="portfolio-graphic-carousel"
      cardHeight={0.68}
      gap={16}
    />
  </section>
)

export default GraphicWorks
