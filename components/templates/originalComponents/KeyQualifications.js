import { useState } from "react";

import styled from "styled-components";

const KeyHeadline = styled.h2`
  margin: 0px 0 0px 0;
  font-weight: 400;
  font-size: 18px;
  @media (max-width: 645px) {
    margin-left: 20px;
  }
  @media print {
    margin-left: 0px; !important
  }
`;

const KeyInput = styled.div`
  font-size: 16px;
  @media (max-width: 645px) {
    margin-left: 20px;
  }
  @media print {
    margin-left: 0px; !important
  }
`;

export const TextInput = styled.textarea`
  width: 300px;
  height: 80px;
  margin: 10px 0 10px 0;
  color: grey;
  @media (max-width: 645px) {
    width: 250px;
  }
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
