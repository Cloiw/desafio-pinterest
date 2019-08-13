import React from 'react';
import Images from './Image'
import './styles/Body.css';

  // let response = fetch("https://pixabay.com/api/?key=13304993-75bbe84ca66872b048431504a&q=fox&image_type=photo")
  // {response.then(res=>{res.forEach(element => {
  //         <img  src={element.largeImageURL}/>})


class Body extends React.Component{ 

    render() {
        return (
          <>
        <div className="content-body">
            <p>olitas</p>
            <Images url="https://pixabay.com/get/57e9d24a4e56a914f6da8c7dda79367d163fdaec5a526c4870297ed3944ecd59bf_1280.jpg"/>
    </div> 
        </>
    );
  }
}

export default Body;