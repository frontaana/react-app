import ProjectCard from '../ProjectCard.jsx/ProjectCard'
import Button from '../Button/Button'
import Heading from "../Heading/heading"

function ProjectsSection() {
  return (
    <div>
      {/* <h2>Проекты</h2> */}
      <Heading 
        level='h2'
        text='Проекты'/>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <Button text='Смотреть все проекты'/>
    </div>
  )
}

export default ProjectsSection