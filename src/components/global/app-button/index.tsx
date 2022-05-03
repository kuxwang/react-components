import React from "react";
import style from "./style.module.scss";

type Size = "large" | "small" | "medium";
type Type = "primary" | "normal" | "danger" | "warning";
interface IProps {
  name?: string;
  type?: Type;
  size?: Size;
  onClick?: (event: any) => void;
  children?: any;
  forwardedRef?: any
}
const genClassName = (style: any, props: any): any => {
  return [style.button, style[props.type], style[props.size]].join(" ");
};
const AButton :React.FC<IProps> = (props) => {
  return (
    <div className={genClassName(style, props)} onClick={props.onClick} ref={props.forwardedRef}>
      {props.name || props.children}
    </div>
  );
};

AButton.defaultProps = {
  type: "normal",
  size: "medium",
};

const AppButton = React.forwardRef((props:any, ref:any) => {
  return (<AButton  {...props} forwardedRef={ref}></AButton>)
})

export default AppButton;
