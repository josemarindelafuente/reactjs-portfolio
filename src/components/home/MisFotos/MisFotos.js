import React from 'react';
import './MisFotos.scss';
import mdf01 from '../../../assets/MisFotos/mdf01.jpg';
import mdf02 from '../../../assets/MisFotos/mdf02.jpg';
import mdf03 from '../../../assets/MisFotos/mdf03.jpg';
// SOURCE https://freefrontend.com/css-cards/



const MisFotos = () => {
    return ( 

<div className="container">

        <div className="row">
                <div className="col-12 col-md-4 tarjeta">
                        <div className="fotocard">                
                            <div className="imgBx">
                                <img src={mdf01} alt="images" />
                            </div>
                
                            <div className="details">
                            <h2>José Marin de la Fuente</h2>
                            </div>
                        </div>
                </div>

            <div className="col-12 col-md-4 tarjeta">
                        <div className="fotocard">                
                            <div className="imgBx">
                                <img src={mdf02} alt="images" />
                            </div>
                
                            <div className="details">
                            <h2>José Marin de la Fuente</h2>
                            </div>
                        </div>
                
            </div>

            <div className="col-12 col-md-4 tarjeta">
                        <div className="fotocard">                
                            <div className="imgBx">
                                <img src={mdf03} alt="images" />
                            </div>
                
                            <div className="details">
                            <h2>José Marin de la Fuente</h2>
                            </div>
                        </div>
            </div>
            
        </div>
</div>
     );
}
 
export default MisFotos;