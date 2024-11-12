import React from 'react';
import './style.css';

//          component: 사이더 레이아웃          //
export default function Sider() {

  //          render: 사이더 레이아웃 렌더링          //  
  return (
    <div id='sider'>
      <div className='slider-container'>
        <div className='left-slider'></div>
        <div className='right-slider'></div>
      </div>
    </div>
  );
}
