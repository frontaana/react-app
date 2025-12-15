import ProjectCard from '../ProjectCard.jsx/ProjectCard'
import Button from '../Button/Button'
import Heading from "../Heading/heading"
import project1Img from '../../assets/project1.jpg'
import project2Img from '../../assets/project2.jpg'
import project3Img from '../../assets/project3.jpg'

const projects = [
  {
    title: 'ЖК ПРАВОБЕРЕЖНЫЙ',
    square: 112,
    year: '2023',
    link: '/project1',
    image: project1Img,
    isNew: true,
  },
  {
    title: 'ЖК НОРВЕЖСКИЙ ПАРК',
    square: 75,
    year: '2023',
    link: '/project2',
    image: project2Img,
    isNew: false,
  },
  {
    title: 'ЖК СОСНОВСКИЕ ОЗЕРА',
    square: 94,
    year: '2022',
    link: '/project3',
    image: project3Img,
    isNew: false,
  },
]

function ProjectsSection() {
  return (
    <div>
      {/* <h2>Проекты</h2> */}
      <Heading 
        level='h2'
        text='Проекты'/>

      { projects.map(project => (
          <ProjectCard 
            title={project.title}
            square={project.square}
            year={project.year}
            link={project.link}
            image={project.image}
            isNew={project.isNew}/>
        )
      )}

      <Button text='Смотреть все проекты'/>
    </div>
  )
}

export default ProjectsSection