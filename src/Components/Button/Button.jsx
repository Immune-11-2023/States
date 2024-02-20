const Button = ({ fn, message }) => {

  return (
    <div>
      <button onClick={fn}>{message}</button>
    </div>
  );
};

export default Button;
