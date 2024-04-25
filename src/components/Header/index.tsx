import React from 'react';
import RimacLogo from '../../assets/Logo.svg';
import PhoneSvg from '../../assets/Phone.svg';
import './Header.scss';

const Header: React.FC = () => {
    return (
        <div className="header-container">
            <img src={RimacLogo} className="logo" alt="Rimac logo" />
            <div className='header-information'>
                <h2>¡Compra por este medio!</h2>
                <div className="phone-container">
                    <img src={PhoneSvg} className="phone" alt="Phone logo" />
                    <p>01 411 6001</p>
                </div>
            </div>
        </div>
    );
}

export default Header;
