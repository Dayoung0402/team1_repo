import React from 'react';
import './App.css';
import Banner from 'components/Banner';
import { Route, Routes } from 'react-router-dom';
import Main from 'views/Main';
import Authentication from 'views/Authentication';
import Search from 'views/Search';
import BoardDetail from 'views/Board/Detail';
import BoardWrite from 'views/Board/Write';
import BoardUpdate from 'views/Board/Update';
import Container from 'layouts/Container';
import SignUp from 'views/SignUp';
import RecipeBoardList from 'views/RecipeBoard/RecipeBoardList';
import RecipeBoardDetail from 'views/RecipeBoard/Detail';
import RecipeBoardUpdate from 'views/RecipeBoard/Update';
import RecipeBoardWrite from 'views/RecipeBoard/Write';
import { AUTH_PATH, BOARD_DETAIL_PATH, BOARD_PATH, BOARD_UPDATE_PATH, BOARD_WRITE_PATH, MAIN_PATH, RECIPE_DETAIL_PATH, RECIPE_PATH, RECIPE_UPDATE_PATH, RECIPE_WRITE_PATH, SEARCH_PATH, SIGN_UP } from 'constant';



//          component: Application 컴포넌트          //
function App() {

  //          render: Application 렌더링          //
  // desciption: 메인 화면 : '/' - Main //
  // desciption: 로그인 + 회원가입 화면 : '/auth' - Authentication //
  // desciption: 검색 화면 : '/search/:searchWord' - Search //
  // desciption: 유저 페이지 : '/user/:userEmail' - User //
  // desciption: 게시물 상세보기 : '/board/detail/:boardNumber' - BoardDetail //
  // desciption: 게시물 작성하기 : '/board/write' - BoardWrite //
  // desciption: 게시물 수정하기 : '/board/update/:boardNumber' - BoardUpdate //

  return (
    <Routes>

      {/* 공통의 레이아웃 지정 */}
      <Route element={<Container />}>
        {/* 얘는 전환되는 주소인듯 */}
        <Route path={MAIN_PATH()} element={<Main />}/>
        <Route path={AUTH_PATH()} element={<Authentication />}/>
        <Route path={SIGN_UP()} element={<SignUp />}/> 
        <Route path={SEARCH_PATH(':searchWord')} element={<Search />}/>

        <Route path={BOARD_PATH()}>
          <Route path={BOARD_WRITE_PATH()} element={<BoardWrite />}/>
          <Route path={BOARD_DETAIL_PATH(':boardNumber')} element={<BoardDetail />}/>
          <Route path={BOARD_UPDATE_PATH(':boardNumber')} element={<BoardUpdate />}/>
        </Route>

        <Route path={RECIPE_PATH()} element={<RecipeBoardList />}/> {/*여기 수정*/}
        <Route path={RECIPE_WRITE_PATH()} element={<RecipeBoardWrite />}/>
        <Route path={RECIPE_DETAIL_PATH(':boardNumber')} element={<RecipeBoardDetail />}/>
        <Route path={RECIPE_UPDATE_PATH(':boardNumber')} element={<RecipeBoardUpdate />}/>


        {/* 잘못된 주소를 입력 했을 때  404 Not Found가 뜨게 함 */}
        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Route>

    </Routes>
  );
}

export default App;
