import React from 'react';
import TitleWithCupbackground from '../TitleWithCupbackground';
import './Content.scss';


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

export default Content;
