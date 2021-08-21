import './index.css';
import React, { Component } from 'react';
import Button from '../Button';

class Cookie extends Component {
  constructor(props){
    super(props);
    this.state = {
      defaultImage: "biscoito.png",
      currentPhrase: ''
    }

    this.crackedCookie = this.crackedCookie.bind(this);
    this.phrases = ['Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito conhecimento.', 
    'O riso é a menor distância entre duas pessoas.', 
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.'];
  }

  crackedCookie(){
    let state = this.state;
    let numberRandom = Math.floor(Math.random() * this.phrases.length);
    state.currentPhrase = '" ' + this.phrases[numberRandom] + ' "'
    this.setState(state);
    this.setState({defaultImage: "biscoito_open.png"});
  }

  render(){
    return(
      <div>
        <img className="image-cookie" src={ require(`../../assets/${this.state.defaultImage}`).default } />
        <Button labelButton="Abrir biscoito" crackAction={this.crackedCookie} />
        <p>{ this.state.currentPhrase }</p>
      </div>
    );
  }
}

export default Cookie;