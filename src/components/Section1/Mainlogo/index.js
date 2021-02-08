import React from 'react';
import './Mainlogo.scss';
import MainLogo from './all-cups-big.png';

function Mainlogo() {
  return (
    <div className="container">
      <div className="main-logo d-flex justify-content-start">
        <img src={MainLogo} alt="Main Logo" />
      </div>
    </div>
  )
}

export default Mainlogo;
