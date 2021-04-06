import { useState } from "react";

import styled from "styled-components";

const KeyHeadline = styled.h2`
  margin: 20px 0;
  font-weight: 400;
  font-size: 20px;
`;

const KeyInput = styled.div`
  font-size: 18px;
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
        <div>{qualifications}</div>
        <textarea
          style={{ width: "300px", height: "150px", marginTop: "20px" }}
          onChange={(e) => setQualifications(e.target.value)}
          placeholder={qualifications}
          className="show"
          type="text"
        ></textarea>
      </KeyInput>
    </>
  );
}

export default KeyQualifications;
