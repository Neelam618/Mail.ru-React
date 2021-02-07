import React from 'react';
import './App.scss';

function Header() {
  return (
    <div className="container">
      <div className="topbar d-flex justify-content-between px-0 pt-3">
        <div className="top-logo"><img src="img/mail.ru.png" alt=""/></div>
        <div className="top-content">ux <span className="line"></span> ui</div>
      </div>
      <div className="main-logo d-flex justify-content-start">
        <img src="img/all-cups-big.png" alt="" />
      </div>
    </div>
  )
}

function App() {
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
