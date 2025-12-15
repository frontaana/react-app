import ProjectCard from '../ProjectCard.jsx/ProjectCard'
import Button from '../Button/Button'
import Heading from "../Heading/heading"

function ProjectsSection() {
  return (
    <div>
      {/* <h2>Проекты</h2> */}
      <Heading />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <Button />
    </div>
  )
}

export default ProjectsSection