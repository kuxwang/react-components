import React, { Component, useEffect } from "react";
import AppButton from "components/global/app-button";
import GridItem from "components/common/grid-item";
import { useNavigate } from "react-router-dom";
import "./style.css";
import axios from 'api/index';
// import {useLoca}
interface IProps {}

const Home: React.FC<IProps> = (props) => {
  const navigate = useNavigate();

  // useEffect(() => {
  //     axios.get("/getUserInfo?userId=112").then((res: any) =>{
  //       console.log(res)
  //     })
  // });

  return (
    <div className="flex">
      <GridItem name="查招聘" icon="111"></GridItem>
      <GridItem name="查招聘" icon="111"></GridItem>
      <GridItem name="查招聘" icon="111"></GridItem>
      <GridItem name="查招聘" icon="111"></GridItem>
    </div>
  );
};

export default Home;
