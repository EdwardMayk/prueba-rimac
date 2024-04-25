import LogoFooter from '../../assets/Logo-Footer.svg';
import './Footer.scss';

const Footer = () => {
    return (
        <div className='container-footer'>
            <img src={LogoFooter} className="logo-footer" alt="Rimac logo" />
            <div className='footer-information'>
                <p>© 2023 RIMAC Seguros y Reaseguros.</p>
            </div>
        </div>
    )
}

export default Footer
