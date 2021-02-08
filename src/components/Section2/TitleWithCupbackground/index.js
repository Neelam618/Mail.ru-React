import React from 'react';
import './TitleWithCupbackground.scss';
import CupBg from './cup.svg'

function TitleWithCupbackground() {
    return (
      <div className="title">
        <h1>Cups from <span className="mail-ru">mail.ru</span></h1>
        <img src={CupBg} alt="Cup background" />
        <p className="subtitle">IT - specialists championships platform</p>
      </div>
    )
  }

export default TitleWithCupbackground;