import { useState } from "react";

import { ExperienceInput } from "../savvyComponents/WorkExperience";
import { AddButton } from "../savvyComponents/Skills";
import styled from "styled-components";

const EducationContainer = styled.div`
  padding: 5px 0 5px 0;
  display: flex;
`;

const WorkYear = styled.aside`
  width: 25%;
  word-break: break-word;
  max-width: 100px;
`;

const WorkExperienceContent = styled.div`
  width: 75%;
`;

const YearInput = styled.input`
  border: none;
  border-bottom: 1px solid black;
  width: 80px;
  margin-left: 10px;
  background: transparent;
  color: grey;

  &:focus {
    outline: none;
    border-bottom: 2px solid black;
  }
`;

const WorkExperienceContainer = styled.div`
  padding: 5px 0 5px 0;
  display: flex;
`;

const RemoveButton = styled.button`
  padding: 0 4px 0 4px;
  height: 25px;
  background-color: red;
  color: white;
  font-size: 12px;
  border: none;
  box-shadow: 1px 1px 2px grey;
  cursor: pointer;
`;

// TODO: CLEAN UP

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
      <h3 style={{ padding: "10px 0", borderBottom: "1px solid grey" }}>
        Utdanning
      </h3>
      {education.map((xp) => (
        <WorkExperienceContainer key={xp.id}>
          <WorkYear>
            <h4 value={xp.year}>{xp.year}</h4>
          </WorkYear>

          <WorkExperienceContent>
            <h4 value={xp.school}>{xp.school}</h4>
            <li value={xp.detail}>{xp.detail}</li>
          </WorkExperienceContent>
          <RemoveButton
            onClick={() =>
              setEducation(education.filter((exp) => exp.id !== xp.id))
            }
            className="show"
          >
            X
          </RemoveButton>
        </WorkExperienceContainer>
      ))}
      <EducationContainer>
        <WorkYear>
          <YearInput
            onChange={(e) => setYear(e.target.value)}
            placeholder="År"
            value={year}
            type="text"
            className="show"
          ></YearInput>
        </WorkYear>

        <WorkExperienceContent>
          <ExperienceInput
            onChange={(e) => setSchool(e.target.value)}
            placeholder="Skole"
            value={school}
            type="text"
            className="show"
          ></ExperienceInput>
          <ExperienceInput style={{ visibility: "hidden" }}></ExperienceInput>
          <ExperienceInput
            style={{ marginTop: "20px" }}
            onChange={(e) => setDetail(e.target.value)}
            placeholder="Detaljer"
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
        </WorkExperienceContent>
        {/* <WorkYear>
          <h4>2019 - 2021</h4>
        </WorkYear>
        <WorkExperienceFoo>
          <h4>Noroff school of digital media</h4>

          <li>Front-End Utvikling</li>
        </WorkExperienceFoo>
      </EducationContainer>
      <EducationContainer>
        <WorkYear>
          <h4>2006 - 2009</h4>
        </WorkYear>
        <WorkExperienceFoo>
          <h4>Atlanten Videregående</h4>

          <li>Almenne studieretning</li>
        </WorkExperienceFoo> */}
      </EducationContainer>
    </>
  );
}

export default Education;
