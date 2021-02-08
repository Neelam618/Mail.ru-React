import React from 'react';
import Content from '../Content/Content';
import Sideimage from '../Sideimage/Sideimage';


function Displayflex() {
    return (
      <div className="main d-flex justify-content-around flex-column flex-xl-row">
        <Content />
        <Sideimage /> 
      </div>
    ) 
  }

export default Displayflex;
