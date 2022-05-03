import React from 'react';
import AppButton from 'components/global/app-button'
const FancyButton = React.forwardRef((props:any, ref:any) =>(
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

function show(props?:any) {
  console.log(props);
  console.log(`执行show函数,文字为${props.children}`);
}

const logProps = (WrappedComponent:React.JSXElementConstructor<any>,fn?:any) =>{
  
   class NComponent extends React.Component<any, any>{
    static displayName: string;
    constructor(props:any){
      super(props);
      this.state={
        a:1
      }
    }
    componentDidMount(){
     
    }
    render() {
      const {forwardedRef, ...rest} = this.props
      return (
        <WrappedComponent {...rest} size="large" ref={forwardedRef} onClick={()=>fn(this.props)}/>
      )
    }
  }
  NComponent.displayName=`${WrappedComponent.name}_N` || 'ZXC'

  return React.forwardRef((props:any, ref:any) => {
    return (<NComponent {...props} forwardedRef={ref}></NComponent>)
  }) 
}

const Btn =  logProps(AppButton,show)

class User extends React.Component<any, any> {
    divRef: React.RefObject<any>;
    constructor(props:any) {
      super(props);

      this.divRef = React.createRef()
    }
    componentDidMount(){
      console.log(this.divRef.current)
    }
    handlerChange(){
      console.log('点击按钮')
    }

    render() {
      return (
        <div>
          <Btn type="primary" size="small" onClick={()=> this.handlerChange()} ref={this.divRef}>
            HOC组件
          </Btn>
        </div>
      )
    }

}

export default User