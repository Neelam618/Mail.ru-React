import React from 'react';
import './App.scss';
import Header from './components/Header'

function Mainlogo() {
  return (
    <header>
      <div className="container">
        <div className="main-logo d-flex justify-content-start">
          <img src="img/all-cups-big.png" alt="" />
        </div>
      </div>
    </header>
  )
}

function Mainimage() {
  return (
    <div className="main-img">
      <img src="img/spaceship.png" alt="" />
    </div>
  )
}
function TitleWithCupbackground() {
  return (
    <div className="title">
      <h1>Cups from <span className="mail-ru">mail.ru</span></h1>
      <img src="img/cup.svg" alt="" />
      <p className="subtitle">IT - specialists championships platform</p>
    </div>
  )
}
function DiagonalLineBg() {
  return (
    <div className="main-container">
      <Displayflex />
      <Footer />
    </div>
  )
}
function Content() {
  return (
    <div className="content w-auto text-start">
      <TitleWithCupbackground/>
      <div className="para">
        <p>The mail.ru platform, where specialist and experts of the information technology industry develop and exchange experience, solving non-trivial and interesting problems in the largest championships.</p>
        <p>Our task was to design a unified championship ecosystem and develop an adaptive service design in line with modern trends, understandable to a progressive it audience. </p>
      </div>
    </div>
  )
}
function Sideimage() {
  return (
    <div className="side-image w-auto text-end">
      <img src="img/astronaut.png" alt="" />
    </div>
  )
}
function Displayflex() {
  return (
    <div className="main d-flex justify-content-around flex-column flex-xl-row">
      <Content />
      <Sideimage /> 
    </div>
  ) 
}
function FootertxtRight() {
  return (
    <div>ux / ui</div>
  )
}
function FootertxtLeft() {
  return (
    <div>zen.design</div>
  )
}
function Footer() {
  return (
    <div className="container">
      <div className="d-flex justify-content-between footer px-0 p-5">
        <FootertxtRight />
        <FootertxtLeft />
      </div>
    </div>
  )
}
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
