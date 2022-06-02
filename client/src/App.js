import './App.css';
import React from 'react';
import { Header } from './components/Header';
import { Logger } from './components/Logger';
import { Counter } from './components/Counter';
import { Library } from './components/Library';

function App() {
  return (
    <div className='body-container'>
      <Header />
      <div className='page-container'>
        <Logger />  
        <Library />
      </div>
    </div>
  );
}

export default App;
