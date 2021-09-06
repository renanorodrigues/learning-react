import React, { useState } from 'react';
import './App.css';
import ListSkill from './ListSkill';

function App() {
  
  return (
    <div className="container">
      <ListSkill />
      <label>Skill Name:</label>
      <input type="text" onChange={ e => setNameSkill(e.target.value) } required/><br/>
      <label>XP for skill:</label>
      <input type="number" onChange={ () => setLevel(level + 1) } required/>
    </div>
  );
}

export default App;
