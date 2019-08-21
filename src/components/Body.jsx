import React from 'react';
import Images from './Image';
import Modals from './Modals';
import './styles/Body.css';

class Body extends React.Component {
  constructor() {
    super();
    this.state = { images: [], show: false };
    this.handleScroll = this.handleScroll.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.loadingImages = false;
    this.currentPage = 1;
  }

  componentDidMount() {
    this.getImages();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.images.length !== this.state.images.length) {
      this.loadingImages = false;
    }
  }

  getImages() {
    if (this.loadingImages === true) {
      return;
    }

    this.loadingImages = true;
    fetch(`https://pixabay.com/api/?key=13304993-75bbe84ca66872b048431504a&q=fox&per_page=20&page=${this.currentPage}&image_type=photo`)
      .then((res) => res.json())
      .then((res) => {
        const newImages = res.hits;
        const currentImages = [...this.state.images];
        const allImages = currentImages.concat(newImages);
        this.currentPage += 1;
        this.setState({ images: allImages });
      });
  }

  showModal = (index) => {
    document.body.style.overflowY = 'hidden';

    this.setState({ show: index });
  };

  hideModal = () => {
    document.body.style.overflowY = 'scroll';
    this.setState({ show: false });
  };

  handleScroll() {
    const docHeight = document.body.offsetHeight;
    const windowBottom = window.innerHeight + window.scrollY;

    if (windowBottom >= docHeight - 10) {
      return this.getImages();
    }
    return null;
  }

  render() {
    return (
      <>
        <div className={this.state.show === false ? 'content-body' : 'content-body-modal'}>
          <div className="column">
            {this.state.images.map((item, index) => {
              if (index % 4 === 0) {
                return (
                  <div key={`${item.id}div`}>
                    <button type="button" key={`${item.id}button`} onClick={() => this.showModal(index)}>
                      <Images tags={item.tags} key={item.id} url={item.largeImageURL} />
                    </button>
                    <Modals hideModal={this.hideModal} show={this.state.show === index} id={index} url={item.largeImageURL} />
                  </div>
                );
              }
              return [];
            })}
          </div>
          <div className="column">
            {this.state.images.map((item, index) => {
              if (index % 4 === 1) {
                return (
                  <div key={`${item.id}div`}>
                    <button type="button" key={`${item.id}button`} onClick={() => this.showModal(index)}>
                      <Images tags={item.tags} key={item.id} url={item.largeImageURL} />
                    </button>
                    <Modals hideModal={this.hideModal} show={this.state.show === index} id={index} url={item.largeImageURL} />
                  </div>
                );
              }
              return [];
            })}
          </div>
          <div className="column">
            {this.state.images.map((item, index) => {
              if (index % 4 === 2) {
                return (
                  <div key={`${item.id}div`}>
                    <button type="button" key={`${item.id}button`} onClick={() => this.showModal(index)}>
                      <Images tags={item.tags} key={item.id} url={item.largeImageURL} />
                    </button>
                    <Modals hideModal={this.hideModal} show={this.state.show === index} id={index} url={item.largeImageURL} />
                  </div>
                );
              }
              return [];
            })}
          </div>
          <div className="column">
            {this.state.images.map((item, index) => {
              if (index % 4 === 3) {
                return (
                  <div key={`${item.id}div`}>
                    <button type="button" key={`${item.id}button`} onClick={() => this.showModal(index)}>
                      <Images tags={item.tags} key={item.id} url={item.largeImageURL} />
                    </button>
                    <Modals hideModal={this.hideModal} show={this.state.show === index} id={index} url={item.largeImageURL} />
                  </div>
                );
              }
              return [];
            })}
          </div>
        </div>
      </>
    );
  }
}

export default Body;
