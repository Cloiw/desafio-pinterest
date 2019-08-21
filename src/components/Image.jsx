import React from 'react';
import './styles/Body.css';
import dotsIcon from '../img/dots_icon.png';

const Image = (props) => (
  <div className="image-div">
    <img className="image-size" src={props.url} alt={props.url} />
    <div className="flex-dots">
      <img className="image-dots" src={dotsIcon} alt="More" />
    </div>
  </div>
);

export default Image;
