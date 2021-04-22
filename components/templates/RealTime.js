import ContactInfo from "./realtimeComponents/ContactInfo";
import Summary from "./realtimeComponents/Summary";
import Skills from "./realtimeComponents/Skills";
import Education from "./realtimeComponents/Education";
import Experience from "./realtimeComponents/Experience";
import Other from "./realtimeComponents/Other";
import Hamburger from "../utils/Hamburger";
import { MobileView } from "../FrontPage";

import styled from "styled-components";

const Container = styled.div`
  padding-top: 20px;
  background-color: lightgray;

  min-height: 100vh;
  @media print {
    padding-top: 0px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const UpperContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 300px;
  max-width: 800px;
  margin: 0 auto;
`;
const LowerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;

  max-width: 800px;
  margin: 0 auto;
`;

const ExperienceContainer = styled.div`
  width: 40vw;
  height: 820px;
  display: flex;
  flex-direction: column;
  background-color: #ededed;
`;

function RealTime() {
  return (
    <>
      <MobileView>
        {" "}
        Bruk en laptop eller datamaskin for å bruke denne siden
      </MobileView>
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
