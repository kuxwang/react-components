import { Fragment,lazy } from "react";
import { Routes , Route , Outlet  } from 'react-router'
import { BrowserRouter } from "react-router-dom";

import Home from '../pages/home'
const List = lazy(() => import('../pages/list'))
const Detail = lazy(() => import('../pages/detail'))
const About = lazy(() => import('../pages/about'))
const User = lazy(() => import('../pages/user'))
const Demo = lazy(() => import('../pages/demo'))

const AppRouter = () => (
  <Fragment>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/list" element={<List/>}></Route>
        <Route path="/detail" element={<Detail/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/user" element={<User/>}></Route>
        <Route path="/demo" element={<Demo/>}></Route>
      </Routes>
    </BrowserRouter>
  </Fragment>
)

export default AppRouter