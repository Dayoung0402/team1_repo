import React from 'react';
import './style.css';

import Rectangle23 from '../../assets/images/Rectangle23.png';
import Rectangle22 from '../../assets/images/Rectangle22.png';
import Rectangle24 from '../../assets/images/Rectangle24.png';

interface Props {
    boardListItem: {
        boardNumber: number;
        title: string;
        content: string;
        boardTitleImage: string | null; // null을 허용하도록 수정
        writeDateTime: string;
        writerNickname: string;
    };
}


//          componenet: BoardListItem 컴포넌트          //
export default function BoardItem( {boardListItem }: Props) {

  //          properties          //
  const {boardNumber, title, content, boardTitleImage} = boardListItem;
  const { writeDateTime, writerNickname} = boardListItem;
  //          render: BoardListItem 컴포넌트 렌더링         //
  return (
    <div className="outer-background">
      <div className="container">
          <div className="header">
              <div className="login">
              <span className="material-symbols-outlined">login</span>
                  <a href="#">로그인</a> | <a href="#">회원가입</a>
              </div>
              <p id="name">흙수저 레시피</p>
              <p id="title">레시피 게시판</p>
              <div className="nav">
                  <p className="receipe"><a href="#">레시피 게시판</a> | <a href="#">자유 게시판</a> </p>
                  <a href="#" className="button" style={{ fontSize: "16px", float: "right" }}>글 작성하기</a>
              </div>
          </div>

          <div className="recipe-board">
              <div className="recipe-item">
                  <img src={Rectangle22} alt="브리치즈 파스타" />
                  <div className="rating">평점: <span className="stars">★★★★☆</span></div>
                  <div className="price">약 열다섯 냥</div>
                  <div className="title">브리치즈 파스타</div>
                  <div className="description">싱싱한 방울 토마토와 바질의 향긋함과 브리치즈의 꼬수움이 조화롭게 어루어진 파스타</div>
              </div>

              <div className="recipe-item">
                  <img src={Rectangle23} alt="돈카츠" />
                  <div className="rating">평점: <span className="stars">★★☆☆☆</span></div>
                  <div className="price">약 열다섯 냥</div>
                  <div className="title">돈카츠</div>
                  <div className="description">돼지고기 등심으로 만든 돈카츠 바삭한 식감과 풍미를 즐겨보세요</div>
              </div>

              <div className="recipe-item">
                  <img src={Rectangle24} alt="김치찌개" />
                  <div className="rating">평점: <span className="stars">★★★☆☆</span></div>
                  <div className="prive">약 열두 냥</div>
                  <div className="title">김치찌개</div>
                  <div className="description">15분만에 만드는 간편한 레시피 얼큰한 김치찌개 한그릇</div>
              </div>
        </div>
        <div className="pagination">
            <a href="#">&laquo;</a>
            <a href="#">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#">&raquo;</a>
        </div>
    </div>
  </div>
  )
}
