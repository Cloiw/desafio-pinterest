import React from 'react';
import Images from './Image'
import './styles/Body.css';



class Body extends React.Component{ 
  constructor(){
    super();
    this.state = {images : [], perpage: 20, page:1, urls : []}
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll(){
    const docHeight = document.body.offsetHeight
    const windowBottom = window.innerHeight + window.scrollY
   
    
    if (windowBottom >= docHeight-10) {
      console.log(windowBottom)
      console.log(docHeight)
      console.log("ola")
      return this.getImages();
      };
      
    }
    
  
  

  componentDidMount(){
     this.getImages(1);
    window.addEventListener("scroll", this.handleScroll);
    
    
  }
 
  componentDidUpdate() {
    window.addEventListener("scroll", this.handleScroll);
  }

  getImages(){
    fetch("https://pixabay.com/api/?key=13304993-75bbe84ca66872b048431504a&q=fox&per_page="+this.state.perpage+"&page="+this.state.page+"&image_type=photo")
    .then(res => res.json())
    .then(res=>{
      
      let stateImages = [...this.state.images]
      let all = stateImages.concat(res.hits)
      let urlsA = all.map(function(item,index){
        return item.largeImageURL
      })
      console.log(stateImages)
      console.log(all)
      console.log(urlsA)
      const unique =  [...new Set(urlsA)];
      console.log(unique)
      
     
      
      

      
      
      if(this.state.images !== []){
        
      return this.setState({urls: urlsA ,perpage:(this.state.perpage+20),page:(this.state.page++)})
      }
      
      return this.setState({images: this.state.images,perpage:this.state.perpage})
    
    })
      
  }
    render() {
        return (
          <>
        <div className="content-body">
            <ul>
           {this.state.urls.map(function(item,index){
             return <Images key={index} url={item}/>
           })}
            </ul>
    </div> 
        </>
    );
  }
}

export default Body;



// {this.state.images.map(function(item,index){
//   return <Images key={index} url={item.largeImageURL}/>
// })}