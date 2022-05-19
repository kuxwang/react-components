import { Fragment, lazy, Suspense } from "react";
import { Routes, Route, Outlet } from "react-router";
import { BrowserRouter } from "react-router-dom";

import Home from "../pages/home";
const List = lazy(() => import("../pages/list"));
const Detail = lazy(() => import("../pages/detail"));
const About = lazy(() => import("../pages/about"));
const User = lazy(() => import("../pages/user"));
const Demo = lazy(() => import("../pages/demo"));
const Todo = lazy(() => import("../pages/todo"));

const AppRouter = () => (
	<Fragment>
		<BrowserRouter>
			<Suspense fallback={<div>loading</div>}>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/list" element={<List />}></Route>
					<Route path="/detail" element={<Detail />}></Route>
					<Route path="/about" element={<About />}></Route>
					<Route path="/user" element={<User />}></Route>
					<Route path="/demo" element={<Demo />}></Route>
					<Route path="/todo" element={<Todo />}></Route>
				</Routes>
			</Suspense>
		</BrowserRouter>
	</Fragment>
);

export default AppRouter;
