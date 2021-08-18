import './NavBar.css';
import React, { Component } from 'react';

class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      links: [
        { id: 1, name: "Home", href: "#home", class: "inactive" },
        { id: 2, name: "News", href: "#news", class: "inactive" },
        { id: 3, name: "Contact", href: "#contact", class: "inactive" },
        { id: 4, name: "About", href: "#about", class: "active" }
      ]
    };
  }

  render(){
    return(
      <navbar>
        <ul>
          {this.state.links.map((link) =>
            {
              return(
                <li key={link.id}><a className={link.class} href={link.href}>{link.name}</a></li>
              )
            }
          )}
        </ul>
      </navbar>
    );
  }
}

export default NavBar;