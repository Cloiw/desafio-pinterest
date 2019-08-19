import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import closeIcon from '../img/close_icon.png'
import backIcon from '../img/back_icon.png'
import './styles/Modal.css';



class Modal extends React.Component{ 
  componentDidMount(){
    window.scrollTo(0, 0);
  }

  
    render() {
    
      return (
          <>
          {console.log(this.props.location)}
          <div className="modal-content">
            <div className="left-col">
            <div className="left-icon-row">
                <Link to={{pathname: "/",state: {scroll: this.props.location.scrollPosition}}}>
                    <img alt="Volver" className="back-icon" src={backIcon} />
                </Link>
              </div>
            </div>
            <div className="center-col">
              <div className="image">
                <div className="image-col">
                  <img className="modal-img" src={this.props.location.state.url} alt={this.props.location.state.url}/>
                </div>
                <div className="info-col">
                  <p>{this.props.location.state.tags}</p>
                </div>
              </div>
            </div>
            <div className="right-col">
              <div className="right-icon-row">
                <Link to="/">
                    <img alt="Cerrar" className="close-icon" src={closeIcon} />
                </Link>
              </div>
            </div>
          </div>
       
        </>
    );
  }
}

export default Modal;