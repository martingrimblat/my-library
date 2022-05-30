import './App.css';
import React from 'react';
import { Header } from './components/Header';
import { Logger } from './components/Logger';
import { Counter } from './components/Counter';
import { RecentAdded } from './components/RecentAdded';

function App() {
  return (
    <div>
      <Header />
      <Logger />
      <Counter />
      <RecentAdded />
    </div>
  );
}

export default App;
