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
  RemoveButton,
} from "../Original";

function Education() {
  const [schools, setSchools] = useState([]);
  const [schoolYear, setSchoolYear] = useState("");
  const [school, setSchool] = useState("");
  const [education, setEducation] = useState("");

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
    setSchool("");
    setEducation("");
    setSchoolYear("");
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
              <RemoveButton
                onClick={() =>
                  setSchools(schools.filter((test) => test.id !== xp.id))
                }
                className="show"
              >
                <div style={{ paddingBottom: "3px" }}>x</div>
              </RemoveButton>
            </SubContainer>
          ))}

          <SubContainer className="show">
            <ExperienceInfoParagraph>
              <InputContainer
                onChange={(e) => setSchoolYear(e.target.value)}
                placeholder="år"
                value={schoolYear}
                type="text"
              ></InputContainer>
            </ExperienceInfoParagraph>
            <ExperienceInfoParagraph>
              <InputContainer
                onChange={(e) => setSchool(e.target.value)}
                placeholder="skole"
                value={school}
                type="text"
              ></InputContainer>
            </ExperienceInfoParagraph>
            <ExperienceInfoParagraph>
              <InputContainer
                onChange={(e) => setEducation(e.target.value)}
                placeholder="studie"
                value={education}
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
