import React from 'react';
import './Mainimage.scss';
import mainImg from './spaceship.png';

function Mainimage() {
    return (
      <div className="main-img">
        <img src={mainImg} alt="Spaceship" />
      </div>
    )
  }

export default Mainimage;
