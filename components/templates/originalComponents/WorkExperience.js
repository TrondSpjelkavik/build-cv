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

function WorkExperience() {
  const [experience, setExperience] = useState([]);
  const [year, setYear] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");

  function addExperience(e) {
    e.preventDefault();
    setExperience([
      ...experience,
      {
        year: year,
        company: company,
        position: position,
        id: Math.random() * 1000,
      },
    ]);
    setYear("");
    setCompany("");
    setPosition("");
  }

  return (
    <>
      <SubSubHeadline>ARBEIDSERFARING</SubSubHeadline>
      <DetailsContainer>
        <Experience>
          <SubContainer>
            <ExperienceInfoParagraphHeadline>
              År
            </ExperienceInfoParagraphHeadline>
            <ExperienceInfoParagraphHeadline>
              Firma
            </ExperienceInfoParagraphHeadline>
            <ExperienceInfoParagraphHeadline>
              Tittel
            </ExperienceInfoParagraphHeadline>
          </SubContainer>

          {experience.map((xp) => (
            <SubContainer key={xp.id}>
              <ExperienceInfoParagraph>{xp.year}</ExperienceInfoParagraph>
              <ExperienceInfoParagraph>{xp.company}</ExperienceInfoParagraph>
              <ExperienceInfoParagraph>{xp.position}</ExperienceInfoParagraph>
            </SubContainer>
          ))}

          <SubContainer className="show">
            <ExperienceInfoParagraph>
              <InputContainer
                onChange={(e) => setYear(e.target.value)}
                placeholder="år"
                value={year}
                type="text"
              ></InputContainer>
            </ExperienceInfoParagraph>
            <ExperienceInfoParagraph>
              <InputContainer
                onChange={(e) => setCompany(e.target.value)}
                placeholder="firma"
                value={company}
                type="text"
              ></InputContainer>
            </ExperienceInfoParagraph>
            <ExperienceInfoParagraph>
              <InputContainer
                onChange={(e) => setPosition(e.target.value)}
                placeholder="tittel"
                value={position}
                type="text"
              ></InputContainer>
              <AddButton
                onClick={addExperience}
                experience={experience}
                className="show"
              >
                +
              </AddButton>
            </ExperienceInfoParagraph>
          </SubContainer>
        </Experience>
      </DetailsContainer>
    </>
  );
}

export default WorkExperience;
