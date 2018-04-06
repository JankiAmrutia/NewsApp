import React from 'react';
import './Card.css';

// Stateless Component which displays the data as a tile
const Card = (props) =>(
    <div className="tile">
      <div className="tile-img">
        <span className="helper"></span>
        <img src={props.image} alt='Loading..'/>
      </div>
      <div className="tile-content">
        <h3 className="tile-title">{props.author}</h3>
        <p className="tile-price">{props.title}</p>
        <p className="tile-title-content">{props.content.plain}</p>
        <a className="title-link" target="_blank" href={props.link}> Read More </a>
      </div>
    </div>
);

export default Card;
