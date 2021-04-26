import Header from "./savvyComponents/Header";
import Summary from "./savvyComponents/Summary";
import Skills from "./savvyComponents/Skills";
import WorkExperience from "./savvyComponents/WorkExperience";
import Education from "./savvyComponents/Education";

import Hamburger from "../utils/Hamburger";

import styled from "styled-components";

const Container = styled.main`
  background-color: #1c4966;
  min-height: 100vh;
  padding-left: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  @media (max-width: 645px) {
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
  }
  @media print {
    padding-left: 100px;
    display: block;
  }
`;

const Content = styled.div`
  background-color: white;
  min-height: 70vh;
  max-width: 700px;

  @media (max-width: 800px) {
    max-width: 500px;
  }
  @media (max-width: 645px) {
    max-width: 320px;
  }
  @media print {
    max-width: 700px;
  }
`;

export const Headlines = styled.h2`
  font-size: 28px;
  font-family: "Cormorant Garamond", serif;
`;

function Savvy() {
  // TODO: Add an information button about print graphics

  return (
    <>
      <Hamburger />
      <Container>
        <Header />
        <Content>
          <Summary />
          <Skills />
          <WorkExperience />
          <Education />
        </Content>
        <div className="show" style={{ paddingBottom: "100px" }}></div>
      </Container>
    </>
  );
}

export default Savvy;
