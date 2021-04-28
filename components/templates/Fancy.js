import Header from "./fancyComponents/Header";
import ContactInfo from "./fancyComponents/ContactInfo";
import Education from "./fancyComponents/Education";
import Skills from "./fancyComponents/Skills";
import Summary from "./fancyComponents/Summary";
import Experience from "./fancyComponents/Experience";

import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  max-width: 800px;
  margin: 0 auto;
`;

const ContentContainer = styled.div`
  display: flex;
  padding: 40px 0;
  @media (max-width: 700px) {
    flex-direction: column;
  }
  @media print {
    flex-direction: row;
  }
`;

const LeftContainer = styled.div`
  width: 30vw;
  height: fit-content;
  @media (max-width: 700px) {
    width: 320px;
  }
  @media print {
    width: 30vw;
  }
`;

const RightContainer = styled.div`
  width: 70vw;
  height: fit-content;
  border-left: 3px solid #f05408;
  @media (max-width: 700px) {
    width: 300px;
  }
  @media print {
    width: 70vw;
  }
`;

function Fancy() {
  return (
    <Container>
      <Header></Header>
      <ContentContainer>
        <LeftContainer>
          <ContactInfo></ContactInfo>
          <Education></Education>
          <Skills></Skills>
        </LeftContainer>
        <RightContainer>
          <Summary></Summary>
          <Experience></Experience>
        </RightContainer>
      </ContentContainer>
    </Container>
  );
}

export default Fancy;
