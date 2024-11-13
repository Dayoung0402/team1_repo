import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { AUTH_PATH, BOARD_DETAIL_PATH, BOARD_PATH, BOARD_UPDATE_PATH, BOARD_WRITE_PATH, MAIN_PATH, RECIPE_DETAIL_PATH, RECIPE_PATH, RECIPE_UPDATE_PATH, RECIPE_WRITE_PATH, SIGN_UP } from 'constant';
import { useCookies } from 'react-cookie';
import { useState } from 'react';
import { useBoardStore } from 'stores';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

//          component: 헤더 레이아웃          //
export default function Header() {

  //          state: path 상태          //
  const { pathname } = useLocation();

  //          state: cookie 상태           //
  const [cookies, setCookie] = useCookies();
  //          state: 로그인 상태          //
  const [isLogin, setLogin] = useState<boolean>(false);

  //          state: 인증 페이지 상태          //
  const [isAuthPage, setAuthPage] = useState<boolean>(false);
  //          state: 메인 페이지 상태          //
  const [isMainPage, setMainPage] = useState<boolean>(false);
  //          state: 회원가입 페이지 상태          //
  const [isSignUpPage, setSignUpPage] = useState<boolean>(false);
  //          state: 레시피 게시판 이지 상태          //
  const [isRecipeBoardPage, setRecipeBoardPage] = useState<boolean>(false);
  //          state: 레시피 게시판 게시물 상세 페이지 상태          //
  const [isRecipeBoardDetailPage, setRecipeBoardDetailPage] = useState<boolean>(false);
  //          state: 레시피 게시판 게시물 작성 페이지 상태          //
  const [isRecipeBoardWritePage, setRecipeBoardWritePage] = useState<boolean>(false); 
  //          state: 레시피 게시판 게시물 수정 페이지 상태          //
  const [isRecipeBoardUpdatePage, setRecipeBoardUpdatePage] = useState<boolean>(false);
  //          state: 자유 게시판 페이지 상태          //
  const [isBoardPage, setBoardPage] = useState<boolean>(false);
  //          state: 자유 게시판 게시물 상세 페이지 상태          //
  const [isBoardDetailPage, setBoardDetailPage] = useState<boolean>(false);
  //          state: 자유 게시판 게시물 작성 페이지 상태          //
  const [isBoardWritePage, setBoardWritePage] = useState<boolean>(false);
  //          state: 자유 게시판 게시물 수정 페이지 상태          //
  const [isBoardUpdatePage, setBoardUpdatePage] = useState<boolean>(false);
 

  //          function: 네비게이트 함수          //
  const navigate = useNavigate();  

  //          event handler: 로고 클릭 이벤트 처리 함수          //
  const onLogClickHandler = () => {
    navigate(MAIN_PATH());
  }

  //          event handler: 레시피 게시판 버튼 클릭 이벤트 처리 함수          //
  const onRecipeBoardButtonClickHandler = () => {
    navigate(RECIPE_PATH());
  }
  
  //          event handler: 자유 게시판 버튼 클릭 이벤트 처리 함수          //
  const onBoardButtonClickHandler = () => {
    navigate(BOARD_PATH());
  }

  //          component: 로그인, 회원가입 버튼 컴포넌트          //
  const AuthButton = () => {

    //          event handler: 로그인 버튼 클릭 이벤트 처리 함수          //
    const onSignInButtonClickHandler = () => {
      navigate(AUTH_PATH());
    }

    //          event handler: 회원가입 버튼 클릭 이벤트 처리 함수          //
    const onSignUpButtonClickHandler = () => {
      navigate(SIGN_UP());
    }

    if (isLogin) {
      return (
        <div className='header-top-box'>
          <div className='welcome'>
            <div className='icon-box'>
              <div className='logo-person-icon'></div>
            </div>
            <div className='trans-content'>{'환영합니다.'}</div>
          </div>
        </div>
      );
    }
    return (
      <div className='header-top-box'>
        <div className='sign-in'>
          <div className='icon-box'>
            <div className='logo-sign-in-icon'></div>
          </div>
          <div className='content' onClick={onSignInButtonClickHandler}>{'로그인'}</div>
        </div>
        <div className='sign-up'>
          <div className='icon-box'>
            <div className='logo-sign-up-icon'></div>  
          </div>
          <div className='content' onClick={onSignUpButtonClickHandler}>{'회원가입'}</div>
        </div>
      </div>
    );
  }

  //          component: 업로드 버튼 컴포넌트          //
  const UploadButton = () => {

    //          state: 게시물 상태          //
    const { title, content, boardImageFileList, resetBoard } = useBoardStore();

    //          event habdler: 업로드 버튼 클릭 이벤트 처리 함수          //
    const onUploadButtonClickHandler = () => {

    }

    //         render: 업로드 버튼 컴포넌트 렌더링          //
    // if (title && content)
    return <div className='upload-button' onClick={onUploadButtonClickHandler}>
      <div className='icon-box'>
        <div className='logo-upload-icon'></div>  
      </div>
      <div className='upload-content'>{'글 작성하기'}</div>
    </div>
  }

  //          render: 업로드 불가 버튼 컴포넌트 렌더링        //  
    /* return <div className='disable-upload-button'>
      <div className='icon-box'>
        <div className='logo-upload-icon'></div>  
      </div>
      <div className='upload-content'>{'글 작성하기'}</div>
    </div>
  }  */

  //          effect: path가 변경될 때마다 실행될 함수          //    
  useEffect(() => {
    setAuthPage(pathname.startsWith(AUTH_PATH()));
    setSignUpPage(pathname.startsWith(SIGN_UP()));
    setMainPage(pathname === MAIN_PATH());
    setBoardPage(pathname.startsWith(BOARD_PATH()));
    setBoardDetailPage(pathname.startsWith(BOARD_PATH() + '/' + BOARD_DETAIL_PATH('')));
    setBoardWritePage(pathname.startsWith(BOARD_PATH() + '/' + BOARD_WRITE_PATH()));
    setBoardUpdatePage(pathname.startsWith(BOARD_PATH() + '/' + BOARD_UPDATE_PATH('')));
    setRecipeBoardPage(pathname.startsWith(RECIPE_PATH()));
    setRecipeBoardDetailPage(pathname.startsWith(RECIPE_PATH() + '/' + RECIPE_DETAIL_PATH('')));
    setRecipeBoardWritePage(pathname.startsWith(RECIPE_PATH() + '/' + RECIPE_WRITE_PATH()));
    setRecipeBoardUpdatePage(pathname.startsWith(RECIPE_PATH() + '/' + RECIPE_UPDATE_PATH('')));
  }, [pathname]);
  

  //          render: 헤더 레이아웃 렌더링          //  
  return (
    <div id='header'>
      <div className='header-container'>
            
          {(!isAuthPage || !isSecureContext) && <AuthButton />}  {/* 로그인 상태에 따라 조건부로 표시 */}
          {(isBoardDetailPage || isBoardPage || isRecipeBoardPage || isRecipeBoardDetailPage ) && <UploadButton />}
        <div className='header-middle-box'>
          <div className='title' onClick={onLogClickHandler}>{'흙수저 레시피'}</div>
          <div className='menu'>
            <div className='recipe-board' onClick={onRecipeBoardButtonClickHandler}>{'레시피 게시판'}</div>
            <div className='short'></div>
            <div className='free-board' onClick={onBoardButtonClickHandler}>{'자유 게시판'}</div>
          </div>
        </div>
        <hr className='header-line'></hr>
      </div>
    </div>
  );
}
