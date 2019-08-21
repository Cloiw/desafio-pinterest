import React from 'react';
import './styles/Image.css';
import dotsIcon from '../img/dots_icon.png';
import saveIcon from '../img/save_icon.jpg';

class Image extends React.Component {
  constructor() {
    super();
    this.state = { isHover: false };
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover = () => {
    this.setState((prevState) => (
      { isHover: !prevState.isHover }
    ));
  };

  render() {
    return (
      <>
        <div onMouseEnter={() => this.handleHover()} onMouseLeave={() => this.handleHover()} className="image-div">
          <button type="button" className={this.state.isHover ? 'show-save-button' : 'hide-save-button'}>
            <img className="save-icon" src={saveIcon} alt="Guardar" />
          </button>
          <img className="image-size" src={this.props.url} alt={this.props.url} />
          <div className="flex-dots">
            <img className="image-dots" src={dotsIcon} alt="More" />
          </div>
        </div>
      </>
    );
  }
}

export default Image;
