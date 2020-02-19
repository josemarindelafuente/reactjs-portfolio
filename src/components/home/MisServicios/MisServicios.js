import React from 'react';
import './MisServicios.scss';

import iconoSeo from '../../../assets/iconos-servicios-seo.png';
import iconoSocial from '../../../assets/iconos-servicios-social.png';
import iconoDisWeb from '../../../assets/iconos-servicios-disweb.png';

import iconoGoogle from '../../../assets/iconos-servicios-google.png';
import iconoDisAds from '../../../assets/iconos-servicios-ads.png';
import iconoMKD from '../../../assets/iconos-servicios-mkd.png';



const MisServicios = () => {
    return ( 

<div className="contenedor_servicios">

    <div className="container">

        <div className="titulo_misservicios">Mis Servicios</div>

     





        <div className="row">

            <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="image-flip" onTouchStart="this.classList.toggle('hover');">
                    <div className="mainflip">
                        <div className="frontside">
                            <div className="card">
                                <div className="card-body text-center">
                                    <p><img className="img-fluid" src={iconoSeo} alt="Jose Marin de la Fuente" /></p>
                                    <h4 className="card-title">SEO</h4>
                                    <p className="card-text">SEO y posicionamiento Web.</p>
                                    <a href="#" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="backside">
                            <div className="card">
                                <div className="card-body text-center mt-4">
                                    <h4 className="card-title">SEO y posicionamiento Web</h4>
                                    <p className="card-text">This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="image-flip" onTouchStart="this.classList.toggle('hover');">
                    <div className="mainflip">
                        <div className="frontside">
                            <div className="card">
                                <div className="card-body text-center">
                                    <p><img className=" img-fluid" src={iconoSocial} alt="Jose Marin de la Fuente" /></p>
                                    <h4 className="card-title">Social Media</h4>
                                    <p className="card-text">Social Media y Community Management.</p>
                                    <a href="#" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="backside">
                            <div className="card">
                                <div className="card-body text-center mt-4">
                                    <h4 className="card-title">Social Media</h4>
                                    <p className="card-text">This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.</p>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="image-flip" onTouchStart="this.classList.toggle('hover');">
                    <div className="mainflip">
                        <div className="frontside">
                            <div className="card">
                                <div className="card-body text-center">
                                    <p><img className=" img-fluid" src={iconoDisWeb} alt="Jose Marin de la Fuente" /></p>
                                    <h4 className="card-title">Diseño Web y UX</h4>
                                    <p className="card-text">Diseño Web y Diseño de la Experiencia del Usuario.</p>
                                    <a href="#" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="backside">
                            <div className="card">
                                <div className="card-body text-center mt-4">
                                    <h4 className="card-title">Diseño Web y UX</h4>
                                    <p className="card-text">This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="image-flip" onTouchStart="this.classList.toggle('hover');">
                    <div className="mainflip">
                        <div className="frontside">
                            <div className="card">
                                <div className="card-body text-center">
                                    <p><img className=" img-fluid" src={iconoGoogle} alt="Jose Marin de la Fuente" /></p>
                                    <h4 className="card-title">GSV Trusted Photographer</h4>
                                    <p className="card-text">Google Street View Trusted Photographer.</p>
                                    <a href="#" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="backside">
                            <div className="card">
                                <div className="card-body text-center mt-4">
                                    <h4 className="card-title">GSV Trusted Photographer</h4>
                                    <p className="card-text">This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="image-flip" onTouchStart="this.classList.toggle('hover');">
                    <div className="mainflip">
                        <div className="frontside">
                            <div className="card">
                                <div className="card-body text-center">
                                    <p><img className=" img-fluid" src={iconoDisAds} alt="Jose Marin de la Fuente" /></p>
                                    <h4 className="card-title">Search Engine Marketing</h4>
                                    <p className="card-text">Google y Facebook Ad.</p>
                                    <a href="#" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="backside">
                            <div className="card">
                                <div className="card-body text-center mt-4">
                                    <h4 className="card-title">Search Engine Marketing</h4>
                                    <p className="card-text">This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="image-flip" onTouchStart="this.classList.toggle('hover');">
                    <div className="mainflip">
                        <div className="frontside">
                            <div className="card">
                                <div className="card-body text-center">
                                    <p><img className=" img-fluid" src={iconoMKD} alt="Jose Marin de la Fuente" /></p>
                                    <h4 className="card-title">Marketing Digital</h4>
                                    <p className="card-text">This is basic card with image on top, title, description and button.</p>
                                    <a href="#" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="backside">
                            <div className="card">
                                <div className="card-body text-center mt-4">
                                    <h4 className="card-title">Marketing Digital</h4>
                                    <p className="card-text">This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>








    </div>

            

    
</div> 
);
}
 
export default MisServicios;