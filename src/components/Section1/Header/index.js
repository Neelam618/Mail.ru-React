import React from 'react';
import './Header.scss';
import TopLogo from './mail.ru.png'

function Header() {
    return (
        <header>
            <div className="container">
                <div className="topbar d-flex justify-content-between px-0 pt-3">
                    <div className="top-logo"><img src={TopLogo} alt="Top Logo" /></div>
                    <div className="top-content">ux <span className="line"></span> ui</div>
                </div>
            </div>
        </header>
    )
}

export default Header;
