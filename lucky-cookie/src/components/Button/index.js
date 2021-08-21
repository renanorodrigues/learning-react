import React, { Component } from 'react';
import './index.css';

class Button extends Component {
  constructor(props){
    super(props);
  }
  
  render(){
    return(
      <div>
        <button className="btn" onClick={this.props.crackAction}>{this.props.labelButton}</button>
      </div>
    );
  }
}

export default Button;