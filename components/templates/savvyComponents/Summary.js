import { useState } from "react";
import { Headlines } from "../Savvy";
import { TextInput } from "../originalComponents/KeyQualifications";

import styled from "styled-components";

const SummaryContent = styled.div`
  padding: 20px 20px 0px 20px;
  max-width: 700px;
`;

const SummaryInput = styled.p``;

function Summary() {
  const [summary, setSummary] = useState("Sammendrag");

  return (
    <SummaryContent>
      <Headlines>Sammendrag</Headlines>
      <SummaryInput>{summary}</SummaryInput>
      <TextInput
        onChange={(e) => setSummary(e.target.value)}
        placeholder={summary}
        className="show"
        type="text"
      ></TextInput>
    </SummaryContent>
  );
}

export default Summary;
