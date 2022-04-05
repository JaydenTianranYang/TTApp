import React, { Component } from 'react' 
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      pictures: [],
    };
  }

//componentDidMount is executed after the render
  componentDidMount(){
    //fetch JSON file using a REST API from Flickr
    fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=42f603a8edebdd75abec92a78e0fb5c7&tags=dogs&per_page=10&page=1&format=json&nojsoncallback=1')
    .then(function(response){
      return response.json();
    })
    .then(function(j){
      let picArray = j.photos.photo.map((pic) =>{
        var srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg';
        return(
          <img alt="dogs" src={srcPath}></img>
        )
      })
      this.setState({pictures: picArray});
    }.bind(this))
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
