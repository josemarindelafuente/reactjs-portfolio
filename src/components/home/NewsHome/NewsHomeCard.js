import React from 'react';
import './NewsHome.scss';

const NewsHomeCard = ({noticia}) => {
    return ( 
<div className="col-12 col-md-4">
    <div className="card">
      <img src={noticia._embedded['wp:featuredmedia']['0'].source_url} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{noticia.title.rendered}</h5>
        <p className="card-text">{noticia.excerpt.rendered}</p>
        <a href={noticia.link} className="btn btn-primary">Leer esta noticia</a>
      </div>
    </div>
</div>
);
}
 
export default NewsHomeCard;