import React from "react";
import './style.css';

//          component: 페이지네이션 컴포넌트          //
export default function Pagination() {

    //          render: 페이지네이션 컴포넌트 렌더링          //
    return (
        <div id = 'pagination-wrapper'>
            <div className = 'pagination-change-link-box'>
                <div className = 'icon-box-small'>
                    <div className = 'left-direction-icon'></div>
                </div>
            </div>
            <div className='pagination-divider'>
                <div className = 'icon-box-small'>
                    <div className = 'etc-icon'></div>
                </div>
            </div>
            
            <div className='pagination-text-active'>{1}</div>
            <div className='pagination-text'>{2}</div>

            <div className='pagination-divider'>
                <div className = 'icon-box-small'>
                    <div className = 'etc-icon'></div>
                </div>
            </div>

            <div className='pagination-change-link-box'>
                <div className = 'icon-box-small'>
                    <div className = 'left-direction-icon'></div>
                </div>
            </div>
        </div>
    )
}
