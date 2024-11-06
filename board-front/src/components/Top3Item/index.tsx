import React from 'react';
import './style.css';

import Rectangle23 from '../../assets/images/Rectangle23.png';
import Rectangle22 from '../../assets/images/Rectangle22.png';
import Rectangle24 from '../../assets/images/Rectangle24.png';
import { BoardListItem } from 'types/interface';

interface Props {
    top3ListItem: BoardListItem
}    

//          component: Top 3 List Item 컴포넌트          //
export default function Top3Item({ top3ListItem } : Props) {

    //              properties          //
    const { boardNumber, title, content } = top3ListItem;
    const { favoriteCount } = top3ListItem;

    //          function: 네비게이트 함수          //
    // const navigator = useNavigate();

    //          event handler: 게시물 아이템 클릭 이벤트 처리 함수          //
const onClickHandler = () => {
    // navigator(boardNumber);
}

    //          render: Top 3 List Item 컴포넌트 렌더링          //
    return (
        <div className='top-3-list-item' onClick={onClickHandler}>
            <h2 className="menu-title">오늘의 메뉴</h2>
            <div className="line-with-circle"></div> {/* 추가된 선과 원 요소 */}
            <div className="menu-container"></div>
            <div className='top-3-list-item-main-box'>
                <div className='top-3-list-item-menu-item'>
                    <img src={Rectangle23} alt="까르보나라" />
                    <h3>{title}</h3>
                    <hr className="dotted-line" />
                    <p>{content}</p>
                </div> 

                <div className='top-3-list-item-menu-item'>
                    <img src={Rectangle22} alt="오겹살" />
                    <h3>{title}</h3>
                    <hr className="dotted-line" />
                    <p>{content}</p>    
                </div> 
                
                <div className='top-3-list-item-menu-item'>
                    <img src={Rectangle24} alt="순두부찌개" />
                    <h3>{title}</h3>
                    <hr className="dotted-line" />
                    <p>{content}</p>
                </div> 
            </div>
        </div>
    );
}







