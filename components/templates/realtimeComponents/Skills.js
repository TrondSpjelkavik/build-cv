import { useState } from "react";

import styled from "styled-components";

const SkillBox = styled.div`
  display: flex;
  flex-direction: column;
  word-break: break-word;
  padding: 35px 0 35px 25px;
`;

const SkillList = styled.li`
  padding-top: 10px;
`;

export const AddButton = styled.button`
  background-color: green;
  color: white;
  font-size: 16px;
  margin-left: 10px;
  padding: 0 3px 0 3px;
  border: none;
  box-shadow: 1px 1px 2px grey;
  cursor: pointer;
  height: 20px;
`;

const SkillsInput = styled.input`
  border: none;
  border-bottom: 1px solid black;
  width: 150px;
  background: transparent;
  color: grey;
  padding-top: 20px;
  &:focus {
    outline: none;
    border-bottom: 2px solid green;
  }

  @media (max-width: 645px) {
    width: 100px;
  }
`;

export const RemoveButton = styled.button`
  margin-left: 10px;

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
    <SkillBox>
      <h2>Ferdigheter</h2>
      <ul style={{ paddingLeft: "20px" }}>
        {skills.map((skill) => (
          <div
            key={skill.id}
            style={{ display: "flex", alignItems: "flex-end" }}
          >
            <SkillList>{skill.skill}</SkillList>
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
      </ul>
      <div style={{ display: "flex", alignItems: "flex-end" }}>
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
    </SkillBox>
  );
}

export default Skills;
