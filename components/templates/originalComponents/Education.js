import { useState } from "react";
import {
  DetailsContainer,
  SubSubHeadline,
  SubContainer,
  Experience,
  ExperienceInfoParagraph,
  ExperienceInfoParagraphHeadline,
  AddButton,
  InputContainer,
} from "../Original";

function Education() {
  const [schools, setSchools] = useState([]);
  const [schoolYear, setSchoolYear] = useState("år");
  const [school, setSchool] = useState("skole");
  const [education, setEducation] = useState("studie");

  function addSchool(e) {
    e.preventDefault();
    setSchools([
      ...schools,
      {
        year: schoolYear,
        school: school,
        education: education,
        id: Math.random() * 1000,
      },
    ]);
  }

  return (
    <>
      <SubSubHeadline>UTDANNING</SubSubHeadline>
      <DetailsContainer>
        <Experience>
          <SubContainer>
            <ExperienceInfoParagraphHeadline>
              År
            </ExperienceInfoParagraphHeadline>
            <ExperienceInfoParagraphHeadline>
              Skole
            </ExperienceInfoParagraphHeadline>
            <ExperienceInfoParagraphHeadline>
              Studie
            </ExperienceInfoParagraphHeadline>
          </SubContainer>

          {schools.map((xp) => (
            <SubContainer key={xp.id}>
              <ExperienceInfoParagraph>{xp.year}</ExperienceInfoParagraph>
              <ExperienceInfoParagraph>{xp.school}</ExperienceInfoParagraph>
              <ExperienceInfoParagraph>{xp.education} </ExperienceInfoParagraph>
            </SubContainer>
          ))}

          <SubContainer className="show">
            <ExperienceInfoParagraph>
              <InputContainer
                onChange={(e) => setSchoolYear(e.target.value)}
                placeholder={schoolYear}
                type="text"
              ></InputContainer>
            </ExperienceInfoParagraph>
            <ExperienceInfoParagraph>
              <InputContainer
                onChange={(e) => setSchool(e.target.value)}
                placeholder={school}
                type="text"
              ></InputContainer>
            </ExperienceInfoParagraph>
            <ExperienceInfoParagraph>
              <InputContainer
                onChange={(e) => setEducation(e.target.value)}
                placeholder={education}
                type="text"
              ></InputContainer>
              <AddButton onClick={addSchool} schools={schools} className="show">
                +
              </AddButton>
            </ExperienceInfoParagraph>
          </SubContainer>
        </Experience>
      </DetailsContainer>
    </>
  );
}

export default Education;
