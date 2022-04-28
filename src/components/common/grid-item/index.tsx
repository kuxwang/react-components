import React from "react";
import style from "./style.module.scss";

interface IGridItem {
  icon: string;
  name:string;
}

const GridItem: React.FC<IGridItem> = (props) => {
  return (
    <div className={style.item}>
      <div className={style.icon}></div>
      <div className={style.name}>{props.name}</div>
    </div>
  )
}

export default GridItem