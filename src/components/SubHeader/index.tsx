import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header';
import './SubHeader.scss';

const SubHeader: React.FC = () => {
    const location = useLocation();
    const [currentScreen, setCurrentScreen] = useState<number>(1);

    useEffect(() => {
        setCurrentScreen(getCurrentScreen(location.pathname));
        console.log('setCurrentScreen', currentScreen)
    }, [location.pathname]);

    function getCurrentScreen(pathname: string): number {
        if (pathname === '/plans') {
            console.log('pathname', pathname)
            return 1;
        } else if (pathname === '/resumen') {
            console.log('pathname', pathname)
            return 2;
        }
        return 1;
    }

    return (
        <>
            <Header />
            <div className='container-subheader'>
                <div className={`item ${currentScreen === 1 ? 'purple-text' : ''}`}>
                    <span className='circle'>1</span> Planes y coberturas
                </div>
                <div className={`item ${currentScreen !== 1 ? 'gray-text' : ''}`}>
                    <span className='circle'>2</span> Resumen
                </div>
            </div>
        </>
    );
};

export default SubHeader;
