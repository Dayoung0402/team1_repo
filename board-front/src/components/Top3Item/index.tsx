import React from 'react';
import './style.css';
import Rectangle23 from '../../assets/images/Rectangle23.png';

export default function Top3Item() {

    //          render: Top 3 List Item 컴포넌트 렌더링          //
    return (
        <div className = 'top-3-list-item'>
            <div className = 'top-3-list-item-box'>
                <div className = 'top-3-list-item-box-top'>
                    <div className = 'top-3-list-item-image'>
                        <img src={Rectangle23} alt="까르보나라" />
                    </div>
                    <h4 className = 'top-3-list-item-name'>{'까르보나라'}</h4>
                </div>
                <div className = 'top-3-list-item-box-bottom'>
                    <hr className="dotted-line" />
                    <div className = 'top-3-list-item-content'>{'한 줄 소 개'}</div>
                </div>
            </div>
        </div>
    )
}