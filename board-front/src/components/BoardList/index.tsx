import React from 'react';
import './style.css';
import { BoardListItem } from 'types/interface';

import Rectangle23 from '../../assets/images/Rectangle23.png';
import Rectangle22 from '../../assets/images/Rectangle22.png';
import Rectangle24 from '../../assets/images/Rectangle24.png';

interface Props {
    boardList: BoardListItem
}


//          componenet: BoardList 컴포넌트          //
export default function BoardList({  boardList  }: Props) {


  //          properties          //
  const {title, content, boardTitleImage} = boardList;
  const { writeDateTime, writerNickname} = boardList;
  //          render: BoardListItem 컴포넌트 렌더링         //
  return (

    <div className='board-item'>
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
                <img src={Rectangle22} alt='브리치즈 파스타' className="recipe image" />
                <div className='rating'>
                    평점: ⭐️⭐️⭐️⭐️⭐️
                </div>
                <div className='price'>
                    만 오천 냥 
                </div>
                <hr className='solidLine'></hr>
                <h3 className='title'>브리치즈 파스타</h3> {/* 음식 타이틀 */}
                <p className='description'>싱싱한 방울 토마토와 바질의 향긋함과 브리치즈의 꼬수움이 조화롭게 어우러진 파스타</p>
            </div> {/* 첫번째 레시피 끝 */}
            <div className='recipe-card'>
            <img src={Rectangle23} alt='돈카츠' className="recipe image" />
                <div className='rating'>
                    평점: ⭐️⭐️⭐️⭐️⭐️
                </div>
                <div className='price'>
                    만 이천 냥 
                </div>
                <hr className='solidLine'></hr>
                <h3 className='title'>돈카츠</h3> {/* 음식 타이틀 */}
                <p className='description'>돼지고기 등심으로 만드는 겉은 바삭하고 속은 촉촉한 돈까스</p>
            </div>
            <div className='recipe-card'>
            <img src={Rectangle24} alt='돈카츠' className="recipe image" />
                <div className='rating'>
                    평점: ⭐️⭐️⭐️⭐️⭐️
                </div>
                <div className='price'>
                    만 이천 냥 
                </div>
                <hr className='solidLine'></hr>
                <h3 className='title'>돈카츠</h3> {/* 음식 타이틀 */}
                <p className='description'>돼지고기 등심으로 만드는 겉은 바삭하고 속은 촉촉한 돈까스</p>
            </div>

        </div>
    </div>

        
    
  )
}
