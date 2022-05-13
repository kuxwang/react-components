import React from "react";
import style from "./style.module.scss";
interface IProps {
  name?: string;
  children?: any;
  className?: string;
}
const AppSection: React.FC<IProps> = (props) => {
  return (<div className={`${props.className} ${style.section}`}>
    <div className={style.title}>{props.name}</div>
    {props.children}
  </div>)
}

export default AppSection;

