import {
  DetailsContainer,
  SubSubHeadline,
  SubContainer,
  Experience,
  ExperienceInfoParagraph,
  ExperienceInfoParagraphHeadline,
} from "../Original";

import styled from "styled-components";

const Reference = styled.p`
  font-size: 20px;
  padding: 50px 0;
`;

function Other() {
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
          <SubContainer>
            <ExperienceInfoParagraph>
              Trening, kosthold, sport og musikk
            </ExperienceInfoParagraph>
            <ExperienceInfoParagraph>
              Personbil klasse B
            </ExperienceInfoParagraph>
          </SubContainer>
        </Experience>
      </DetailsContainer>
      <Reference>Referanser oppgis ved forespørsel</Reference>
    </>
  );
}

export default Other;
