import React, { useState, useEffect } from "react";
import axios from "api/index";

interface IUserInfo {
	name: string;
	age: number;
	mobile: string;
	avatar: string;
}

export const useUserInfo = (id: string | number) => {
	const [userInfo, setUserInfo] = useState<IUserInfo>({} as IUserInfo);
	const [birthYear,setBirthYear] = useState<string | number>(0)
	const getUserInfo = () => {
		axios.get(`/getUserInfo?userId=${id}`).then((res: any) => {
			setUserInfo(res.data);
		});
	};

	useEffect(() => {
		axios.get(`/getUserInfo?userId=${id}`).then((res: any) => {
			setUserInfo(res.data);
		});
	}, [id]);

	useEffect(() => {
	  const year = new Date().getFullYear()
		setBirthYear(year - userInfo.age)

	},[userInfo])
	return {
		userInfo,
		getUserInfo,
		birthYear
	};
};
