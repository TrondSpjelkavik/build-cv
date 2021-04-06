import Header from "./originalComponents/Header";
import ContactInfo from "./originalComponents/ContactInfo";
import AddImage from "./originalComponents/AddImage";
import KeyQualifications from "./originalComponents/KeyQualifications";
import WorkExperience from "./originalComponents/WorkExperience";
import Education from "./originalComponents/Education";
import Courses from "./originalComponents/Courses";
import Other from "./originalComponents/Other";

import styled from "styled-components";

export const DetailsContainer = styled.table`
  margin: 20px 0;
  border-collapse: collapse;
  justify-content: space-around;
  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
export const SubContainer = styled.tr`
  align-items: center;
`;

export const ExperienceInfoParagraph = styled.td`
  padding: 5px 0;
  border-bottom: 1px solid black;
`;

export const ExperienceInfoParagraphHeadline = styled.td`
  padding: 5px 0;
  font-weight: 700;
  border-bottom: 3px solid black;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 700px;
  min-height: 100vh;
  position: relative;
`;

export const SubSubHeadline = styled.h2`
  margin: 10px 0px 0px 0px;
  font-weight: 400;
  font-size: 18px;
`;

export const Experience = styled.tbody`
  text-align: center;
`;

export const AddButton = styled.button`
  position: absolute;
  right: 0;
  background-color: green;
  color: white;
  font-size: 18px;
  padding: 0 3px 0 3px;
  border: none;
  box-shadow: 1px 1px 2px grey;
  cursor: pointer;
`;

export const InputContainer = styled.input`
  border: none;
  border-bottom: 1px solid black;
  &:focus {
    outline: none;
    border-bottom: 2px solid black;
  }
  &::placeholder {
    text-align: center;
  }
`;

function Original() {
  return (
    <Container>
      <Header />
      <ContactInfo />
      <AddImage />
      <KeyQualifications />
      <WorkExperience />
      <Education />
      <Courses />
      <Other />
    </Container>
  );
}

export default Original;
