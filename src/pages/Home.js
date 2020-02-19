import React, { useState } from 'react';
import SliderHome from '../components/home/SliderHome';
import MisFotos from '../components/home/MisFotos';
import MisServicios from '../components/home/MisServicios';
import NewsHome from '../components/home/NewsHome';
import Visor360 from '../components/home/Visor360';

const Home = () => {

    const [noticias, guardarnoticias] = useState([]); 

    async function conectarAPI(){
        const url = `https://www.marindelafuente.com.ar/wp-json/wp/v2/posts?per_page=3&_embed`;
        const respuesta = await fetch(url);
        const noticias = await respuesta.json();
        //console.log(noticias);
        guardarnoticias( noticias );
        //return noticias;
    }

    

conectarAPI();



    return ( 
        <div>

            <SliderHome />

            <div className="container">
                <h1>Jose Marin de la Fuente</h1>
                <h2>Bienvenidos</h2>
                <p>
                Mi Labor profesional se enfoca en el asesoramiento a Empresas, Pymes, Entidades de Gobierno y profesionales de distintas áreas a conseguir sus objetivos en materia de innovación tecnológica, informatización y concientización sobre tecnologías de la información y las comunicaciones.
                </p>
            </div>

            <Visor360 />

            <MisServicios />

            <NewsHome noticias={noticias} />

            <MisFotos />
            
        </div>
     );
}

export default Home;