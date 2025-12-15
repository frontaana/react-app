function ProjectCard(props) {
  return (
    <div>
      { props.isNew && (<div>NEW</div>)}
      <img src={props.image} alt={props.title} />
      <p>{props.title} — {props.square} м² — {props.year}</p>
      <a href="">Подробнее →</a>
    </div>
  )
}

export default ProjectCard
