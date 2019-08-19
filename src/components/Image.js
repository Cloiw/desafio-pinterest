import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './styles/Body.css';



class Image extends React.Component{ 

  
    render() {
    
      return (
          <>
               <Link to={{
                pathname: "/pin/"+this.props.id,
                state: { tags: this.props.tags, url: this.props.url , ola:"olaa" }
                }}>
          <img  className="image-size" src={this.props.url} alt={this.props.url}/>
          </Link>
        </>
    );
  }
}

export default Image