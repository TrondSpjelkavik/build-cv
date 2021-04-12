import { useState } from "react";

import { ExperienceInput } from "../savvyComponents/WorkExperience";
import { AddButton } from "../savvyComponents/Skills";
import styled from "styled-components";

const WorkExperienceFoo = styled.div`
  width: 75%;
`;

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

function Other() {
  const [other, setOther] = useState([]);
  const [year, setYear] = useState("");
  const [detail, setDetail] = useState("");

  function addOther(e) {
    e.preventDefault(e);

    setOther([
      ...other,
      {
        year: year,
        detail: detail,
        id: Math.random() * 1000,
      },
    ]);
    setYear("");
    setDetail("");
  }

  return (
    <>
      <h3 style={{ padding: "10px 0", borderBottom: "1px solid grey" }}>
        Annet
      </h3>
      {other.map((xp) => (
        <WorkExperienceContainer key={xp.id}>
          <WorkYear>
            <h4 value={xp.year}>{xp.year}</h4>
          </WorkYear>
          <WorkExperienceContent>
            <h4 value={xp.detail}>{xp.detail}</h4>
          </WorkExperienceContent>
          <RemoveButton
            onClick={() => setOther(other.filter((exp) => exp.id !== xp.id))}
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
            onChange={(e) => setDetail(e.target.value)}
            placeholder="Detaljer"
            value={detail}
            type="text"
            className="show"
          ></ExperienceInput>

          <AddButton onClick={addOther} other={other} className="show">
            +
          </AddButton>
        </WorkExperienceContent>
      </EducationContainer>

      {/* <WorkExperienceContainer>
        <WorkYear>
          <h4>2010</h4>
        </WorkYear>
        <WorkExperienceFoo>
          <h4>Brønnteknikk VG2</h4>
        </WorkExperienceFoo>
      </WorkExperienceContainer>
      <WorkExperienceContainer>
        <WorkYear>
          <h4>2014</h4>
        </WorkYear>
        <WorkExperienceFoo>
          <h4>CRM</h4>
        </WorkExperienceFoo>
      </WorkExperienceContainer>
      <WorkExperienceContainer>
        <WorkYear>
          <h4> 2009 - </h4>
        </WorkYear>
        <WorkExperienceFoo>
          <h4>Førerkort klasse B</h4>
        </WorkExperienceFoo>
      </WorkExperienceContainer> */}
    </>
  );
}

export default Other;
