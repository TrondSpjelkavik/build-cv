import { useState } from "react";

import styled from "styled-components";

const WorkHistory = styled.div`
  width: 70vw;
  display: flex;
  flex-direction: column;
  background-color: white;
  height: 820px;
  @media (max-width: 800px) {
    flex-direction: column;
    width: 350px;
    height: fit-content;
    padding-bottom: 40px;
    justify-content: center;
    margin-bottom: 100px;
  }
  @media print {
    flex-direction: row;
    justify-content: flex-start;
    width: 1200px;
    height: 830px;
    padding-bottom: 0px;
  }
`;

const ExperienceContainer = styled.div`
  padding: 35px 0 0 50px;
  @media print {
    width: 400px;
  }
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

const YearInput = styled.input`
  border: none;
  border-bottom: 1px solid black;
  width: 100px;
  margin-left: 10px;
  background: transparent;
  color: grey;

  &:focus {
    outline: none;
    border-bottom: 2px solid green;
  }
`;

const AddButton = styled.button`
  border: 0;
  padding: 0 2px;
  background-color: green;
  color: white;
  font-size: 22px;
  height: 25px;
  margin-left: 10px;
  cursor: pointer;
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

function Experience() {
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
    <WorkHistory>
      <ExperienceContainer>
        <h2>Erfaring</h2>
        {experience.map((xp) => (
          <div key={xp.id} style={{ paddingTop: "20px" }}>
            <h4>{xp.company}</h4>
            <li
              style={{
                listStyle: "none",
                fontSize: "14px",
                fontStyle: "italic",
              }}
            >
              {xp.year}
            </li>
            <div style={{ display: "flex" }}>
              <ul
                style={{
                  paddingLeft: "20px",
                  marginRight: "5px",
                  maxWidth: "400px",
                  wordBreak: "break-word",
                }}
              >
                <li>{xp.detail}</li>
              </ul>
              <RemoveButton
                onClick={() =>
                  setExperience(experience.filter((exp) => exp.id !== xp.id))
                }
                className="show"
              >
                X
              </RemoveButton>
            </div>
          </div>
        ))}
        <div style={{ paddingTop: "20px" }}>
          <ExperienceInput
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Firma"
            value={company}
            type="text"
            className="show"
          ></ExperienceInput>
          <YearInput
            onChange={(e) => setYear(e.target.value)}
            placeholder="År"
            value={year}
            type="text"
            className="show"
          ></YearInput>
          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <textarea
              style={{
                width: "260px",
                marginTop: "10px",
                height: "70px",
              }}
              onChange={(e) => setDetail(e.target.value)}
              placeholder="Detailjer"
              value={detail}
              type="text"
              className="show"
            ></textarea>
            <AddButton
              onClick={addExperience}
              education={experience}
              className="show"
            >
              +
            </AddButton>
          </div>
        </div>
      </ExperienceContainer>
    </WorkHistory>
  );
}

export default Experience;
