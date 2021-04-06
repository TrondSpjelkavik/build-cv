import { useState } from "react";

import styled from "styled-components";

const KeyHeadline = styled.h2`
  margin: 0px 0 0px 0;
  font-weight: 400;
  font-size: 18px;
`;

const KeyInput = styled.div`
  font-size: 16px;
`;

const TextInput = styled.textarea`
  width: 300px;
  height: 80px;
  margin: 10px 0 10px 0;
`;

const KeyValues = styled.div`
  margin: 10px 0;
`;

function KeyQualifications() {
  const [qualifications, setQualifications] = useState(
    "dine nøkkelkvalifikasjoner"
  );

  return (
    <>
      <KeyHeadline>NØKKELKVALIFIKASJONER</KeyHeadline>
      <KeyInput>
        {" "}
        <KeyValues>{qualifications}</KeyValues>
        <TextInput
          onChange={(e) => setQualifications(e.target.value)}
          placeholder={qualifications}
          className="show"
          type="text"
        ></TextInput>
      </KeyInput>
    </>
  );
}

export default KeyQualifications;