import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      number: 0,
      btnText: "Start"
    };

    this.timer = null;
    this.startTimer = this.startTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  startTimer(){
    let state = this.state;

    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
      state.btnText = "Start";
    }else{
      this.timer = setInterval(() => {
        state.number += 0.1;
        this.setState(state);
      }, 100);
      state.btnText = "Stop";
    }

    this.setState(state);
  }

  resetTimer(){
    let state = this.state;

    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
    }

    state.number = 0;
    state.btnText = "Start";
    this.setState(state);
  }

  render(){
    return(
      <div className="container">
        <h3 className="title">Timer Online</h3>
        <img className="img-timer" src={ require('./cronometro.png').default } />
        <div class="timer-number">
          <span>{ this.state.number.toFixed(1) }</span>
        </div>
        <div className="btn-container">
          <button onClick={ this.startTimer } className="btn">{ this.state.btnText }</button>
          <button onClick={ this.resetTimer } className="btn">Reset</button>
        </div>
      </div>
    )
  }
}

export default App;
