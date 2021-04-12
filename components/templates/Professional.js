import React from "react";

import Header from "./professionalComponents/Header";
import Summary from "./professionalComponents/Summary";
import WorkExperience from "./professionalComponents/WorkExperience";
import Education from "./professionalComponents/Education";
import Other from "./professionalComponents/Other";
import About from "./professionalComponents/About";
import Experience from "./professionalComponents/Experience";
import Language from "./professionalComponents/Language";

import styled from "styled-components";

const Container = styled.main`
  min-height: 100vh;
  max-width: 800px;
  margin: 0 auto;
`;

const ContentContainer = styled.div`
  display: flex;
`;

const MainContainer = styled.div`
  width: 70%;
  padding: 0 20px;
`;

const AsideContainer = styled.aside`
  width: 30%;
  min-height: 90.7vh;
  background-color: #ececec;
`;

const PersonalInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 20px 20px 20px;
`;

const Address = styled.div``;

const RadioInput = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  font-size: 12px;
`;

function Professional() {
  return (
    <Container>
      <Header />
      <ContentContainer>
        <MainContainer>
          <Summary></Summary>
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
  );
}

export default Professional;
