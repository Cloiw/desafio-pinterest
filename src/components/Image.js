import React from 'react';
import './styles/Body.css';



class Image extends React.Component{ 

  
    render() {
    
      return (
          <>
          <img  src={this.props.url}/>
        </>
    );
  }
}

export default Image