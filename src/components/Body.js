import React from 'react';
import Images from './Image'
import './styles/Body.css';



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
            <ul>
           {this.state.images.map(function(item,index){
             return <Images key={index} url={item.largeImageURL}/>
           })}
            </ul>
    </div> 
        </>
    );
  }
}

export default Body;