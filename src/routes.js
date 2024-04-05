import React from 'react';
import SignUp from './pages/register';
import SignIn from './pages/login';
import Home from './pages/home';
import Ceklis from './pages/ceklis';


/**
 * @var ROUTERS adalah variable router aplikasi
 */
const ROUTERS = [
  {
    path: '/register',
    Component: SignUp,
    exact: true,
    isPrivate: false,
  },
  {
    path: '/login',
    Component: SignIn,
    exact: true,
    isPrivate: false,
  },
  {
    path: '/',
    Component: Ceklis,
    exact: true,
    isPrivate: true,
  },
  
];

export default ROUTERS;
