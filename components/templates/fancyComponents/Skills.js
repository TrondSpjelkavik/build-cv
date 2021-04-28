import { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";

import styled from "styled-components";
import { AddButton, RemoveButton } from "../realtimeComponents/Skills";
import { SkillsInput } from "../realtimeComponents/Skills";

const SkillsBox = styled.div`
  display: flex;
  padding: 15px 0 0 15px;
  flex-direction: column;
`;

const SkillsContent = styled.div``;

const ListBox = styled.ul`
  display: flex;
  flex-direction: column;
`;

const List = styled.li`
  list-style: none;
  padding-left: 10px;
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
    <>
      <SkillsBox>
        <h2>Ferdigheter</h2>
        <SkillsContent>
          <ListBox>
            {skills.map((skill) => (
              <div
                key={skill.id}
                style={{ display: "flex", paddingTop: "10px" }}
              >
                <AiOutlineCheck style={{ marginTop: "2px" }}></AiOutlineCheck>
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
          </ListBox>
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
        </SkillsContent>
      </SkillsBox>
    </>
  );
}

export default Skills;
