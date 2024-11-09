import React from 'react';
import './style.css';
import {BoardListItem} from 'types/interface';
import { useNavigate } from 'react-router-dom';


//import { useNavigate } from 'react-router-dom';

//import BoardListItem from '../../types/interface/board-list-item.interface';


interface Props {
    boardList: BoardListItem;
}

// 컴포넌트: BoardList 컴포넌트
export default function BoardItem({ boardList }: Props) {
    // properties
    const { title, content, boardTitleImage, favoriteCount, price } = boardList;

    //          function: 네비게이트 함수          //
    const navigator = useNavigate();

    //          event hadler: 게시물 아이템 클릭 이벤트 처리함수        //
    const onClickHandler = () => {
        //navigator(boardNumber);
    }


    // render: BoardListItem 컴포넌트 렌더링
    return (

    <div className='board-item' onClick={onClickHandler}>
        <div className='header'>
            <div className='login'>
                <a href='#'>로그인</a>|<a href='#'>회원가입</a>
                </div>
            <h1>흙수저 레시피</h1>
            <h2>레시피 게시판</h2>
            <nav className='nav'>
                <a href="#">레시피 게시판</a>|<a href="#">자유 게시판</a>
            </nav>
            
        </div>  
            {/* header 끝  */}
        <div className='button-box'>
            <button className="write-button">✏️ 글 작성하기</button>
        </div>
        <hr className='line'></hr>
        <div className='recipe-list'>
            <div className='recipe-card'> {/* 첫번째 레시피 */}
            {boardTitleImage !== null && (
                <div className='recipe-image' style={{ backgroundImage: 'url(${boardTitleImage}'}}></div>
            )}
            <div className='recipe-image' style={{ backgroundImage: 'url(${boardTitleImage}'}}></div>
                <div className='rating'>
                    평점: {favoriteCount}
                </div>
                <div className='price'>
                    {price} 냥 
                </div>
                <hr className='solidLine'></hr>
                <h3 className='title'>{title}</h3> {/* 음식 타이틀 */}
                <p className='description'>{content}</p>
            </div> {/* 첫번째 레시피 끝 */}

            <div className='recipe-card'>
            {boardTitleImage !== null && (
                <div className='recipe-image' style={{ backgroundImage: 'url(${boardTitleImage}'}}></div>
            )}
                <div className='rating'>
                    평점: {favoriteCount}
                </div>
                <div className='price'>
                    {price} 냥 
                </div>
                <hr className='solidLine'></hr>
                <h3 className='title'>{title}</h3> {/* 음식 타이틀 */}
                <p className='description'>{content}</p>
            </div>

            <div className='recipe-card'>
            {boardTitleImage !== null && (
                <div className='recipe-image' style={{ backgroundImage: 'url(${boardTitleImage}'}}></div>
            )}
                <div className='rating'>
                    평점: {favoriteCount}
                </div>
                <div className='price'>
                    {price} 냥 
                </div>
                <hr className='solidLine'></hr>
                <h3 className='title'>{title}</h3> {/* 음식 타이틀 */}
                <p className='description'>{content}</p>
            </div>

        </div>
    </div>

        
    
  )
}