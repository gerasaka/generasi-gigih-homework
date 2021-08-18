import style from "./style.module.css";

const Button = ({onClick, label, type}) => {
  return (
    <button className={style.btn} onClick={onClick} type={type}>
      {label}
    </button>
  );
}

export default Button;