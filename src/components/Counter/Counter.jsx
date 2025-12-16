import './Counter.css';

function Counter({ value, isDanger }) {
  const classNames = isDanger ? 'counter counter_danger' : 'counter';

  return (
    <p className={classNames}>
      Счетчик: {value}
    </p>
  );
}

export default Counter