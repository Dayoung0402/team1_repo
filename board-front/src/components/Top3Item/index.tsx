import React from 'react';
import './style.css';

//          component: Top3 List Item 컴포넌트          //
export default function Top3Item() {

//          render: Top3 List Item 컴포넌트          //
  return (
    <div className='top-3-list-item'>
        <h2>오늘의 메뉴</h2>
        <div className='top-3-list-item-main-box'>
            <div className='top-3-list-item-menu-item'>
                <img src="/Users/kimjuhui/Desktop/Rectangle 23.png" alt="까르보나라"></img>
                <h3>까르보나라</h3>
                <p>한 줄 소개</p>
            </div> 

            <div className='top-3-list-item-menu-item'>
                <img src="/Users/kimjuhui/Desktop/Rectangle 22.png" alt="오겹살"></img>
                <h3>오겹살</h3>
                <p>한 줄 소개</p>    
            </div> 
            
            <div className='top-3-list-item-menu-item'>
                <img src="/Users/kimjuhui/Desktop/Rectangle 24.png" alt="순두부찌개"></img>
                <h3>순두부찌개</h3>
                <p>한 줄 소개</p>
            </div> 
        </div>
    </div>
  )
}



