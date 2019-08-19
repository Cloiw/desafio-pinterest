import React from 'react';
import Images from './Image'
import Modals from './Modals'
import './styles/Body.css';



class Body extends React.Component{ 
  constructor(){
    super();
    this.state = {images : [],urls : [],show:false};
    this.handleScroll = this.handleScroll.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.loadingImages = false;
    this.currentPage = 1;
  
  }

  

  handleScroll(){
    const docHeight = document.body.offsetHeight
    const windowBottom = window.innerHeight + window.scrollY
    
    if (windowBottom >= docHeight-10) {
      return this.getImages();
      };
    }
  

  componentDidMount(){
    this.getImages();
    window.addEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate(prevProps,prevState){
    if(prevState.images.length !== this.state.images.length){
      this.loadingImages = false;
    }
  }

  getImages(){
    if(this.loadingImages === true){
      return;
    }

    this.loadingImages = true;
    fetch("https://pixabay.com/api/?key=13304993-75bbe84ca66872b048431504a&q=fox&per_page=20&page="+this.currentPage+"&image_type=photo")
    .then(res => res.json())
    .then(res=>{
      let newImages = res.hits

      let currentImages = [...this.state.images]
      let allImages = currentImages.concat(newImages)
      this.currentPage++;
      this.setState({images:allImages});
      
    })
      
  }

 
showModal = (index) => {
  document.body.style.overflow = "hidden";

  this.setState({ show: index });
};

hideModal = () => {
  document.body.style.overflow = "scroll";
  this.setState({ show: false });
};

  

  render() {
   
    
    return (
      
      <>
        <div className={this.state.show === false ? 'content-body' : 'content-body-modal'}>

          <div className="column">
            {this.state.images.map((item,index)=>{
              
              if(index%4 === 0){
               
                return <div key={index+"div"}><button key={index+"a"} onClick={()=> this.showModal(index)}><Images tags={item.tags} id={item.id} key={index} url={item.largeImageURL} pageUrl={item.pageURL}/></button>
                <Modals hideModal={this.hideModal} show={this.state.show === index} id={index} url={item.largeImageURL}/></div>
                
              }
              return []
            })}
          </div>

          <div className="column">
            {this.state.images.map((item,index)=>{
              if(index%4 === 1){
                return <div key={index+"div"}><button key={index+"a"} onClick={()=> this.showModal(index)}><Images tags={item.tags} id={item.id} key={index} url={item.largeImageURL} pageUrl={item.pageURL}/></button>
                <Modals hideModal={this.hideModal} show={this.state.show === index} id={index} url={item.largeImageURL}/></div>
              }
              return [];
            })}
          </div>

          <div className="column">
            {this.state.images.map((item,index)=>{
              if(index%4 === 2){
                return <div key={index+"div"}><button key={index+"a"} onClick={()=> this.showModal(index)}><Images tags={item.tags} id={item.id} key={index} url={item.largeImageURL} pageUrl={item.pageURL}/></button>
                <Modals hideModal={this.hideModal} show={this.state.show === index} id={index} url={item.largeImageURL}/></div>
              }
              return []
            })}
          </div>

          <div className="column">
            {this.state.images.map((item,index)=>{
              if(index%4 === 3){
                return <div key={index+"div"}><button key={index+"a"} onClick={()=> this.showModal(index)}><Images tags={item.tags} id={item.id} key={index} url={item.largeImageURL} pageUrl={item.pageURL}/></button>
                <Modals hideModal={this.hideModal} show={this.state.show === index} id={index} url={item.largeImageURL}/></div>
              }return []
            })}
          </div>
        </div> 
      </>
    );
  }
};

export default Body;



// {this.state.images.map(function(item,index){
//   return <Images key={index} url={item.largeImageURL}/>
// })}