import React, { Component } from 'react' 
import logo from './logo.svg';
import './App.css';

class App extends Component {
  //store the state of a component, we should make the constructor
  constructor(){
    super();
    this.state = {
      pictures: [],
    };
  }

//componentDidMount is executed after the render（part of lifecycle）
//response is what we are calling, the name we give whatever comes back
//return response object(JSON file)
//then we take the value we get, then call function(j)
  componentDidMount(){
    //fetch JSON file using a REST API from Flickr
    fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=42f603a8edebdd75abec92a78e0fb5c7&tags=dogs&per_page=10&page=1&format=json&nojsoncallback=1')
    .then(function(response){
      return response.json();
    })
    .then(function(j){
      //alert(JSON.stringify(j)); check whether j bring all the information
      let picArray = j.photos.photo.map((pic) =>{
        //derive the source path of that photo, create the location of the picture
        var srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg';
        //After parsing JSON and mapping here to build the path, then return the element that we build in this image
        return(
          <img alt="dogs" src={srcPath}></img>
        )
      })
      this.setState({pictures: picArray});//store picArray value into the state
    }.bind(this))//bind to the function to component
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> 
        <p className="App-intro">
          {this.state.pictures}
        </p>
      </div>
    );
  }
}

export default App;
