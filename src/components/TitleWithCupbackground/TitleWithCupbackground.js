import React from 'react';
import './TitleWithCupbackground.scss';

function TitleWithCupbackground() {
    return (
      <div className="title">
        <h1>Cups from <span className="mail-ru">mail.ru</span></h1>
        <img src="img/cup.svg" alt="" />
        <p className="subtitle">IT - specialists championships platform</p>
      </div>
    )
  }

export default TitleWithCupbackground;
