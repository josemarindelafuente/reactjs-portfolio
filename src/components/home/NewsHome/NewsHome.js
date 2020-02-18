import React from 'react';
import './NewsHome.scss';
import NewsHomeCard from './NewsHomeCard';

const NewsHome = ({noticias}) => {

    return ( 
    
<div className="contenedor_NewsHome">    

        <div className="container">

        <div className="titulo_newsHome">Ultimas Noticias</div>

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