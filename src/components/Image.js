import React from 'react';
import './styles/Body.css';



class Image extends React.Component{ 

  
    render() {
    
      return (
          <>
          <div className="image-div">
            <img  className="image-size" src={this.props.url} alt={this.props.url}/>
          <span className="image-span">...</span>
          </div>
        </>
    );
  }
}

export default Image