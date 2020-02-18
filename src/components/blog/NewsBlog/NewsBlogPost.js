import React from 'react';

const NewsBlogPost = ({noticias}) => {
    return ( 

<div>


    {
    noticias.map( (noticia)=>{
        return(
                <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                    <img src={noticia._embedded['wp:featuredmedia']['0'].source_url} class="card-img" alt={noticia.title.rendered} />
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{noticia.title.rendered}</h5>
                        <p className="card-text">{noticia.excerpt.rendered}</p>
                        <a href={noticia.link} className="btn btn-primary">Leer esta noticia</a>
                    </div>
                    </div>
                </div>
                </div>
        )})
    }

                


</div> 

);

}
 
export default NewsBlogPost;