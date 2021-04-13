import { useState } from "react";

import styled from "styled-components";

const Foo = styled.div``;

export const SkillsInput = styled.input`
  border: none;
  border-bottom: 1px solid black;
  width: 150px;
  background: transparent;
  color: grey;
  padding-top: 20px;
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
  margin-left: 5px;
  margin-bottom: 5px;
  padding: 0 4px 0 4px;
  background-color: red;
  color: white;
  font-size: 16px;
  border: none;
  box-shadow: 1px 1px 2px grey;
  cursor: pointer;
`;

export const RadioInput = styled.div`
  display: flex;
  width: 80px;
  justify-content: space-around;
  font-size: 12px;
  margin-left: auto;
`;

const ExperienceLevel = styled.input``;

function Experience() {
  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState("");
  const [level, setLevel] = useState("Din ferdighet");
  const [points, setPoints] = useState(
    "https://www.t-dev.no/api/skill/noskill.png"
  );

  function addSkill(e) {
    e.preventDefault();

    setSkills([
      ...skills,
      {
        skill: skill,
        level: level,
        points: points,
        id: Math.random() * 1000,
      },
    ]);
    setSkill("");
    setLevel("Din ferdighet");
    resetRadio();
  }

  function resetRadio() {
    const radio1 = document.querySelector(".radio-little");
    const radio2 = document.querySelector(".radio-medium");
    const radio3 = document.querySelector(".radio-good");
    const radio4 = document.querySelector(".radio-veryGood");
    const radio5 = document.querySelector(".radio-expert");

    radio1.checked = false;
    radio2.checked = false;
    radio3.checked = false;
    radio4.checked = false;
    radio5.checked = false;
  }

  function expert() {
    const radio1 = document.querySelector(".radio-little");
    const radio2 = document.querySelector(".radio-medium");
    const radio3 = document.querySelector(".radio-good");
    const radio4 = document.querySelector(".radio-veryGood");
    const radio5 = document.querySelector(".radio-expert");

    radio1.checked = true;
    radio2.checked = true;
    radio3.checked = true;
    radio4.checked = true;
    radio5.checked = true;

    setPoints("https://www.t-dev.no/api/skill/expert.png");
    setLevel("Fremragende");
  }

  function veryGood() {
    const radio1 = document.querySelector(".radio-little");
    const radio2 = document.querySelector(".radio-medium");
    const radio3 = document.querySelector(".radio-good");
    const radio4 = document.querySelector(".radio-veryGood");
    const radio5 = document.querySelector(".radio-expert");

    radio1.checked = true;
    radio2.checked = true;
    radio3.checked = true;
    radio4.checked = true;
    radio5.checked = false;
    setPoints("https://www.t-dev.no/api/skill/verygood.png");
    setLevel("Meget God");
  }

  function good() {
    const radio1 = document.querySelector(".radio-little");
    const radio2 = document.querySelector(".radio-medium");
    const radio3 = document.querySelector(".radio-good");
    const radio4 = document.querySelector(".radio-veryGood");
    const radio5 = document.querySelector(".radio-expert");

    radio1.checked = true;
    radio2.checked = true;
    radio3.checked = true;
    radio4.checked = false;
    radio5.checked = false;
    setPoints("https://www.t-dev.no/api/skill/good.png");
    setLevel("God");
  }

  function medium() {
    const radio1 = document.querySelector(".radio-little");
    const radio2 = document.querySelector(".radio-medium");
    const radio3 = document.querySelector(".radio-good");
    const radio4 = document.querySelector(".radio-veryGood");
    const radio5 = document.querySelector(".radio-expert");

    radio1.checked = true;
    radio2.checked = true;
    radio3.checked = false;
    radio4.checked = false;
    radio5.checked = false;
    setPoints("https://www.t-dev.no/api/skill/medium.png");

    setLevel("Nokså god");
  }

  function little() {
    const radio1 = document.querySelector(".radio-little");
    const radio2 = document.querySelector(".radio-medium");
    const radio3 = document.querySelector(".radio-good");
    const radio4 = document.querySelector(".radio-veryGood");
    const radio5 = document.querySelector(".radio-expert");

    radio1.checked = true;
    radio2.checked = false;
    radio3.checked = false;
    radio4.checked = false;
    radio5.checked = false;
    setPoints("https://www.t-dev.no/api/skill/little.png");

    setLevel("Tilstrekkelig");
  }

  return (
    <>
      <h3
        style={{
          borderBottom: "1px solid grey",
          paddingBottom: "5px",
          paddingTop: "10px",
        }}
      >
        Ferdigheter
      </h3>
      <Foo>
        <div style={{ paddingTop: "10px" }}>
          {skills.map((skill) => (
            <div key={skill.id}>
              <div style={{ display: "flex" }}>
                <p>{skill.skill}</p>
                <RemoveButton
                  className="show"
                  onClick={() =>
                    setSkills(skills.filter((test) => test.id !== skill.id))
                  }
                >
                  x
                </RemoveButton>
              </div>
              <div
                className="skillPoints"
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "flex-end",
                }}
              >
                <img src={skill.points}></img>
              </div>

              <RadioInput
                style={{
                  paddingTop: "5px",
                  display: "flex",
                  width: "100%",
                  justifyContent: "flex-end",
                }}
              >
                {skill.level}
              </RadioInput>
            </div>
          ))}
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
          <RadioInput className="show" style={{ paddingTop: "20px" }}>
            <ExperienceLevel
              className="radio-little"
              onClick={little}
              type="radio"
              points={points}
            ></ExperienceLevel>
            <input
              className="radio-medium"
              onClick={medium}
              type="radio"
            ></input>
            <input className="radio-good" onClick={good} type="radio"></input>
            <input
              className="radio-veryGood"
              onClick={veryGood}
              type="radio"
            ></input>
            <input
              className="radio-expert"
              onClick={expert}
              type="radio"
            ></input>
          </RadioInput>

          <RadioInput
            className="show"
            style={{
              paddingTop: "5px",
              display: "flex",
              width: "100%",
              justifyContent: "flex-end",
            }}
          >
            {level}
          </RadioInput>
        </div>
      </Foo>
    </>
  );
}

export default Experience;
