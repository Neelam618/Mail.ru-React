import React from 'react';
import './App.scss';
import Header from './components/Header';
import Mainlogo from './components/Mainlogo';
import Mainimage from './components/Mainimage';
import DiagonalLineBg from './components/DiagonalLineBg';


function App() {
  return (
    <div>
      <Header />
      <Mainlogo />
      <Mainimage />
      <DiagonalLineBg />
    </div>
  );
}

export default App;
