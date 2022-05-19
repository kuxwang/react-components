import React, { Component, useState, useEffect } from "react";
import AppButton from "components/global/app-button";
import AppSection from "components/global/app-section";
import GridItem from "components/common/grid-item";
import { useNavigate } from "react-router-dom";
import "./style.css";
import axios from "api/index";
// import {useLoca}
interface IProps {}
interface IGridItem {
	icon: string;
	name: string;
	path: string;
	id?: string | number;
}

const Home: React.FC<IProps> = (props) => {
	const navigate = useNavigate();
	const [list, setList] = useState<Array<IGridItem>>([] as Array<IGridItem>);

	useEffect(() => {
		// axios.get("/getUserInfo?userId=112").then((res: any) =>{
		//   console.log(res)
		// })
		const list: IGridItem[] = [
			{
				name: "查老板",
				icon: "icon-233",
				id: "1",
				path: "todo",
			},
			{
				name: "查关系",
				icon: "icon-233",
				id: "2",
				path: "detail",
			},
			{
				name: "受益所有人",
				icon: "icon-233",
				id: "3",
				path: "detail",
			},
			{
				name: "司法拍卖",
				icon: "icon-233",
				id: "4",
				path: "detail",
			},
		];
		setList(list);
	}, []);
	const goTo = (path: string, id: any): void => {
		// console.log(id);
		navigate(`/${path}`, {state:{id:1}});
	};

	return (
		<AppSection name="111">
			<div className="grid grid-cols-4">
				{list.map((item) => (
					<GridItem
						name={item.name}
						icon={item.icon}
						key={item.id}
						onClick={() => goTo(item.path, item.id)}
					></GridItem>
				))}
			</div>
		</AppSection>
	);
};

export default Home;
