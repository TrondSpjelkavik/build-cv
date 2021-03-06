import React from "react";

import Header from "./professionalComponents/Header";
import Summary from "./professionalComponents/Summary";
import WorkExperience from "./professionalComponents/WorkExperience";
import Education from "./professionalComponents/Education";
import Other from "./professionalComponents/Other";
import About from "./professionalComponents/About";
import Experience from "./professionalComponents/Experience";
import Language from "./professionalComponents/Language";

import Hamburger from "../utils/Hamburger";

import styled from "styled-components";

const Container = styled.main`
  min-height: 100vh;
  max-width: 800px;
  margin: 0 auto;
`;

const ContentContainer = styled.div`
  display: flex;
  @media (max-width: 800px) {
    flex-direction: column;
  }
  @media print {
    flex-direction: row;
  }
`;

const MainContainer = styled.div`
  width: 70%;
  padding: 0 20px;
  @media (max-width: 800px) {
    width: 100%;
    margin: 0 auto;
  }
`;

const AsideContainer = styled.aside`
  width: 30%;
  min-height: 90.7vh;
  background-color: #ececec;
  @media (max-width: 800px) {
    width: 100%;
    margin: 0 auto;
  }
  @media print {
    width: 30%;
  }
`;

const PersonalInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 20px 20px 20px;
`;

function Professional() {
  return (
    <>
      <Container>
        <Hamburger />
        <Header />
        <ContentContainer>
          <MainContainer>
            <Summary />
            <WorkExperience />
            <Education />
            <Other />
          </MainContainer>
          <AsideContainer>
            <PersonalInfo>
              <About />
              <Experience />
              <Language />
            </PersonalInfo>
          </AsideContainer>
        </ContentContainer>
      </Container>
    </>
  );
}

export default Professional;
