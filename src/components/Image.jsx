import React from 'react';
import './styles/Body.css';

const Image = (props) => (
  <div className="image-div">
    <img className="image-size" src={props.url} alt={props.url} />
    <span className="image-span">...</span>
  </div>
);

export default Image;
