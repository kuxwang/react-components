import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Appbutton from 'components/global/app-button'
const List = () =>{
  const [count,setCount] = useState(1) 
  const navigate = useNavigate()
  useEffect(()=>{
    console.log('mounted')
  })
  return (
  <div>
    <div>数字为{count}</div>
    <Appbutton onClick={()=> setCount(count * 2)}> 增加Count </Appbutton>  
    <Appbutton onClick={()=> navigate('/')}> 跳转首页 </Appbutton>  

  </div>)
}



export default List