import React from 'react';
import './NewsHome.scss';
import NewsHomeCard from './NewsHomeCard';

const NewsHome = ({noticias}) => {

    return ( 
    
<div className="contenedor_NewsHome">    

        <div className="container">

        <div className="titulo_newsHome">Ultimas Noticias</div>

        <p className="p_aclaracion">Esta sección de noticias se carga automáticamente usando las APIS publicadas en el sitio www.marindelafuente.com.ar</p>

        <div className="row">
                {
                    noticias.map( noticia => (
                        <NewsHomeCard
                        key={noticia.date} 
                        noticia={noticia}                
                        />
                        ))
                }
        </div>
        
        </div>

</div>
  
    );
}
 
export default NewsHome;