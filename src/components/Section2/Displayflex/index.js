import React from 'react';
import Content from '../Content';
import Sideimage from '../Sideimage';


function Displayflex() {
    return (
      <div className="main d-flex justify-content-around flex-column flex-xl-row">
        <Content />
        <Sideimage /> 
      </div>
    ) 
  }

export default Displayflex;
