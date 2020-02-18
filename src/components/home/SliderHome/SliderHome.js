import React from 'react';
import slide01 from '../../../assets/SliderHome/slider01.jpg';
import slide02 from '../../../assets/SliderHome/slider02.jpg';
import slide03 from '../../../assets/SliderHome/slider03.jpg';


const SliderHome = () => {
    return ( 
        
            
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">

                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img className="d-block w-100" src={slide01} alt="First slide" />
                    </div>

                    <div className="carousel-item">
                    <img className="d-block w-100" src={slide02} alt="Second slide" />
                    </div>

                    <div className="carousel-item">
                    <img className="d-block w-100" src={slide03} alt="Third slide" />
                    </div>  
                </div>

                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>

                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>

                </div>

     );
}
 
export default SliderHome;