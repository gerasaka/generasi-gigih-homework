import style from "./style.module.css";

const Button = (props) => {
  const handleClick = () => {
    window.location = props.onClick;
  };

  return (
    <button className={style.btn} onClick={handleClick}>
      {props.label}
    </button>
  );
}

export default Button;
