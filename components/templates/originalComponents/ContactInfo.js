import { useState } from "react";
import { DetailsContainer, SubContainer } from "../Original";
import styled from "styled-components";

const ContactInfoParagraphHeadline = styled.td`
  padding-top: 5px;
  font-weight: 700;
`;

const ContactInfoParagraph = styled.td`
  padding-top: 5px;
  display: flex;
  width: 500px;
  justify-content: space-between;

  @media (max-width: 645px) {
    width: 350px;
  }
`;

const ContactInput = styled.input`
  border: none;
  border-bottom: 1px solid black;
  &:focus {
    outline: none;
    border-bottom: 2px solid black;
  }
`;

const ContentBody = styled.tbody`
  display: table-row-group;
  @media (max-width: 645px) {
    display: flex;
    flex-direction: column;
  }
  @media print {
    display: table-row-group; !important
  }
`;

function ContactInfo() {
  const [email, setEmail] = useState("email@email.no");
  const [mobile, setMobile] = useState("+47 00000000");
  const [dob, setDob] = useState("dato/måned/år");
  const [website, setWebsite] = useState("www.example.no");
  const [github, setGithub] = useState("Github/username");
  const [address, setAddress] = useState("adresse");

  return (
    <DetailsContainer>
      <ContentBody>
        <SubContainer>
          <ContactInfoParagraphHeadline>E-post:</ContactInfoParagraphHeadline>
          <ContactInfoParagraph>
            <div>{email}</div>
            <ContactInput
              onChange={(e) => setEmail(e.target.value)}
              placeholder={email}
              className="show"
              type="email"
            ></ContactInput>
          </ContactInfoParagraph>
        </SubContainer>

        <SubContainer>
          <ContactInfoParagraphHeadline>
            Telefonummer:
          </ContactInfoParagraphHeadline>
          <ContactInfoParagraph>
            {" "}
            <div>{mobile}</div>
            <ContactInput
              onChange={(e) => setMobile(e.target.value)}
              placeholder={mobile}
              className="show"
              type="tel"
            ></ContactInput>
          </ContactInfoParagraph>
        </SubContainer>
        <SubContainer>
          <ContactInfoParagraphHeadline>Født:</ContactInfoParagraphHeadline>
          <ContactInfoParagraph>
            {" "}
            <div>{dob}</div>
            <ContactInput
              onChange={(e) => setDob(e.target.value)}
              placeholder={dob}
              className="show"
              type="text"
            ></ContactInput>
          </ContactInfoParagraph>
        </SubContainer>
        <SubContainer>
          <ContactInfoParagraphHeadline>
            Hjemmeside:
          </ContactInfoParagraphHeadline>
          <ContactInfoParagraph>
            {" "}
            <div>{website}</div>
            <ContactInput
              onChange={(e) => setWebsite(e.target.value)}
              placeholder={website}
              className="show"
              type="url"
            ></ContactInput>
          </ContactInfoParagraph>
        </SubContainer>
        <SubContainer>
          <ContactInfoParagraphHeadline>Github:</ContactInfoParagraphHeadline>
          <ContactInfoParagraph>
            {" "}
            <div>{github}</div>
            <ContactInput
              onChange={(e) => setGithub(e.target.value)}
              placeholder={github}
              className="show"
              type="url"
            ></ContactInput>
          </ContactInfoParagraph>
        </SubContainer>
        <SubContainer>
          <ContactInfoParagraphHeadline>Adresse:</ContactInfoParagraphHeadline>
          <ContactInfoParagraph>
            {" "}
            <div>{address}</div>
            <ContactInput
              onChange={(e) => setAddress(e.target.value)}
              placeholder={address}
              className="show"
              type="text"
            ></ContactInput>
          </ContactInfoParagraph>
        </SubContainer>
      </ContentBody>
    </DetailsContainer>
  );
}

export default ContactInfo;
