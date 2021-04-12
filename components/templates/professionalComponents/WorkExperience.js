import { useState } from "react";

import { ExperienceInput } from "../savvyComponents/WorkExperience";
import { AddButton } from "../savvyComponents/Skills";
import styled from "styled-components";

const WorkExperienceContainer = styled.div`
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

export const ContentHeadlines = styled.h3`
  padding: 10px 0;
  border-bottom: 1px solid grey;
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

// TODO: CLEAN UP

function WorkExperience() {
  const [experience, setExperience] = useState([]);
  const [company, setCompany] = useState("");
  const [year, setYear] = useState("");
  const [position, setPosition] = useState("");
  const [detail, setDetail] = useState("");

  function addExperience(e) {
    e.preventDefault(e);

    setExperience([
      ...experience,
      {
        company: company,
        year: year,
        detail: detail,
        position: position,
        id: Math.random() * 1000,
      },
    ]);
    setCompany("");
    setYear("");
    setDetail("");
    setPosition("");
  }

  return (
    <>
      <ContentHeadlines
        style={{
          padding: "10px 0",
          borderBottom: "1px solid grey",
        }}
      >
        Arbeidserfaring
      </ContentHeadlines>

      {experience.map((xp) => (
        <WorkExperienceContainer key={xp.id}>
          <WorkYear>
            <h4 value={xp.year}>{xp.year}</h4>
          </WorkYear>

          <WorkExperienceContent>
            <h4 value={xp.position}>{xp.position}</h4>
            <p
              style={{ fontStyle: "italic", padding: "5px 0" }}
              value={xp.company}
            >
              {xp.company}
            </p>
            <li value={xp.detail}>{xp.detail}</li>
          </WorkExperienceContent>
          <RemoveButton
            onClick={() =>
              setExperience(experience.filter((exp) => exp.id !== xp.id))
            }
            className="show"
          >
            X
          </RemoveButton>
        </WorkExperienceContainer>
      ))}

      <WorkExperienceContainer>
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
            onChange={(e) => setPosition(e.target.value)}
            placeholder="Stilling"
            value={position}
            type="text"
            className="show"
          ></ExperienceInput>
          <ExperienceInput
            style={{ marginLeft: "20px" }}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="firma"
            value={company}
            type="text"
            className="show"
          ></ExperienceInput>

          <ExperienceInput
            style={{ marginTop: "20px" }}
            onChange={(e) => setDetail(e.target.value)}
            placeholder="Detaljer"
            value={detail}
            type="text"
            className="show"
          ></ExperienceInput>
          <AddButton
            onClick={addExperience}
            experience={experience}
            className="show"
          >
            +
          </AddButton>
        </WorkExperienceContent>
      </WorkExperienceContainer>
    </>
  );
}

export default WorkExperience;
