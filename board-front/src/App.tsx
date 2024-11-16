import React from 'react';
import './App.css';
import Banner from 'components/Banner';
import { Route, Routes } from 'react-router-dom';
import Main from 'views/Main';
import Authentication from 'views/Authentication';
import InputBox from 'components/InputBox'
import { latestBoardListMock } from 'mocks';
import BoardItem from 'components/BoardItem';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {latestBoardListMock.map((boardListItem, index) => (
        <BoardItem key={index} boardlistItem={boardListItem} />
      ))}
    </div>
  );
}

export default App;