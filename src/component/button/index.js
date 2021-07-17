import style from "./style.module.css";

const Button = props => {
    return <button className={style.btn}>{props.button}</button>;
}

export default Button;