import React from 'react';
import './App.css';
import BoardItem from 'components/BoardItem'; // 경로 확인
import { latestBoardListMock } from 'mocks';

function App() {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center' }} >
                {latestBoardListMock.map((boardListItem, index) => (
                    <BoardItem key={index} boardlistItem={boardListItem} />
                ))}
            </div>
        </>
    );
}

export default App;
