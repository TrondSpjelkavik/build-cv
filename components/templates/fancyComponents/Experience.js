import { useState } from "react";
import styled from "styled-components";
import { RemoveButton } from "../realtimeComponents/Experience";

const ExperienceBox = styled.div`
  padding: 20px 0 0 20px;
`;

const ExperienceContent = styled.div`
  padding: 10px 0;
`;

const CompanyText = styled.p`
  padding-top: 5px;
`;

const YearLocation = styled.div`
  display: flex;
  font-style: italic;
  padding-top: 5px;
`;

const Slash = styled.p`
  padding: 0 10px 0 10px;
`;

const PositionInfo = styled.div`
  padding-top: 5px;
  width: 400px;

  font-size: 14px;
  textarea {
    width: 350px;
    height: 80px;
    &:focus {
      outline: none;
      border: 2px solid green;
    }
  }
`;

const AddButton = styled.button`
  border: 0;
  padding: 0 2px;
  background-color: green;
  color: white;
  font-size: 20px;
  height: 22px;
  margin-left: 10px;
  cursor: pointer;
  position: relative;
  top: -3px;
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

function Experience() {
  const [experience, setExperience] = useState([]);
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [year, setYear] = useState("");
  const [location, setLocation] = useState("");
  const [info, setInfo] = useState("");

  function addExperience(e) {
    e.preventDefault(e);

    setExperience([
      ...experience,
      {
        company: company,
        position: position,
        year: year,
        location: location,
        info: info,
        id: Math.random() * 1000,
      },
    ]),
      setCompany("");
    setPosition("");
    setYear("");
    setLocation("");
    setInfo("");
  }

  return (
    <>
      <ExperienceBox>
        <h2>Erfaring</h2>
        {experience.map((xp) => (
          <ExperienceContent key={xp.id}>
            <h4>{xp.company}</h4>
            <CompanyText>{xp.position}</CompanyText>
            <YearLocation>
              <p>{xp.year}</p> <Slash>/</Slash>
              <p>{xp.location}</p>
            </YearLocation>
            <div style={{ display: "flex" }}>
              <PositionInfo>{xp.info}</PositionInfo>
              <RemoveButton
                onClick={() =>
                  setExperience(experience.filter((exp) => exp.id !== xp.id))
                }
                className="show"
              >
                X
              </RemoveButton>
            </div>
          </ExperienceContent>
        ))}
      </ExperienceBox>
      <ExperienceBox>
        <ExperienceContent>
          <ExperienceInput
            onChange={(e) => setCompany(e.target.value)}
            placeholder="firma"
            value={company}
            type="text"
            className="show"
          ></ExperienceInput>
          <CompanyText>
            {" "}
            <ExperienceInput
              onChange={(e) => setPosition(e.target.value)}
              placeholder="stilling"
              value={position}
              type="text"
              className="show"
            ></ExperienceInput>
          </CompanyText>
          <YearLocation>
            <p>
              {" "}
              <ExperienceInput
                onChange={(e) => setYear(e.target.value)}
                placeholder="år"
                value={year}
                type="text"
                className="show"
              ></ExperienceInput>
            </p>{" "}
            <Slash></Slash>
            <p>
              {" "}
              <ExperienceInput
                onChange={(e) => setLocation(e.target.value)}
                placeholder="by / fylke"
                value={location}
                type="text"
                className="show"
              ></ExperienceInput>
            </p>
          </YearLocation>
          <PositionInfo>
            {" "}
            <textarea
              onChange={(e) => setInfo(e.target.value)}
              placeholder="detaljer"
              value={info}
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
          </PositionInfo>
        </ExperienceContent>
      </ExperienceBox>
    </>
  );
}

export default Experience;
