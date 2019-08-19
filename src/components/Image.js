import React from 'react';
import { Link } from "react-router-dom";

import './styles/Body.css';



class Image extends React.Component{ 

  
    render() {
    
      return (
          <>
          <div className="image-div">
          <Link to={{pathname: "/pin/"+this.props.id,state: { tags: this.props.tags, url: this.props.url, pageUrl: this.props.pageUrl, scrollPosition:this.props.scroll }
            }}>
            <img  className="image-size" src={this.props.url} alt={this.props.url}/>
          </Link>
          <span className="image-span">...</span>
          </div>
        </>
    );
  }
}

export default Image