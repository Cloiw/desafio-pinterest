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
          <img className="modal-img" src={this.props.url}/>
          <button onClick={()=>this.props.hideModal()}>close</button>
        </section>
      </div>
    );
    }

}

export default Modals;