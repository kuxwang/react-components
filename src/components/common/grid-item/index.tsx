import React from "react";
import style from "./style.module.scss";

interface IGridItem {
  icon: string;
  name:string;
  className?: string;
  onClick?:(event:any) => void;
}

const GridItem: React.FC<IGridItem> = (props) => {
  return (
    <div className={`${props.className} ${style.item}`} onClick={props.onClick}>
      <div className={`iconfont ${props.icon} ${style.icon}`}></div>
      <div className={style.name}>{props.name}</div>
    </div>
  )
}

GridItem.defaultProps = {
  className:'',
  name:'',
  icon: 'icon-233',
}
export default GridItem