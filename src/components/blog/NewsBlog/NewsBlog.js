import React, {useState} from 'react';
import './NewsBlog.scss';
import NewsBlogPost from './NewsBlogPost';

const NewsBlog = () => {

    const [noticias, guardarnoticias] = useState([]); 

    async function conectarAPI(){
        const url = `https://www.marindelafuente.com.ar/wp-json/wp/v2/posts?per_page=8&_embed`;
        const respuesta = await fetch(url);
        const noticias = await respuesta.json();
        //console.log(noticias);
        guardarnoticias( noticias );
        //return noticias;
    }

conectarAPI();

return ( 
<div> 
<p className="p_aclaracion">Esta sección de noticias se carga automáticamente usando las APIS publicadas en el sitio www.marindelafuente.com.ar</p>
    <NewsBlogPost noticias={noticias} />
</div> );

}
 
export default NewsBlog;