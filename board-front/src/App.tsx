import React from 'react';
import './App.css';
import Main from 'views/Main'; // Main 컴포넌트를 import
import Authentication from 'views/Authentication';
import InputBox from 'components/InputBox'

<<<<<<< HEAD

function App() {
    return (
        <InputBox />
    );
=======
function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {latestBoardListMock.map((boardListItem, index) => (
        <BoardItem key={index} boardlistItem={boardListItem} />
      ))}
    </div>
  );
>>>>>>> e218f8a (save)
}

export default App;