import React, { Fragment } from "react";
import AppButton from "components/global/app-button";
import AppTab from "components/global/app-tab";
const say = () => {
  console.log("say");
};
interface Itab {
  label: string;
  value:string;
}

const tabs: Itab[] = [
  {
    label: "导出",
    value: "1",
  },
  {
    label: "标题2",
    value: "2",
  },
  {
    label: "标题3",
    value: "3",
  },
];
const handlerClick: (status:string)=> void = (e :string):void => {
  
}

const Demo = () => (
  <Fragment>
    <AppButton
      name="large primary"
      type="primary"
      size="large"
      onClick={say}
    ></AppButton>
    <AppButton name="medium normal" onClick={say}></AppButton>
    <AppButton
      name="small danger"
      type="danger"
      size="small"
      onClick={say}
    ></AppButton>
    <AppButton type="danger" size="small" onClick={say}>
      111
    </AppButton>

    <AppTab list={tabs} onClick={handlerClick}></AppTab>
  </Fragment>
);

export default Demo;
