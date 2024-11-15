import React, { useRef, useState, useEffect } from 'react';
import './style.css';
import { useBoardStore } from 'stores';

//          component: 레시피 게시판 작성 화면 컴포넌트          //
export default function RecipeBoardWrite() {

  //          state: 본문 영역 요소 참조 상태          //
  const contentRef = useRef<HTMLTextAreaElement | null>(null);
  //          state: 이미지 영역 요소 참조 상태          //
  const imageInputRef = useRef<HTMLInputElement | null>(null);
  //          state: 금액 입력 영역 요소 참조 상태          //
  const priceInputRef = useRef<HTMLInputElement | null>(null);

  //          state: 게시물 상태          //
  const { title, setTitle } = useBoardStore();
  const { content, setContent } = useBoardStore();
  const { boardImageFileList, setBoardImageFileList } = useBoardStore();
  const { resetBoard } = useBoardStore();

  //          state: 게시물 이미지 미리보기 URL 상태          //
  const [imageUrls, setImageUrls] = useState<String[]>([]);

  //          effect: 마운트 시 실행할 함수          //
  useEffect(() => {
    resetBoard();
  }, []);

  //          render: 레시피 게시판 작성 화면 컴포넌트 렌더링          //
  return (
    <div id='recipe-board-write-wrapper'>
      <div className='recipe-board-write-container'>
        <div className='recipe-board-write-tool-box'>
          <div className='tool-icon-box'>
            <div className='write-menu-icons'></div>
            <div className='icon image-box-light-icon'></div>
          </div>
          <input ref={imageInputRef} type='file' accept='image/*' style={{ display: 'none' }} />
        </div>
        <div className='recipe-board-price-box'>
          <div className='price-title'>{'예상 비용'}</div>
          <hr className='price-line' />
          <input ref={priceInputRef} className='recipe-price-input' placeholder='금액을 입력하세요' />
          <div className='won-icon'></div>
          <div className='tool-icon-box'></div>
        </div>
        <div className ='write-complete-button'>
          <div className = 'complete-title'>{'작성 완료'}</div>
        </div>
        <div className='recipe-board-write-box'>
          <div className='recipe-board-write-title-box'>
            <input 
              className='board-write-title-input' 
              type='text' 
              placeholder='제목' 
              value={title} 
            />
          </div>
          <div className='divider'></div>
          <div className='recipe-board-write-content-box'>
            <textarea 
              ref={contentRef} 
              className='board-write-content-textarea' 
              placeholder='오늘의 레시피는 ...' 
              value={content} 
            />
          </div>
          <div className='recipe-board-write-images-box'>
            <div className='recipe-board-write-image-box'>
              <img className='recipe-board-write-image' alt='' />
              <div className='tool-icon-box image-close'>
                <div className='icon close-icon'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
