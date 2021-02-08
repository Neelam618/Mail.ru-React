import React from 'react';
import './Sideimage.scss';
import SideImage from './astronaut.png'

function Sideimage() {
    return (
      <div className="side-image w-auto text-end">
        <img src={SideImage} alt="Astronaut" />
      </div>
    )
  }

export default Sideimage;
