import React from 'react';
import './style.css';
import freedomImage from '../../../assets/images/freedom.png';

//          component: 게시물 상세 화면 컴포넌트          //
export default function FreeDomBoardList() {

  //          render: 게시물 상세 화면 컴포넌트 렌더링          //
  return (
    <div id='freedom-container'>
      <div
        className='freedom'
        style={{
          backgroundImage: `url(${freedomImage})`, // 템플릿 리터럴 사용
          width: "1003px",
          height: "300px",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          position: "relative",
          left: "3.2%"
        }}
      ></div>
    </div>
  );
}
