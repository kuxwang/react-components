import React, { Component } from "react";
import style from "./style.module.scss";

interface Itab {
  label: string;
  value: string;
}

interface IProps {
  list: Itab[];
  onClick: (e:string) => void;
}

interface IState {
  status:string | number;
}

class AppTab extends Component<IProps,IState> {
  private static defaultProps = {
    list: [],
  };
  constructor(props:IProps) {
    super(props);
    this.state = {
      status: props.list[0].value,
    };
  }
  handlerClick(e:string){
    this.setState({
      status:e
    })
    this.props.onClick(e)
  }

  render() {
    const {
      props: { list },
      state: { status },
    } = this;
    return (
      <div className={style.tab}>
        {(list as Itab[]).map((item) => {
          return (
            <div
              className={[
                style.item,
                status === item.value ? style.active : "",
              ].join(" ")}
              key={item.value}
              onClick={() => this.handlerClick(item.value)}
            >
              {item.label}
            </div>
          );
        })}
      </div>
    );
  }
}

export default AppTab;
