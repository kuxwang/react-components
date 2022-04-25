import React from "react";
import style from "./style.module.scss";

type Size = "large" | "small" | "medium";
type Type = "primary" | "normal" | "danger" | "warning";
interface IProps {
  name?: string;
  type?: Type;
  size?: Size;
  onClick?: (event: any) => void;
  children?: any
}
const genClassName = (style: any, props: any): any => {
  return [style.button, style[props.type], style[props.size]].join(" ");
};
const AppButton :React.FC<IProps> = (props) => {
  return (
    <div className={genClassName(style, props)} onClick={props.onClick}>
      {props.name || props.children}
    </div>
  );
};

AppButton.defaultProps = {
  type: "normal",
  size: "medium",
};

export default AppButton;
