import React from 'react';
import './style.css';

import Rectangle23 from '../../assets/images/Rectangle23.png';
import Rectangle22 from '../../assets/images/Rectangle22.png';
import Rectangle24 from '../../assets/images/Rectangle24.png';

export default function Top3Item() {
    return (
        <div className='top-3-list-item'>
            <h2 className="menu-title">오늘의 메뉴</h2>
            <div className="line-with-circle"></div> {/* 추가된 선과 원 요소 */}
            <div className="menu-container"></div>
            <div className='top-3-list-item-main-box'>
                <div className='top-3-list-item-menu-item'>
                    <img src={Rectangle23} alt="까르보나라" />
                    <h3>까르보나라</h3>
                    <hr className="dotted-line" />
                    <p>한 줄 소개</p>
                </div> 

                <div className='top-3-list-item-menu-item'>
                    <img src={Rectangle22} alt="오겹살" />
                    <h3>오겹살</h3>
                    <hr className="dotted-line" />
                    <p>한 줄 소개</p>    
                </div> 
                
                <div className='top-3-list-item-menu-item'>
                    <img src={Rectangle24} alt="순두부찌개" />
                    <h3>순두부찌개</h3>
                    <hr className="dotted-line" />
                    <p>한 줄 소개</p>
                </div> 
            </div>
        </div>
    );
}







