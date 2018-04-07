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
        <h2 className="tile-price">{props.title}</h2>
        <p className="tile-title-content">{props.content.plain}</p>
        <h3 className="tile-title">Author:{props.author}</h3>
       <div className="link"> <a className="title-link" target="_blank" href={props.link}> Continue Reading </a></div>
      </div>
    </div>
);

export default Card;
