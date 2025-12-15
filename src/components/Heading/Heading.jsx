import './Heading.css'

function Heading(props) {
  if (props.level === 'h1') {
    return (
      <h1 className="heading-h1">{props.text}</h1>
    );
  }

  if (props.level === 'h2') {
    return (
      <h2 className="heading-h2">{props.text}</h2>
    );
  }

}

export default Heading