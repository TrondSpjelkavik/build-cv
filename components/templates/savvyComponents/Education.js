import { useState } from "react";
import { Headlines } from "../Savvy";
import {
  InputContainer,
  SubHeadline,
  RemoveButton,
  ExperienceInput,
  YearInput,
} from "./WorkExperience";
import { InputBox, SkillsInput, AddButton, List } from "./Skills";
import styled from "styled-components";

const EducationContainer = styled.div`
  padding: 20px 20px 20px 20px;
`;

function Education() {
  const [education, setEducation] = useState([]);
  const [school, setSchool] = useState("");
  const [year, setYear] = useState("");
  const [detail, setDetail] = useState("");

  function addEducation(e) {
    e.preventDefault(e);

    setEducation([
      ...education,
      {
        school: school,
        year: year,
        detail: detail,
        id: Math.random() * 1000,
      },
    ]);
    setSchool("");
    setYear("");
    setDetail("");
  }

  return (
    <EducationContainer>
      <Headlines>Utdanning</Headlines>
      <InputContainer>
        <div>
          {education.map((xp) => (
            <div key={xp.id}>
              <div style={{ display: "flex" }}>
                <SubHeadline value={xp.school}>{xp.school}</SubHeadline>
                <SubHeadline value={xp.year} style={{ marginLeft: "10px" }}>
                  {xp.year}
                </SubHeadline>
                <RemoveButton
                  onClick={() =>
                    setEducation(education.filter((exp) => exp.id !== xp.id))
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
        <SubHeadline>{school}</SubHeadline>
        <ExperienceInput
          onChange={(e) => setSchool(e.target.value)}
          placeholder="Skole"
          value={school}
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
            onClick={addEducation}
            education={education}
            className="show"
          >
            +
          </AddButton>
        </div>
      </InputBox>
    </EducationContainer>
  );
}

export default Education;
