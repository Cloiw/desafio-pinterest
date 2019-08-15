import React from 'react';
import './styles/Body.css';



class Image extends React.Component{ 

  
    render() {
    
      return (
          <>
          
          <img  className="image-size" src={this.props.url}/>
          
        </>
    );
  }
}

export default Image