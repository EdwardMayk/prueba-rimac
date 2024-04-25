import { useState } from 'react';
import ImageLanding from '../../assets/ImageLanding.png';
import './Register.scss';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [documentType, setDocumentType] = useState('DNI');
    const navigate = useNavigate();
    const handleCotizarClick = () => {
        navigate('/plans');
    }

    return (
        <>
            <div className='principal-container'>
                <div className="image-container">
                    <img src={ImageLanding} className="image-major" alt="Rimac Landing" />
                </div>
                <div className="register-container">
                    <div className="title-container">
                        <button className='submenu-safe'>Seguro Salud Flexible</button>
                        <h2>Creado para ti y tu familia</h2>
                    </div>
                    <p>Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.</p>
                    <div className="register-form">
                        <div className="document-container">
                            <select
                                value={documentType}
                                onChange={(e) => setDocumentType(e.target.value)}
                                className='document-type'
                            >
                                <option value="DNI">DNI</option>
                                <option value="RUC">RUC</option>
                            </select>
                            <input
                                type="text"
                                placeholder={documentType === 'DNI' ? 'Nro. de Documento' : 'Número de RUC'}
                                className='input-document'
                            />
                        </div>

                        <div className="phone-container">
                            <input type="text" placeholder="Celular" className='phone-type' />
                        </div>
                        <div className="checkbox-container">
                            <input type="checkbox" id="policy" name="policy" value="policy" />
                            <label htmlFor="policy">Acepto la Política de Privacidad</label>
                            <input type="checkbox" id="communications" name="communications" value="communications" />
                            <label htmlFor="communications">Acepto la Política de Comunicaciones Comerciales</label>
                        </div>
                        <p className='paragraph-terms'>Aplican Términos y Condiciones.</p>

                        <button onClick={handleCotizarClick}>Cotiza Aquí</button>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    );
}

export default Register;

