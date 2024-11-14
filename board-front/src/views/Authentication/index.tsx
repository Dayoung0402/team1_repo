import React from 'react';
import './style.css';
import {useState} from 'react';

//          component: 인증 화면 컴포넌트          //
export default function Authentication() {

  //          state: 화면 상태          //
  const [view, setView] = useState<'sign-in' | 'sign-up'>('sign-in');


  //          component: sign in card 컴포넌트           //
  const SignInCard = () => {

    //          render: sign in card 컴포넌트 렌더링          //
    return (
      <div className='auth-card'>

      </div>
    );
  };


      //          component: sign up card 컴포넌트           //
  const SignUpCard = () => {

    //          render: sign up card 컴포넌트 렌더링          //
    return (
      <div className='auth-card'>

      </div>
    );
  };

  //          render: 인증 화면 컴포넌트 렌더링          //
  return (
    <div id='auth-wrapper'>
      <div className='left'>
        <p className='title'>흙수저 레시피</p>
        <p className='description'>우리가 가장 중요하게 생각하는 점은 레시피에 대한 이해도입니다 그런 면에서 이 흙수저 레시피는 독자들이 이해하기 쉽게 쓰여진 아주 훌륭한 레시피입니다 </p>
      </div>
      <div className='right'>

      </div>
    </div>
  );
}
