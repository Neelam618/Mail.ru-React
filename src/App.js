import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Mainlogo from './components/Mainlogo/Mainlogo';
import Mainimage from './components/Mainimage/Mainimage';
import DiagonalLineBg from './components/DiagonalLineBg/DiagonalLineBg';


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
