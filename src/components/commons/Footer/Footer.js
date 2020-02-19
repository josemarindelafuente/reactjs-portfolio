import React from 'react';
import './Footer.scss';
import LogoFooter from '../../../assets/logo-footer.png';

const Footer = () => {
    return ( 
        <div className='contenedor_footer'>
            
            <div className="container">
                <div className="row">

                    <div className="col-12 col-md-6 footer_col_iz">
                        <img src={LogoFooter} width="250" height="44" alt="Marin de la fuente"/>
                    </div>

                    <div className="col-12 col-md-6 footer_col_de">
                    <p>Visita mi sitio Web <a href="https://www.marindelafuente.com.ar" target="_blank rel="noopener noreferrer >www.marindelafuente.comar</a>
                    </p>
                    </div>

                    
                </div>               
            </div>

        </div>
     );
}
 
export default Footer;