import Original from "./templates/Original";

import styled from "styled-components";

const ResumeBox = styled.main`
  border: 2px solid black;
  display: table;
  max-width: 320px;
`;

function BuildCv() {
  return (
    <div>
      <ResumeBox>
        <Original></Original>
      </ResumeBox>
    </div>
  );
}

export default BuildCv;
