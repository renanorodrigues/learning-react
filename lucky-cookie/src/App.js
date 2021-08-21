import React, { Component } from 'react';
import Cookie from './components/Cookie';

class App extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="container">
        <Cookie />
      </div>
    );
  }
}

export default App;
