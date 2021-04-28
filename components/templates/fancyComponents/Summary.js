import { useState } from "react";
import styled from "styled-components";

const SummaryBox = styled.div`
  padding-left: 20px;
  @media (max-width: 700px) {
    padding-top: 20px;
  }
  @media print {
    padding-top: 0;
  }
`;

const SummaryParagraph = styled.p`
  padding: 5px 20px 0 0;
`;

const SummaryTextArea = styled.textarea`
  margin-top: 10px;
  width: 400px;
  height: 100px;

  &:focus {
    outline: none;
    border: 2px solid green;
  }

  @media (max-width: 700px) {
    width: 200px;
  }
`;

function Summary() {
  const [summary, setSummary] = useState("sammendrag");

  return (
    <>
      <SummaryBox>
        <h2>Sammendrag</h2>
        <SummaryParagraph>{summary}</SummaryParagraph>
        <SummaryTextArea
          onChange={(e) => setSummary(e.target.value)}
          placeholder="sammendrag"
          type="text"
          className="show"
        ></SummaryTextArea>
      </SummaryBox>
    </>
  );
}

export default Summary;
