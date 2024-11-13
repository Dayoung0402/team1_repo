import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from 'layouts/Header';
import Sider from 'layouts/Sider';
import { AUTH_PATH } from 'constant';

//          component: 레이아웃          //
export default function Container() {

  //          state: 현재 페이지 path name 상태          //
  const { pathname } = useLocation();

  //          render: 레이아웃 렌더링          //
  return (
    <>
      <Header />
      <Sider />
      <Outlet />

      {/* 만약에 pathname(마지막 경로 주소)가 auth가 아니면 Footer를 출력해라 */}
      {pathname !== AUTH_PATH() && <Sider />}
    </>
  )
}