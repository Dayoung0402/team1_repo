import React, { useState } from 'react';
import './style.css';
import { CommentListItem } from 'types/interface';
import StarRating from 'components/StarRating';

//          component: 레시피 게시판 상세 화면 컴포넌트          //
export default function RecipeBoardDetail() {

  //          component: 게시물 상세 상단 컴포넌트          //
  const BoardDetailTop = () => {

    //          render: 게시물 상세 상단 컴포넌트 렌더링          //
    return (
      <div id = 'recipe-board-detail-top'>
        <div className = 'recipe-board-info-box'>
          <div className = 'recipe-user-info-box'>
            <div className = 'user-image-icon'></div>
            <div className = 'user-name-box'>{'히주히주히주 님의 글'}</div>
          </div>
          <div className = 'recipe-user-calender-box'>{'1995-10-04 | 10:04:52'}</div>
        </div>
        <div className = 'recipe-board-detail-box'>
          <div className = 'recipe-detail-button'>
            <div className = 'correct-button'>
              <div className = 'correct-icon'></div>
              <div className = 'correct-button-content'>{'수정하기'}</div>
            </div>
            <div className = 'delete-button'>
              <div className = 'delete-icon'></div>
              <div className = 'delete-button-content'>{'삭제하기'}</div>
            </div>
          </div>
          <div className = 'recipe-detail-box-header'>
            <div className = 'recipe-detail-box-title'>{'브리치즈파스타'}</div>
            <div className = 'recipe-detail-box-title-content'>{'예상 비용 : 약 15000₩'}</div>
          </div>
          <div className = 'recipe-detail-box-content'>
            <div className = 'recipe-detail-box-write-content'>{'재료 : 브리치즈 반개 (중요도 ⭐⭐️️⭐⭐️️⭐️), 방울토마토, 마늘(간마늘 대체 가능), 올리브오일, 소금, 후추, 오일, 소금, 후추, 바질'}</div>
<<<<<<< HEAD
            <img
              className="recipe-detail-box-image-box" src='https://image.zeta-ai.io/profile-image/7cbabf96-32b3-4a81-97f1-3069f9f7f642/b3987df0-a48d-42b8-994b-1e5994fc35bd.jpeg?w=750&q=75&f=webp' />

=======
            <div className = 'recipe-detail-box-image-box'></div>
>>>>>>> 00b0ac6795d71e1e493509c4ef34e626d1c4e602
          </div>
        </div>
      </div>

    );
  };

  //          component: 게시물 상세 하단 컴포넌트          //
  const BoardDetailBottom = () => {
    //          render: 게시물 상세 하단 컴포넌트 렌더링          //
    return (
      <div id = 'recipe-board-detail-bottom'>
        <div className = 'recipe-board-rating-box'>
            <div className = 'rate-icon'></div>
            <div className = 'rate-content'>{'4.9'}</div>
          </div>

        <div className = 'recipe-board-write-comment-box'>
          
          <div className = 'input-rate-star-container'>
            <div className = 'input-rate-star-title'>{'평가하기'}</div>
            <div className = 'input-rate-star'>
              <StarRating />
            </div>
          </div>

          <div className = 'comment-input-profile-box'>
            <div className = 'comment-profile-icon'></div>
              <div className = 'input-container'>
                <textarea className = 'recipe-board-comment-textare' placeholder='힘이 되는 한마디...!'/>
            </div>
          </div>

          <div className = 'comment-complete-button-box'>
            <div className = 'save-icon'></div>
            <div className = 'comment-complete-title'>{'입력 완료'}</div>
          </div>

        </div>
        <div className = 'recipe-board-view-comment-box'>
          <div className = 'recipe-board-comment-title'>{'댓글 (2)'}</div>
            <div className = 'recipe-board-comment-list-container'>
              <div className = 'comment-view-user-icon'></div>
              <div className = 'person-name'>{'쥬'}</div>
              <div className = 'triangle-icon'></div>
              <div className = 'comment-content'>{'이거 해봤는데 엄청 맛있어요!'}</div>
          </div>

          <hr className = 'comment-dotted-line' />

            <div className = 'recipe-board-comment-list-container'>
              <div className = 'comment-view-user-icon'></div>
              <div className = 'person-name'>{'혜오니'}</div>
              <div className = 'triangle-icon'></div>
              <div className = 'comment-content'>{'브리치즈가 고소해서 엄청 잘 어울려요 최애 파스타됨'}</div>
          </div>
        </div>
      </div>
    
    );
  };

  //          render: 레시피 게시판 상세 화면 컴포넌트 렌더링          //
  return (
    <div id = 'board-detail-wrapper'>
      <div className = 'board-detail-container'>
        <BoardDetailTop />
        <BoardDetailBottom />
      </div>
    </div>
  )
}