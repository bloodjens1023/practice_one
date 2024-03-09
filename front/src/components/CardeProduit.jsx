import * as React from 'react';

export default function CardeProduit({imagem, nom, description}){
  return (
      <div className="card">
          <img className="card-img-top" src={imagem} alt="Card image cap"></img>
          <h5 className="card-title">{nom}</h5>
          <p className="card-text">{description}</p>
      </div>
  )
}
