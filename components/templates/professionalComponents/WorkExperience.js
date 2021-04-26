import { useState } from "react";

import { AddButton } from "../savvyComponents/Skills";
import styled from "styled-components";

const WorkExperienceContainer = styled.div`
  padding: 5px 0 5px 0;
  display: flex;
  @media (max-width: 800px) {
    flex-direction: column;
  }
  @media print {
    flex-direction: row;
  }
`;
const WorkYear = styled.aside`
  width: 25%;
  word-break: break-word;
  max-width: 100px;
`;
const WorkExperienceContent = styled.div`
  width: 100%;
  @media (max-width: 800px) {
    padding-left: 10px;
  }

  @media print {
    width: 100%;
    padding-left: 0px;
  }
`;

const Foo = styled.div`
  .company-input {
    margin-left: 10px;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 50px;
    .company-input {
      margin-left: 0px;
    }
  }
  @media print {
    height: 0px;
  }
`;

export const ContentHeadlines = styled.h3`
  padding: 10px 0;
  border-bottom: 1px solid grey;
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
    border-bottom: 2px solid black;
  }
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
  @media (max-width: 800px) {
    width: 20px;
  }
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
          <div style={{ display: "flex" }}>
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
          </div>
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
          <Foo>
            <ExperienceInput
              onChange={(e) => setPosition(e.target.value)}
              placeholder="Stilling"
              value={position}
              type="text"
              className="show"
            ></ExperienceInput>
            <ExperienceInput
              onChange={(e) => setCompany(e.target.value)}
              placeholder="firma"
              value={company}
              type="text"
              className="show company-input"
            ></ExperienceInput>
          </Foo>

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
