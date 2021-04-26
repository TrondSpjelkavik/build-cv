import ContactInfo from "./realtimeComponents/ContactInfo";
import Summary from "./realtimeComponents/Summary";
import Skills from "./realtimeComponents/Skills";
import Education from "./realtimeComponents/Education";
import Experience from "./realtimeComponents/Experience";
import Other from "./realtimeComponents/Other";
import Hamburger from "../utils/Hamburger";

import styled from "styled-components";

const Container = styled.div`
  padding-top: 20px;
  background-color: lightgray;

  min-height: 100vh;

  @media print {
    padding-top: 0px;
  }
`;

const UpperContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 300px;
  max-width: 800px;
  margin: 0 auto;
  @media (max-width: 800px) {
    flex-direction: column;
    width: 400px;
    height: fit-content;
    justify-content: center;
  }
  @media print {
    flex-direction: row;
    width: 1700px;
    height: 300px;
  }
`;
const LowerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;

  max-width: 800px;
  margin: 0 auto;
  @media (max-width: 800px) {
    flex-direction: column;
    width: 400px;

    justify-content: center;
  }
  @media print {
    flex-direction: row;
    width: 100vw;
    height: 830px;
  }
`;

const ExperienceContainer = styled.div`
  width: 40vw;
  height: 820px;
  display: flex;
  flex-direction: column;
  background-color: #ededed;
  @media (max-width: 800px) {
    flex-direction: column;
    width: 350px;
    height: fit-content;
    justify-content: center;
  }
  @media print {
    height: 830px;
    width: 40vw;
  }
`;

function RealTime() {
  return (
    <>
      <Container>
        <Hamburger />
        <UpperContainer>
          <ContactInfo />
          <Summary />
        </UpperContainer>
        <LowerContainer>
          <ExperienceContainer>
            <Skills />
            <Education />
            <Other />
          </ExperienceContainer>
          <Experience />
        </LowerContainer>
      </Container>
    </>
  );
}

export default RealTime;
