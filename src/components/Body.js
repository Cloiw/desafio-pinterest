import React from 'react';
import Images from './Image'
import './styles/Body.css';



class Body extends React.Component{ 
  constructor(){
    super();
    this.state = {images : [],urls : [[],[],[],[]],viewModal:false,viewImages:true}
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
    .then(res => 
      res.json())
      
    .then(res=>{
      let newLinks = res.hits.map(function(item, index) {
        return item.largeImageURL
      })
      let urls=[...this.state.urls]
      let minColumnIndex = this.getMinColum()
      let stateUrls = [...this.state.urls]
      let allLinks = stateUrls.concat(newLinks)
      this.currentPage++;
      allLinks.forEach(element => {
        urls[minColumnIndex].push(element);
        
      });
      
      
      this.setState({urls:urls,images:res.hits});

      
      
      
    })
      
  }


  getMinColum(){
  
  let columnsHeight = [this.refs.column1.offsetHeight,this.refs.column2.offsetHeight,
    this.refs.column3.offsetHeight,this.refs.column4.offsetHeight];
    
  let minColumn = Number.MAX_SAFE_INTEGER
  let minIndex = 0;
  for (let i = 0; i < columnsHeight.length; i++) {
    if(minColumn > columnsHeight[i]){
      minColumn = columnsHeight[i];
      minIndex = i;
    }
  }
  return columnsHeight[minIndex]
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
            
          <div class="column" ref="column1"> 
            {this.state.urls[0].map(function(item,index){
              
                return <Images key={index} url={item}/>
              
            })
          }
          </div>

          <div class="column" ref="column2">
          {this.state.urls[1].map(function(item,index){
              
              return <Images key={index} url={item}/>
            
          })
            }
          </div>

          <div class="column" ref="column3">
          {this.state.urls[2].map(function(item,index){
              
              return <Images key={index} url={item}/>
            
          })
            }
          </div>

          <div class="column" ref="column4">
          {this.state.urls[3].map(function(item,index){
              
              return <Images key={index} url={item}/>
            
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