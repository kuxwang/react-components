import React, { Component, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
// import { store, incremented as inc } from "store/index";
import AppButton from "components/global/app-button";
// "components/global/app-section";
import { useSelector, useDispatch } from 'react-redux';
import {incremented,decrement,incrementByAmount,incrementAsync,selectCount} from 'store/counterSlice.js'
interface IProps {}
// const incrementStore = (n: any) => {
// 	store.dispatch(inc(3));
// };

const Todo: React.FC<IProps> = (props) => {
  const dispatch = useDispatch()
  const count = useSelector(selectCount);
  const [incrementAmount,setIncrementAmount] = useState<string | number>(2)
	const location: any = useLocation();
	const [id, setId] = useState<string | number>(location.state.id);
	useEffect(() => {
     console.log(id)
	}, []);

	return <div>
    <AppButton type="success" onClick={()=>dispatch(incremented()) }>+</AppButton>
    <AppButton type="warning" onClick={()=>dispatch(decrement()) }>-</AppButton>
    <AppButton type="danger" onClick={()=>dispatch(incrementByAmount(Number(incrementAmount))) }>+N</AppButton>
    {/* <AppButton onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}>async add</AppButton> */}
    <input
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
    <div>结果为{count}</div>
    </div>;
};

export default Todo;
