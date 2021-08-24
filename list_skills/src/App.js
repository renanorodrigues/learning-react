import React, { useState } from 'react';

function App() {
  const [skills, setSkills] = useState([]);
  const [nameSkill, setNameSkill] = useState('');
  const [level, setLevel] = useState(0);

  function setLevelSkill(){
    if(skills){
      setSkills([...skills, {name: nameSkill, lvl: level}]);
      setNameSkill('');
      setLevel(0);
    }
  }

  return (
    <div className="posts">
      <h3>Post your skills</h3>
      <ul>
        { skills && skills.map( skill => {
          return(
            <div className="list-skills">
              <li key={ skill.name }>
                { skill.name } --- XP: { skill.lvl }
              </li>
            </div>
          )
        })}
      </ul>
      <label>Skill Name:</label>
      <input type="text" onChange={ e => setNameSkill(e.target.value) } required/><br/>
      <label>XP for skill:</label>
      <input type="number" onChange={ () => setLevel(level + 1) } required/>
      <button onClick={ setLevelSkill }>Add Skill</button>
    </div>
  );
}

export default App;
