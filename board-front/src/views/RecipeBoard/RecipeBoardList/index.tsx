import React, { useEffect, useState } from 'react';
import './style.css';
import Pagination from 'components/Pagination';
import BoardItem from 'components/BoardItem';
import { BoardListItem } from 'types/interface';
import { latestBoardListMock, top3BoardListMock } from 'mocks';


//          component: 레시피 리스트 게시판 화면 컴포넌트         //
export default function RecipeBoardList() {

  //          component: 게시물 리스트 게시판 상단 컴포넌트          //
  const RecipeBoardListTop = () => {

    //          state: 최신 게시물 리스트 상태(임시)          //
    const [currentBoardList, setCurrentBoardList] = useState<BoardListItem[]>([]);

    //          effect: 첫 마운트 시 실행될 함수          //
    useEffect (() =>{
      setCurrentBoardList(latestBoardListMock);
    }, []);

    //          render: 게시물 리스트 게시판 상단 컴포넌트 렌데링          //
    return (
      <div id = 'recipe-board-list-top-wrapper'>
        <div className = 'recipe-board-list-current-contents'>
          {currentBoardList.map(boardListItem => <BoardItem boardlistItem={boardListItem} />)}
        </div>
      </div>
    )
  }
  //          component: 게시물 리스트 게시판 하단 컴포넌트          //
  const RecipeBoardListBottom = () =>  {
    //          render: 게시물 리스트 게시판 상단 컴포넌트 렌데링          //
    return (
      <div id = 'recipe-board-list-bottom-wrapper'>
        <div className = 'recipe-board-list-bottom-pagination-box'>
          <Pagination />
        </div>
      </div>
    )
  }

  //          render: 레시피 리스트 게시판 화면 컴포넌트 렌더링          //

  return (
    <div id = 'recipe-board-list-wrapper'>
      <div className = 'recipe-board-list-container'>
        <RecipeBoardListTop />
        <RecipeBoardListBottom />
      </div>
    </div>
  )

}







