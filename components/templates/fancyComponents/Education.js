import { useState } from "react";

import styled from "styled-components";
import { AddButton } from "../realtimeComponents/Skills";

const EducationBox = styled.div`
  display: flex;

  flex-direction: column;
  word-break: break-word;
  padding: 15px 0 0 15px;
`;

const YearText = styled.li`
  list-style: none;
  font-size: 14px;
  font-style: italic;
`;

const EducationInputBox = styled.div`
  padding-top: 10px;
`;

const DetailText = styled.li`
  list-style: none;
  font-size: 14px;
`;

const ExperienceInput = styled.input`
  border: none;
  border-bottom: 1px solid black;
  width: 150px;
  margin-left: 0px;
  background: transparent;
  color: grey;

  &:focus {
    outline: none;
    border-bottom: 2px solid green;
  }
`;

const RemoveButton = styled.button`
  margin-left: 10px;
  display: flex;
  align-items: center;
  height: 20px;
  padding: 0 4px 0 4px;
  background-color: red;
  color: white;
  font-size: 14px;
  border: none;
  box-shadow: 1px 1px 2px grey;
  cursor: pointer;
`;

const SchoolHeadline = styled.h4``;

function Education() {
  const [education, setEducation] = useState([]);
  const [year, setYear] = useState("");
  const [school, setSchool] = useState("");
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
    <>
      <EducationBox>
        <h2>Utdanning</h2>
        {education.map((xp) => (
          <EducationInputBox key={xp.id}>
            <SchoolHeadline>{xp.school}</SchoolHeadline>
            <YearText>{xp.year}</YearText>

            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                marginRight: "5px",
              }}
            >
              <DetailText>{xp.detail}</DetailText>
              <RemoveButton
                onClick={() =>
                  setEducation(education.filter((exp) => exp.id !== xp.id))
                }
                className="show"
              >
                X
              </RemoveButton>
            </div>
          </EducationInputBox>
        ))}
        <div style={{ paddingTop: "10px" }}>
          <ExperienceInput
            onChange={(e) => setSchool(e.target.value)}
            placeholder="Skole"
            value={school}
            type="text"
            className="show"
          ></ExperienceInput>
          <ExperienceInput
            onChange={(e) => setYear(e.target.value)}
            placeholder="År"
            value={year}
            type="text"
            className="show"
          ></ExperienceInput>

          <ExperienceInput
            onChange={(e) => setDetail(e.target.value)}
            placeholder="Studie"
            value={detail}
            type="text"
            className="show"
          ></ExperienceInput>

          <AddButton
            onClick={addEducation}
            experience={education}
            className="show"
          >
            +
          </AddButton>
        </div>
      </EducationBox>
    </>
  );
}

export default Education;
