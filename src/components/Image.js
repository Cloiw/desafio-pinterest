import React from 'react';
import './styles/Body.css';



class Image extends React.Component{ 

  
    render() {
    
      return (
          <>
          <li>
          <img  className="image-size" src={this.props.url}/>
          </li>
        </>
    );
  }
}

export default Image