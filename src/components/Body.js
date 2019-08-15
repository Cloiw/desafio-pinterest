import React from 'react';
import Images from './Image'
import './styles/Body.css';



class Body extends React.Component{ 
  constructor(){
    super();
    this.state = {images : [],urls : [],viewModal:false,viewImages:true}
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
    if(prevState.urls.length !== this.state.urls.length){
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
      let newLinks = res.hits.map(function(item, index) {
      return item.largeImageURL
      })

      let stateUrls = [...this.state.urls]
      let allLinks = stateUrls.concat(newLinks)
      this.currentPage++;
      this.setState({urls:allLinks,images:res.hits});
      
    })
      
  }

 

  showModal(){
    this.setState({
      viewImages:false,
      viewModal:true
    })
  }

    render() {
        return (
          <>
        <div className="content-body">
            
          <div class="column">
            {this.state.urls.map(function(item,index){
                if(index%4 === 0){
                  return <Images key={index} url={item}/>
                }
              })
            }
          </div>

          <div class="column">
            {this.state.urls.map(function(item,index){
                if(index%4 === 1){
                  return <Images key={index} url={item}/>
                }
              })
            }
          </div>

          <div class="column">
            {this.state.urls.map(function(item,index){
                if(index%4 === 2){
                  return <Images key={index} url={item}/>
                }
              })
            }
          </div>

          <div class="column">
            {this.state.urls.map(function(item,index){
                if(index%4 === 3){
                  return <Images key={index} url={item}/>
                }
              })
            }
          </div>
            
    </div> 
        </>
    );
  }
}

export default Body;



// {this.state.images.map(function(item,index){
//   return <Images key={index} url={item.largeImageURL}/>
// })}