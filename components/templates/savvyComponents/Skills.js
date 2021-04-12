import { useState } from "react";
import { Headlines } from "../Savvy";

import styled from "styled-components";

//TODO: Se the difference between Skills and Work experience

const SkillsContent = styled.div`
  padding: 20px 20px 0px 20px;
`;

export const InputBox = styled.ul`
  padding-left: 0px;
  display: flex;
  flex-direction: column;
`;

export const List = styled.li`
  padding: 3px 0;
  margin-left: 20px;
`;

export const SkillsInput = styled.input`
  border: none;
  border-bottom: 1px solid black;
  width: 300px;
  background: transparent;
  color: grey;
  padding-top: 10px;
  &:focus {
    outline: none;
    border-bottom: 2px solid black;
  }

  @media (max-width: 645px) {
    width: 100px;
  }
`;

export const AddButton = styled.button`
  background-color: green;
  color: white;
  font-size: 18px;
  margin-left: 10px;
  padding: 0 3px 0 3px;
  border: none;
  box-shadow: 1px 1px 2px grey;
  cursor: pointer;
`;

export const RemoveButton = styled.button`
  margin-left: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 0 4px 0 4px;
  background-color: red;
  color: white;
  font-size: 16px;
  border: none;
  box-shadow: 1px 1px 2px grey;
  cursor: pointer;
`;

function Skills() {
  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState("");

  function addSkill(e) {
    e.preventDefault();
    setSkills([
      ...skills,
      {
        skill: skill,
        id: Math.random() * 1000,
      },
    ]);
    setSkill("");
  }

  return (
    <SkillsContent>
      <Headlines>Ferdigheter</Headlines>
      <InputBox>
        {skills.map((skill) => (
          <div style={{ display: "flex" }} key={skill.id}>
            <List>{skill.skill}</List>
            <RemoveButton
              className="show"
              onClick={() =>
                setSkills(skills.filter((test) => test.id !== skill.id))
              }
            >
              x
            </RemoveButton>
          </div>
        ))}

        <div>
          <SkillsInput
            onChange={(e) => setSkill(e.target.value)}
            placeholder="Ferdighet"
            value={skill}
            type="text"
            className="show"
          ></SkillsInput>
          <AddButton onClick={addSkill} skills={skills} className="show">
            +
          </AddButton>
        </div>
      </InputBox>
    </SkillsContent>
  );
}

export default Skills;
