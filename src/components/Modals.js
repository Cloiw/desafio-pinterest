import React from 'react';

import closeIcon from '../img/close_icon.png'
import backIcon from '../img/back_icon.png'
import './styles/Modal.css';
import Modal from 'react-bootstrap/Modal'



class Modals extends React.Component{ 
  
   
  render() {
    return (
      
      <div className={this.props.show ? "modal-display-block" : "display-none"}>
        <section className="modal-main">
          <div className="scroll">
            <div className="left-col">
              <div className="left-icon-row">
                <button onClick={()=>this.props.hideModal()}>
                  <img className="back-icon" src={backIcon} />
                </button>
              </div>
            </div>
            <div className="center-col">
                <div className="image">
                  <div className="image-col">
                    <img className="modal-img" src={this.props.url}/>
                  </div>
                  <div className="info-col">
                    <p>sadsa</p>
                  </div>
                </div>
            </div>
            <div className="right-col">
              <div className="right-icon-row">
                <button onClick={()=>this.props.hideModal()}>
                  <img className="close-icon" src={closeIcon} />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Modals;