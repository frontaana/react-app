import Button from '../../components/Button/Button'
import Heading from "../../components/Heading/heading"

function AboutSection() {
  return (
    <div>
      <Heading 
        level='h2'
        text='О нас'/>
      <div>Студия основана в 2011 году. Полностью отдаемся проектированию и реализации интерьеров. К нам обращаются за уютом, индивидуальными решениями и практичностью. Находим конструктивные решения для каждого интерьера, вплоть до каждой детали — нацелены на результат.</div>
      <Button text='Посмотреть услуги'/>
    </div>
  )
}

export default AboutSection