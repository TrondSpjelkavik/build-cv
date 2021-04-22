import { useState } from "react";

import styled from "styled-components";
import { AddButton } from "./Skills";

const EducationBox = styled.div`
  display: flex;

  flex-direction: column;
  word-break: break-word;
  padding: 5px 0 35px 25px;
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

const SchoolHeadline = styled.h4`
  font-weight: 400;
`;

function Other() {
  const [otherArr, setOtherArr] = useState([]);
  const [other, setOther] = useState("");

  function addOther(e) {
    e.preventDefault(e);

    setOtherArr([
      ...otherArr,
      {
        other: other,
        id: Math.random() * 1000,
      },
    ]);
    setOther("");
  }

  return (
    <>
      <EducationBox>
        <h2>Annet</h2>
        {otherArr.map((xp) => (
          <EducationInputBox key={xp.id}>
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                marginRight: "5px",
              }}
            >
              <SchoolHeadline>{xp.other}</SchoolHeadline>
              <RemoveButton
                onClick={() =>
                  setOtherArr(otherArr.filter((exp) => exp.id !== xp.id))
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
            onChange={(e) => setOther(e.target.value)}
            placeholder="Annet"
            value={other}
            type="text"
            className="show"
          ></ExperienceInput>

          <AddButton onClick={addOther} otherArr={otherArr} className="show">
            +
          </AddButton>
        </div>
      </EducationBox>
    </>
  );
}

export default Other;
