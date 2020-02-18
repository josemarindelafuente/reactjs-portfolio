import React from 'react';
import { Pannellum } from "pannellum-react";
import myImage from '../../../assets/360-01.jpg';

const Visor360 = () => {
    return ( 
        <div>
                        <Pannellum 
                        width="100%"
                        height="400px"
                        image={myImage}
                        pitch={10}
                        hfov={130}
                        autoRotate= {-10}
                        mouseZoom={false}
                        autoLoad
                        />
        </div>
     );
}
 
export default Visor360;