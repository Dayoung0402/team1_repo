import React from 'react';
import './App.css';
//import Main from 'views/Main'; // Main 컴포넌트를 import
import { latestBoardListMock } from 'mocks';
import BoardItem from 'components/BoardItem';

function App() {
    return (
        <>
            {latestBoardListMock.map((boardListItem, index) => (
                <BoardItem key={index} boardList={boardListItem} />
            ))}
        </>
    );
}

export default App; 
