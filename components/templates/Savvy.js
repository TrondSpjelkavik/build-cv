import Header from "./savvyComponents/Header";
import Summary from "./savvyComponents/Summary";
import Skills from "./savvyComponents/Skills";
import WorkExperience from "./savvyComponents/WorkExperience";
import Education from "./savvyComponents/Education";

import styled from "styled-components";

const Container = styled.main`
  background-color: #1c4966;
  min-height: 100vh;
  padding-left: 100px;
`;

const Content = styled.div`
  background-color: white;
  min-height: 70vh;
  max-width: 700px;
`;

export const Headlines = styled.h2`
  font-size: 28px;
  font-family: "Cormorant Garamond", serif;
`;

function Savvy() {
  return (
    <Container>
      <Header />
      <Content>
        <Summary />
        <Skills />
        <WorkExperience />
        <Education />
      </Content>
    </Container>
  );
}

export default Savvy;
