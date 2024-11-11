import React from 'react';
import './App.css';
import BoardList from 'components/BoardList'; // 경로 확인
import { latestBoardListMock } from 'mocks';

function App() {
    return (
        <>
            <BoardList />
        </>
    );
}

export default App;