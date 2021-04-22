import { useState } from "react";

import styled from "styled-components";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";

const ContactInfoBox = styled.div`
  width: 40vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #c7c7c7;
`;

const InfoBox = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100%;
  flex-direction: column;
  word-break: break-word;
  padding: 35px 0 35px 25px;
`;

const IconBox = styled.div`
  background-color: white;
  padding: 6px;
  border-radius: 50%;
  display: flex;
  align-item: center;
`;

const Headline = styled.h1``;

const Underline = styled.div`
  height: 2px;
  width: 40px;
  background-color: black;
`;

const ContactParagraph = styled.div`
  display: flex;
  align-items: center;
`;

const ContactText = styled.p`
  padding-left: 12px;
`;

const InputContainer = styled.input`
  border: none;
  border-bottom: 1px solid white;
  width: 180px;
  background: transparent;
  color: black;
  margin: 10px 0 10px 12px;

  &:focus {
    outline: none;
    border-bottom: 2px solid green;
  }

  @media (max-width: 645px) {
    width: 100px;
  }
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
`;

function ContactInfo() {
  const [title, setTitle] = useState("Ditt navn");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");

  return (
    <ContactInfoBox>
      <InfoBox>
        <Headline>{title}</Headline>

        <Underline />
        <InputContainer
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Ditt navn"
          className="show"
          type="text"
        ></InputContainer>
        <ContactParagraph>
          <IconBox>
            <MdEmail style={{ color: "#025A0B" }} />
          </IconBox>
          <InputBox>
            <ContactText>{email}</ContactText>
            <InputContainer
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-post"
              className="show"
              type="email"
            ></InputContainer>
          </InputBox>
        </ContactParagraph>
        <ContactParagraph>
          <IconBox>
            <FaMobileAlt style={{ color: "#025A0B" }} />
          </IconBox>
          <InputBox>
            <ContactText>{mobile}</ContactText>
            <InputContainer
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Telefonnummer"
              className="show"
              type="tel"
            ></InputContainer>
          </InputBox>
        </ContactParagraph>
        <ContactParagraph>
          <IconBox>
            <MdLocationOn style={{ color: "#025A0B" }} />
          </IconBox>

          <InputBox>
            <ContactText>{address}</ContactText>
            <InputContainer
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Adresse"
              className="show"
              type="text"
            ></InputContainer>
          </InputBox>
        </ContactParagraph>
      </InfoBox>
    </ContactInfoBox>
  );
}

export default ContactInfo;
