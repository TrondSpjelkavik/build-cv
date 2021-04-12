import { useState } from "react";
import { RadioInput, SkillsInput, AddButton } from "./Experience";
import { RemoveButton } from "../savvyComponents/Skills";

import styled from "styled-components";

const LanguagesInput = styled.div``;
const ExperienceLevel = styled.input``;

function Language() {
  const [languages, setLanguages] = useState([]);
  const [language, setLanguage] = useState("");
  const [knowledge, setKnowledge] = useState("Dine språkkunnskaper");
  const [points, setPoints] = useState(
    "https://www.t-dev.no/api/skill/noskill.png"
  );

  function addLanguage(e) {
    e.preventDefault();

    setLanguages([
      ...languages,
      {
        language: language,
        knowledge: knowledge,
        points: points,
        id: Math.random() * 1000,
      },
    ]);
    setLanguage("");
    setKnowledge("Dine språkkunnskaper");
    resetRadio();
  }

  function resetRadio() {
    const radio1 = document.querySelector(".radio-1");
    const radio2 = document.querySelector(".radio-2");
    const radio3 = document.querySelector(".radio-3");
    const radio4 = document.querySelector(".radio-4");
    const radio5 = document.querySelector(".radio-5");

    radio1.checked = false;
    radio2.checked = false;
    radio3.checked = false;
    radio4.checked = false;
    radio5.checked = false;
  }

  function expert() {
    const radio1 = document.querySelector(".radio-1");
    const radio2 = document.querySelector(".radio-2");
    const radio3 = document.querySelector(".radio-3");
    const radio4 = document.querySelector(".radio-4");
    const radio5 = document.querySelector(".radio-5");

    radio1.checked = true;
    radio2.checked = true;
    radio3.checked = true;
    radio4.checked = true;
    radio5.checked = true;

    setPoints("https://www.t-dev.no/api/skill/expert.png");
    setKnowledge("Fremragende");
  }

  function veryGood() {
    const radio1 = document.querySelector(".radio-1");
    const radio2 = document.querySelector(".radio-2");
    const radio3 = document.querySelector(".radio-3");
    const radio4 = document.querySelector(".radio-4");
    const radio5 = document.querySelector(".radio-5");

    radio1.checked = true;
    radio2.checked = true;
    radio3.checked = true;
    radio4.checked = true;
    radio5.checked = false;
    setPoints("https://www.t-dev.no/api/skill/verygood.png");
    setKnowledge("Meget God");
  }

  function good() {
    const radio1 = document.querySelector(".radio-1");
    const radio2 = document.querySelector(".radio-2");
    const radio3 = document.querySelector(".radio-3");
    const radio4 = document.querySelector(".radio-4");
    const radio5 = document.querySelector(".radio-5");

    radio1.checked = true;
    radio2.checked = true;
    radio3.checked = true;
    radio4.checked = false;
    radio5.checked = false;
    setPoints("https://www.t-dev.no/api/skill/good.png");
    setKnowledge("God");
  }

  function medium() {
    const radio1 = document.querySelector(".radio-1");
    const radio2 = document.querySelector(".radio-2");
    const radio3 = document.querySelector(".radio-3");
    const radio4 = document.querySelector(".radio-4");
    const radio5 = document.querySelector(".radio-5");

    radio1.checked = true;
    radio2.checked = true;
    radio3.checked = false;
    radio4.checked = false;
    radio5.checked = false;
    setPoints("https://www.t-dev.no/api/skill/medium.png");

    setKnowledge("Nokså god");
  }

  function little() {
    const radio1 = document.querySelector(".radio-1");
    const radio2 = document.querySelector(".radio-2");
    const radio3 = document.querySelector(".radio-3");
    const radio4 = document.querySelector(".radio-4");
    const radio5 = document.querySelector(".radio-5");

    radio1.checked = true;
    radio2.checked = false;
    radio3.checked = false;
    radio4.checked = false;
    radio5.checked = false;
    setPoints("https://www.t-dev.no/api/skill/little.png");

    setKnowledge("Tilstrekkelig");
  }

  return (
    <LanguagesInput>
      <h3 style={{ borderBottom: "1px solid grey", paddingBottom: "5px" }}>
        Språk
      </h3>
      <div style={{ paddingTop: "10px" }}>
        {languages.map((skill) => (
          <div key={skill.id}>
            <p>{skill.language}</p>
            <RemoveButton
              className="show"
              onClick={() =>
                setLanguages(languages.filter((test) => test.id !== skill.id))
              }
            >
              x
            </RemoveButton>
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
              {skill.knowledge}
            </RadioInput>
          </div>
        ))}

        <SkillsInput
          onChange={(e) => setLanguage(e.target.value)}
          placeholder="Språk"
          value={language}
          type="text"
          className="show"
        ></SkillsInput>
        <AddButton onClick={addLanguage} languages={languages} className="show">
          +
        </AddButton>
        <RadioInput className="show" style={{ paddingTop: "20px" }}>
          <ExperienceLevel
            className="radio-1"
            onClick={little}
            type="radio"
            points={points}
          ></ExperienceLevel>
          <input className="radio-2" onClick={medium} type="radio"></input>
          <input className="radio-3" onClick={good} type="radio"></input>
          <input className="radio-4" onClick={veryGood} type="radio"></input>
          <input className="radio-5" onClick={expert} type="radio"></input>
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
          {knowledge}
        </RadioInput>
      </div>
    </LanguagesInput>
  );
}

export default Language;
