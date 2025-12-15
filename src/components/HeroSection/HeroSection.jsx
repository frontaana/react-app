import Heading from "../Heading/heading"
import './HeroSection.css'

function HeroSection() {
  return (
    <div className="hero-section">
      <Heading
        level='h1'
        text='Современные и стильные интерьеры для комфортной жизни'/>
      <p>Мы команда квалифицированных дизайнеров</p>
    </div>
  )
}

export default HeroSection