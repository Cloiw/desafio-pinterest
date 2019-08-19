import React from 'react';
import Images from './Image'
import './styles/Body.css';



class Body extends React.Component{ 
  constructor(){
    super();
    this.state = {images : [],urls : []}
    this.handleScroll = this.handleScroll.bind(this);
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

 

  

  render() {
    return (
      <>
        <div className="content-body">

          <div className="column">
            {this.state.images.map(function(item,index){
              if(index%4 === 0){
                return <Images tags={item.tags} id={item.id} key={index} url={item.largeImageURL} pageUrl={item.pageURL}/>
              }
            })}
          </div>

          <div className="column">
            {this.state.images.map(function(item,index){
              if(index%4 === 1){
                return <Images tags={item.tags} id={item.id} key={index} url={item.largeImageURL} pageUrl={item.pageURL}/>
              }
            })}
          </div>

          <div className="column">
            {this.state.images.map(function(item,index){
              if(index%4 === 2){
                return <Images tags={item.tags} id={item.id} key={index} url={item.largeImageURL} pageUrl={item.pageURL}/>
              }
            })}
          </div>

          <div className="column">
            {this.state.images.map(function(item,index){
              if(index%4 === 3){
                return <Images tags={item.tags} id={item.id} key={index} url={item.largeImageURL} pageUrl={item.pageURL}/>
              }
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