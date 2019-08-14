import React from 'react';
import Images from './Image'
import './styles/Body.css';

  // let response = fetch("https://pixabay.com/api/?key=13304993-75bbe84ca66872b048431504a&q=fox&image_type=photo")
  // {response.then(res=>{res.forEach(element => {
  //         <img  src={element.largeImageURL}/>})


class Body extends React.Component{ 
  constructor(){
    super();
    this.state = {images : []}
  }

  componentDidMount(){
    this.getImages();
  }

  getImages(){
    fetch("https://pixabay.com/api/?key=13304993-75bbe84ca66872b048431504a&q=fox&image_type=photo")
    .then(res => res.json())
    .then(res=>{
      
      this.setState({images: res.hits})})
  }
    render() {
        return (
          <>
        <div className="content-body">
            
           {this.state.images.map(function(item,index){
             return <Images key={index} url={item.largeImageURL}/>
           })}
            
    </div> 
        </>
    );
  }
}

export default Body;