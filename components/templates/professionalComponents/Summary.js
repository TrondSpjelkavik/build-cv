import { useState } from "react";

import styled from "styled-components";

const SummaryContent = styled.div``;

const SummaryText = styled.p`
  padding: 20px 0;
`;

const SummaryInput = styled.textarea`
  width: 520px;
  height: 100px;
  padding: 3px;
  @media (max-width: 792px) {
    width: 100%;
  }
`;

function Summary() {
  const [summary, setSummary] = useState("Sammendrag");

  return (
    <SummaryContent>
      <SummaryText>{summary}</SummaryText>
      <SummaryInput
        onChange={(e) => setSummary(e.target.value)}
        placeholder={summary}
        className="show"
        type="text"
      ></SummaryInput>
    </SummaryContent>
  );
}

export default Summary;
