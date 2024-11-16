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
          <div className='auth-card-title-box'>
            <div className='auth-card-title'>{'로그인'}</div>
          </div>
          {/*<InputBox label='이메일 주소' type='text' placeholder='이메일을 입력해주세요' error={} value={} setValue={} onKeyDown={}/>
          <InputBox label='비밀번호' type='password' placeholder='비밀번호를 입력해주세요' error={} value={} setValue={} icon={} onButtonClick={} onKeyDown={}/> */}
          <div className='auth-card-title-bottom'>
            <div className='missing-password'></div>
            <div className='auth-login-button'>{'로그인'}</div>
          </div>
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
      {view === 'sign-in' && <SignInCard />}
      {view === 'sign-up' && <SignUpCard />}
    </div>
  );
}
