import { useState } from "react";
import styled from "styled-components";

const SummaryContainer = styled.div`
  width: 70vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #ededed;
  height: 300px;
  @media (max-width: 800px) {
    width: 350px;
    align-items: center;
    padding: 0 40px;
  }
  @media print {
    padding: 1rem;
    width: 60vw;
    padding: 0;
  }
`;

const SummaryBox = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  flex-direction: column;
  max-width: 450px;
  margin: 0 auto;
`;

const SummaryHeadline = styled.h2`
  padding-bottom: 20px;
`;

const TextInput = styled.textarea`
  width: 320px;
  height: 60px;
  margin: 10px 0 10px 0;
  color: grey;
  &:focus {
    outline: none;
    border: 2px solid green;
  }
  @media (max-width: 645px) {
    width: 250px;
  }
`;

const SummaryInput = styled.p`
  width: 350px;
  max-width: 350px;
`;

function Summary() {
  const [summary, setSummary] = useState("Sammendrag");
  return (
    <SummaryContainer>
      <SummaryBox>
        <SummaryHeadline>Sammendrag</SummaryHeadline>
        <SummaryInput>{summary}</SummaryInput>
        <TextInput
          onChange={(e) => setSummary(e.target.value)}
          placeholder={summary}
          className="show"
          type="text"
        ></TextInput>
      </SummaryBox>
    </SummaryContainer>
  );
}

export default Summary;
