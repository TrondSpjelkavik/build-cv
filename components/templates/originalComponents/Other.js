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

function Other() {
  const [other, setOthers] = useState([]);
  const [hobbies, setHobbies] = useState("");
  const [certificates, setCertificates] = useState("");

  function addOthers(e) {
    e.preventDefault();

    setOthers([
      ...other,
      {
        hobbies: hobbies,
        certificates: certificates,
        id: Math.random() * 1000,
      },
    ]);
    setHobbies("");
    setCertificates("");
  }

  return (
    <>
      <SubSubHeadline>ANNET</SubSubHeadline>
      <DetailsContainer>
        <Experience>
          <SubContainer>
            <ExperienceInfoParagraphHeadline>
              Fritidsinteresser
            </ExperienceInfoParagraphHeadline>
            <ExperienceInfoParagraphHeadline>
              Sertifikater
            </ExperienceInfoParagraphHeadline>
          </SubContainer>

          {other.map((xp) => (
            <SubContainer key={xp.id}>
              <ExperienceInfoParagraph>{xp.hobbies}</ExperienceInfoParagraph>
              <ExperienceInfoParagraph>
                {xp.certificates}
              </ExperienceInfoParagraph>
              <RemoveButton
                onClick={() =>
                  setOthers(other.filter((test) => test.id !== xp.id))
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
                onChange={(e) => setHobbies(e.target.value)}
                placeholder="musikk, film og spill"
                value={hobbies}
                type="text"
              ></InputContainer>
            </ExperienceInfoParagraph>
            <ExperienceInfoParagraph>
              <InputContainer
                onChange={(e) => setCertificates(e.target.value)}
                placeholder="Personbil klasse B"
                value={certificates}
                type="text"
              ></InputContainer>
              <AddButton onClick={addOthers} className="show">
                +
              </AddButton>
            </ExperienceInfoParagraph>
          </SubContainer>
        </Experience>
      </DetailsContainer>
      <div style={{ marginBottom: "100px" }}></div>
    </>
  );
}

export default Other;
