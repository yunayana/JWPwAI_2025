import React from 'react';
import ToggleDetails from './ToggleDetails';
import ScoreDisplay from './ScoreDisplay';
import TaskList from './TaskList';
import UserList from './UserList';
import TimerCounter from './TimerCounter';
import Task3 from './Task3';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1>Lab 5 React</h1>
      <ToggleDetails />
      <h2>Wyniki</h2>
      <ScoreDisplay score={30} />
      <ScoreDisplay score={60} />
      <ScoreDisplay score={90} />
      <h2>Lista zadań</h2>
      <TaskList />
      <h2>Lista użytkowników</h2>
      <UserList />
      <h2>Licznik czasu</h2>
      <TimerCounter />
      <Task3 />
    </div>
  );
}

export default App;
