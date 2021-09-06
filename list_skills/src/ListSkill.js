import React, { useState } from 'react';

function ListSkill(){
  const [skills, setSkills] = useState([]);
  const [nameSkill, setNameSkill] = useState('');
  const [level, setLevel] = useState(0);

  const setLevelSkill = () => {
    if(skills){
      setSkills([...skills, {name: nameSkill, lvl: level}]);
      setNameSkill('');
      setLevel(0);
    }
  }

  return (
    <div>
      <div className="header">
        <h3 className="title">Your skills</h3>
        <a className="btn-add-skill" onClick={ setLevelSkill }>Add new skill</a>
      </div>
      <ul className="list-skills">
        { skills && skills.map( skill => {
          return(
            <div>
              <li key={ skill.name } className="item-skill">
                <strong>{ skill.name } </strong> { skill.lvl }
              </li>
            </div>
          )
        })}
      </ul>
      <label>Skill Name:</label>
      <input type="text" onChange={ e => setNameSkill(e.target.value) } required/><br/>
      <label>XP for skill:</label>
      <input type="number" onChange={ () => setLevel(level + 1) } required/>
    </div>
  )
}

export default ListSkill;