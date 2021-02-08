import React from 'react';
import FootertxtRight from '../FootertxtRight/FootertxtRight';
import FootertxtLeft from '../FootertxtLeft/FootertxtLeft';
import './Footer.scss'

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

export default Footer;