function Button({ text, onClick, isDisabled }) {
  return (
    <button
      disabled={isDisabled}
      onClick={onClick}>
      {text}
    </button>
  );
}

export default Button