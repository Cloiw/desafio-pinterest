import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './styles/Body.css';



class Modal extends React.Component{ 

  
    render() {
    
      return (
          <>
            <div>
          {console.log(this.props.location.state.url)}
          <img src={this.props.location.state.url}/>
          <Link to="/">BACK</Link>
          <p> modal</p>
          </div>
        </>
    );
  }
}

export default Modal;