import React from 'react';
import { Link } from "react-router-dom";

import './styles/Body.css';



class Image extends React.Component{ 

  
    render() {
    
      return (
          <>
          <div class="image-div">
          <Link to={{pathname: "/pin/"+this.props.id,state: { tags: this.props.tags, url: this.props.url, pageUrl: this.props.pageUrl }
            }}>
            <img  className="image-size" src={this.props.url} alt={this.props.url}/>
          </Link>
          <span class="image-span">...</span>
          </div>
        </>
    );
  }
}

export default Image