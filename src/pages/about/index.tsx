import React, { useState, useContext } from "react";
import { useUserInfo } from "hooks/useUserInfo";
import AppButton from "components/global/app-button";
import { ThemeContext,SizeContext } from "context/index";

type Type = "primary" | "normal" | "danger" | "warning";

const Child:React.FC<any> = ({theme})=>{
  return <AppButton type={theme}>Consumer2222中的button</AppButton>
}


const Box: React.FC<any> = () => {
	const theme = useContext<Type>(ThemeContext);
  const size = useContext<any>(SizeContext);
	return (
		<div>
			<AppButton type={theme} size={size}>被影响的buttonSize{size}</AppButton>
      <ThemeContext.Consumer>
        {/* {theme => (<AppButton type={theme}>Consumer中的button</AppButton>)} */}
        {value => <Child theme={value}></Child>}
      </ThemeContext.Consumer>
		</div>
	);
};

const About = () => {
	const { userInfo, getUserInfo, birthYear } = useUserInfo(1111);
	const theme = useContext<Type>(ThemeContext);
	const [childTheme, setChildTheme] = useState<Type>(theme);
	console.log(theme);
	return (
		<ThemeContext.Provider value={childTheme}>
			<div>
				<div>姓名：{userInfo.name}</div>
				<div>年龄：{userInfo.age}</div>
				<div>手机号：{userInfo.mobile}</div>
				<div>出生年份：{birthYear}</div>
			</div>
			<AppButton type={theme} onClick={() => getUserInfo()}>
				获取新的userInfo
			</AppButton>
			<AppButton
				type={theme}
				onClick={() =>
					setChildTheme((val) => (val === theme ? "danger" : theme))
				}
			>
				修改context的值
			</AppButton>
			<Box></Box>
		</ThemeContext.Provider>
	);
};
export default About;
