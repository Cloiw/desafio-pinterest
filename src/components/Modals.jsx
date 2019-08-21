import React from 'react';
import closeIcon from '../img/close_icon.png';
import backIcon from '../img/back_icon.png';
import './styles/Modal.css';

const Modals = (props) => (
  <div className={props.show ? 'modal-display-block' : 'display-none'}>
    <section className="modal-main">
      <div className="scroll">
        <div className="left-col">
          <div className="left-icon-row">
            <button type="button" onClick={() => props.hideModal()}>
              <img className="back-icon" src={backIcon} alt="Volver" />
            </button>
          </div>
        </div>
        <div className="center-col">
          <div className="image">
            <div className="image-col">
              <img className="modal-img" src={props.url} alt={props.url} />
            </div>
            <div className="info-col">
              <p>{props.tags}</p>
            </div>
          </div>
        </div>
        <div className="right-col">
          <div className="right-icon-row">
            <button type="button" onClick={() => props.hideModal()}>
              <img className="close-icon" src={closeIcon} alt="Cerrar" />
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Modals;
