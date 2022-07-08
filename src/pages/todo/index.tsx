import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AppButton from "components/global/app-button";
import { addItem, removeItem, selectList,listLen } from "store/todoSlice";
interface IProps {}

type IGood = {
	name: string;
	id: number | string;
	amount: number;
};

let count: number = 0;

const createGoods: any = () => {
	count++;
	return {
		name: `名称${count}`,
		id: count,
		amount: count * 10,
	};
};

const Todo: React.FC<IProps> = (props) => {
	const dispatch = useDispatch<any>();
	const list = useSelector(selectList);
	const len = useSelector(listLen);

	return (
		<div>
			<AppButton
				type="success"
				onClick={() => dispatch(addItem(createGoods()))}
			>
				添加Item
			</AppButton>
            <div>当前数量{len}</div>
			<div>
				{list.map((good: IGood) => (
					<div key={good.id} onClick={() => dispatch(removeItem(good.id))}>
						{good.name} --- {good.amount}
					</div>
				))}
			</div>
		</div>
	);
};

export default Todo;
