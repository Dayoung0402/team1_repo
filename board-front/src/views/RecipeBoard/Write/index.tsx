import React, { useRef, useState, useEffect, ChangeEvent } from 'react';
import './style.css';
import { useBoardStore } from 'stores';

//          component: 레시피 게시판 작성 화면 컴포넌트          //
export default function RecipeBoardWrite() {

  //          state: 제목 영역 요소 참조 상태          //
  const titleRef = useRef<HTMLTextAreaElement | null>(null);
  //          state: 본문 영역 요소 참조 상태          //
  const contentRef = useRef<HTMLTextAreaElement | null>(null);
  //          state: 이미지 영역 요소 참조 상태          //
  const imageInputRef = useRef<HTMLInputElement | null>(null);
  //          state: 금액 입력 영역 요소 참조 상태          //
  const priceRef = useRef<HTMLTextAreaElement | null>(null);

  //          state: 게시물 상태          //
  const { title, setTitle } = useBoardStore();
  const { content, setContent } = useBoardStore();
  const { price, setPrice } = useBoardStore();
  const { boardImageFileList, setBoardImageFileList } = useBoardStore();
  const { resetBoard } = useBoardStore();

  //          state: 게시물 이미지 미리보기 URL 상태          //
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  //          event handler: 제목 변경 이벤트 처리          //
  const onTitleChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setTitle(value);
    if (!titleRef.current) return;
  
    // 높이를 자동으로 설정 후 스크롤 높이만큼 조정
    titleRef.current.style.height = 'auto';
    titleRef.current.style.height = `${titleRef.current.scrollHeight}px`;
  }

  //           event handler : 내용 변경 이벤트 처리          //
  const onContentChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setContent(value);
    if (!contentRef.current) return;
  
    // 높이를 자동으로 설정 후 스크롤 높이만큼 조정
    contentRef.current.style.height = 'auto';
    contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
  };

   //          event handler: 가격 변경 이벤트 처리          //
    const onPriceChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    const numericValue = Number(value.replace(/[^0-9]/g, '')); // 숫자만 허용
    setPrice(numericValue);

    if (!contentRef.current) return;
  
    // 높이를 자동으로 설정 후 스크롤 높이만큼 조정
    contentRef.current.style.height = 'auto';
    contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
};

//          event handler: 이미지 변경 이벤트 처리          //
const onImageChangeHanler = (event: ChangeEvent<HTMLInputElement>) => {
  if (!event.target.files || !event.target.files.length) return;
  const file = event.target.files[0];

  // 미리 보기용으로 배열을 만든 것 (미리 보기용 url) //
  const imageUrl = URL.createObjectURL(file);
  const newImageUrls = imageUrls.map(item => item);
  newImageUrls.push(imageUrl);
  setImageUrls(newImageUrls);

  // 백엔드에 업로드할 때 사용하는 것 //
  const newBoardImageFileList = boardImageFileList.map(item => item);
  newBoardImageFileList.push(file);
  setBoardImageFileList(newBoardImageFileList);

  // 같은 이미지를 업로드 할 수 있게 해줌 -> 이게 없으면 이미지의 주소가 같아서 변경됐다고 인식을 못하기 때문 //
  if (!imageInputRef.current) return;
  imageInputRef.current.value = '';

}

//          event handler: 이미지 업로드 버튼 클릭 이밴트 처리 (실제 API가 작동되기 전에 이미지가 업로드 되도록 하는 것)          //
const onImageUploadButtonClcikHandler = () => {
  if (!imageInputRef.current) return;
  imageInputRef.current.click();
}
  
//          event handler: 이미지 닫기 버튼 클릭 이벤트 처리          //
const onImageCloseButtonClickHandler = (deleteindex: number) => {
  if (!imageInputRef.current) return;
  imageInputRef.current.value='';

  const newImageUrls = imageUrls.filter((url, index) => index !== deleteindex);
  setImageUrls(newImageUrls);

  const newBoardImageFileList = boardImageFileList.filter((file, index) => index !== deleteindex);
  setBoardImageFileList(newBoardImageFileList);
} 

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
            <div className='write-menu-icons'>
              <div className='icon image-box-light-icon' onClick={onImageUploadButtonClcikHandler}></div>
              <input ref={imageInputRef} type='file' accept='image/*' style={{ display: 'none' }} onChange={onImageChangeHanler} />
            </div>
          </div>
        </div>
        <div className='recipe-board-price-box'>
          <div className='price-title'>{'예상 비용'}</div>
          <hr className='price-line' />
          <textarea ref={priceRef} className='recipe-price-textarea' placeholder='금액을 입력하세요' value={price.toString()} onChange={onPriceChangeHandler} />
          <div className='won-icon'></div>
          <div className='tool-icon-box'></div>
        </div>
        <div className ='write-complete-button'> 
          <div className = 'complete-title'>{'작성 완료'}</div>
        </div>
        <div className='recipe-board-write-box'>
          <div className='recipe-board-write-title-box'>
            <textarea 
              ref = {titleRef}
              className='board-write-title-textarea' 
              placeholder='제목' 
              value={title} 
              onChange={onTitleChangeHandler}
              rows={1}
            />
          </div>
          <div className='divider'></div>
          <div className='recipe-board-write-content-box'>
            <textarea 
              ref={contentRef} 
              className='board-write-content-textarea' 
              placeholder='오늘의 레시피는 ...' 
              value={content} 
              onChange={onContentChangeHandler}
            />
          </div>
          <div className='recipe-board-write-images-box'>
            {imageUrls.map((imageUrl, index) => 
              <div className='recipe-board-write-image-box'>
              <img className='recipe-board-write-image' src={imageUrl} />
                <div className='icon-button'>
                  <div className='tool-icon-box image-close' onClick={() => onImageCloseButtonClickHandler(index)}>
                    <div className='icon close-icon'></div>
                  </div>
                </div>  
              </div>
            )}
            

          </div>
        </div>
      </div>
    </div>
  );
}
