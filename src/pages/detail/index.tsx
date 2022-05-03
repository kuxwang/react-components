import React from 'react';
import { ThemeContext,SizeContext } from "context/index";
import AppButton from "components/global/app-button";

class Layout extends React.Component<any, any> {
  constructor(props:any) {
    super(props);
  }
  render() {
    return (
      <ThemeContext.Consumer>
        {
          theme => (
            <SizeContext.Consumer>
              {size => (<AppButton size={size} type={theme}>Size为{size} 类型为{theme}</AppButton>)}
            </SizeContext.Consumer>
          )
        }
      </ThemeContext.Consumer>

    )
  }
}




class Detail extends React.PureComponent<any,any> {
  constructor(props:any) {
    super(props);
  }
  static contextType?: React.Context<any> | undefined = {...SizeContext,...ThemeContext}; 


  render() {
   
    return (
      <div>
        {/* <ThemeContext.Provider value="danger">
          <SizeContext.Provider value="large"> */}
            <Layout></Layout>
          {/* </SizeContext.Provider>
        </ThemeContext.Provider> */}
      </div>
    )
  }

}

export default Detail