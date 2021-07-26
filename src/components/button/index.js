import style from "./style.module.css";

const Button = ({onClick, label}) => {
  return (
    <button className={style.btn} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;