import React from 'react';
import Header from './Header';
import Mainlogo from './Mainlogo';
import Mainimage from './Mainimage';
import './Section1.scss';

function Section1 () {
  return (
    <div class="header d-flex flex-column justify-content-between">
      <Header />
      <Mainlogo />
      <Mainimage />
    </div>
  );
}
  
export default Section1;
  
