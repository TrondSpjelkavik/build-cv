import { useState } from "react";
import AddImage from "./AddImage";

import styled from "styled-components";

const Headline = styled.h1`
  font-family: "Cormorant Garamond", serif;
  padding: 5px 0;
`;

const HeaderContent = styled.header`
  display: flex;
  color: white;
  padding: 40px 0;
`;

const ContactInfo = styled.div`
  color: white;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 40px;
`;

export const InputContainer = styled.input`
  border: none;
  border-bottom: 1px solid white;
  width: 200px;
  background: transparent;
  color: grey;

  &:focus {
    outline: none;
    border-bottom: 2px solid white;
  }

  @media (max-width: 645px) {
    width: 100px;
  }
`;

export const InputText = styled.div`
  padding: 5px 0;
`;

function Header() {
  const [title, setTitle] = useState("DITT NAVN");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [address, setAddress] = useState("");

  return (
    <HeaderContent>
      <AddImage />

      <ContactInfo>
        <Headline>{title}</Headline>
        <InputContainer
          onChange={(e) => setTitle(e.target.value.toUpperCase())}
          placeholder="Ditt navn"
          className="show"
          type="text"
        ></InputContainer>

        <InputText>{mobile}</InputText>
        <InputContainer
          onChange={(e) => setMobile(e.target.value)}
          placeholder="ex: +47 000000"
          className="show"
          type="tel"
        ></InputContainer>
        <InputText>{email}</InputText>
        <InputContainer
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ex: navn@email.com"
          className="show"
          type="email"
        ></InputContainer>
        <InputText>{linkedin}</InputText>
        <InputContainer
          onChange={(e) => setLinkedin(e.target.value)}
          placeholder="ex: www.linkedin.com/brukernavn"
          className="show"
          type="url"
        ></InputContainer>
        <InputText>{address}</InputText>
        <InputContainer
          onChange={(e) => setAddress(e.target.value)}
          placeholder="ex: adresse"
          className="show"
          type="text"
        ></InputContainer>
      </ContactInfo>
    </HeaderContent>
  );
}

export default Header;
