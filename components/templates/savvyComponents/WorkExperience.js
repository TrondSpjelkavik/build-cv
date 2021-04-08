import { useState } from "react";
import { Headlines } from "../Savvy";
import { InputBox, SkillsInput, AddButton, List } from "./Skills";

import styled from "styled-components";

const Experience = styled.div`
  padding: 20px 20px 0px 20px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0;
`;

export const SubHeadline = styled.h4``;

export const ExperienceInput = styled.input`
  border: none;
  border-bottom: 1px solid black;
  width: 150px;
  margin-left: 10px;
  background: transparent;
  color: grey;

  &:focus {
    outline: none;
    border-bottom: 2px solid black;
  }
`;

export const YearInput = styled.input`
  border: none;
  border-bottom: 1px solid black;
  width: 100px;
  margin-left: 10px;
  background: transparent;
  color: grey;

  &:focus {
    outline: none;
    border-bottom: 2px solid black;
  }
`;

export const RemoveButton = styled.button`
  padding: 0 4px 0 4px;
  margin-left: 10px;
  background-color: red;
  color: white;
  font-size: 12px;
  border: none;
  box-shadow: 1px 1px 2px grey;
  cursor: pointer;
`;

function WorkExperience() {
  const [experience, setExperience] = useState([]);
  const [company, setCompany] = useState("");
  const [year, setYear] = useState("");
  const [detail, setDetail] = useState("");

  function addExperience(e) {
    e.preventDefault(e);

    setExperience([
      ...experience,
      {
        company: company,
        year: year,
        detail: detail,
        id: Math.random() * 1000,
      },
    ]);
    setCompany("");
    setYear("");
    setDetail("");
  }

  return (
    <Experience>
      <Headlines>Arbeidserfaring</Headlines>
      <InputContainer>
        <div>
          {experience.map((xp) => (
            <div key={xp.id}>
              <div style={{ display: "flex" }}>
                <SubHeadline value={xp.company}>{xp.company}</SubHeadline>
                <SubHeadline value={xp.year} style={{ marginLeft: "10px" }}>
                  {xp.year}
                </SubHeadline>
                <RemoveButton
                  onClick={() =>
                    setExperience(experience.filter((exp) => exp.id !== xp.id))
                  }
                  className="show"
                >
                  X
                </RemoveButton>
              </div>
              <List value={xp.detail}>{xp.detail}</List>
            </div>
          ))}
        </div>
      </InputContainer>
      <InputContainer>
        <SubHeadline>{company}</SubHeadline>
        <ExperienceInput
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Firma"
          value={company}
          type="text"
          className="show"
        ></ExperienceInput>
        <SubHeadline style={{ marginLeft: "10px" }}>{year}</SubHeadline>
        <YearInput
          onChange={(e) => setYear(e.target.value)}
          placeholder="år"
          value={year}
          type="text"
          className="show"
        ></YearInput>
      </InputContainer>
      <InputBox className="show">
        <div>
          <SkillsInput
            onChange={(e) => setDetail(e.target.value)}
            placeholder="Detailer"
            value={detail}
            type="text"
            className="show"
          ></SkillsInput>

          <AddButton
            onClick={addExperience}
            experience={experience}
            className="show"
          >
            +
          </AddButton>
        </div>
      </InputBox>
    </Experience>
  );
}

export default WorkExperience;
