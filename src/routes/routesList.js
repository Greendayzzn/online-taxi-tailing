/*
 * @Author: 张卓南
 * @Date: 2023-10-17 18:15:25
 * @LastEditTime: 2023-10-17 18:15:49
 * @Description: 
 */
// src/routes/routesList.js
import React from 'react';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';

const routesList = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/about',
    element: <AboutPage />
  },
  // 添加更多的路由配置项...
];

export default routesList;
