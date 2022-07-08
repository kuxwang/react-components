import React, { useState, useEffect } from "react";
import {  useLocation } from "react-router-dom";
import AppButton from "components/global/app-button";
import { useSelector, useDispatch } from "react-redux";
import {
	incremented,
	decrement,
	incrementByAmount,
	incrementAsync,
	selectCount,
} from "store/counterSlice";
interface IProps {}
const Count: React.FC<IProps> = (props) => {
	const dispatch = useDispatch<any>();
	const count = useSelector(selectCount);
	const [incrementAmount, setIncrementAmount] = useState<string | number>(2);
	const location: any = useLocation();
	const [id, setId] = useState<string | number>(location.state.id);
	useEffect(() => {
		console.log(id);
	}, []);
	return (
		<div>
			<AppButton type="success" onClick={() => dispatch(incremented())}>
				+
			</AppButton>
			<AppButton type="warning" onClick={() => dispatch(decrement())}>
				-
			</AppButton>
			<AppButton
				type="danger"
				onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
			>
				+N
			</AppButton>
			<AppButton
				onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
			>
				async add
			</AppButton>
			<input
				aria-label="Set increment amount"
				value={incrementAmount}
				onChange={(e) => setIncrementAmount(e.target.value)}
			/>
			<div>结果为{count}</div>
		</div>
	);
};

export default Count;
