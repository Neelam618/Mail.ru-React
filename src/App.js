import React from 'react';
import './App.scss';
import Header from './components/Section-1/Header/Header';
import Mainlogo from './components/Section-1/Mainlogo/Mainlogo';
import Mainimage from './components/Section-1/Mainimage/Mainimage';
import DiagonalLineBg from './components/Section-2/DiagonalLineBg/DiagonalLineBg';


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
