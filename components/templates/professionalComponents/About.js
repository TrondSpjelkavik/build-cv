import { useState } from "react";
import { ExperienceInput } from "../savvyComponents/WorkExperience";

import styled from "styled-components";

const ContactInfo = styled.div`
  padding: 5px 0;
  justify-content: space-around;
  display: flex;
  flex-direction: column;

  height: 250px;
`;

const ContactInput = styled.p`
  font-size: 14px;
`;

function About() {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [linkedin, setLinkedin] = useState("");

  return (
    <>
      <ContactInfo>
        <h4>Adresse</h4>
        <ContactInput>{address}</ContactInput>
        <ExperienceInput
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Gatenavn nummber"
          className="show"
          type="text"
        ></ExperienceInput>
        <ContactInput>{city}</ContactInput>
        <ExperienceInput
          onChange={(e) => setCity(e.target.value)}
          placeholder="Postnummer by"
          className="show"
          type="text"
        ></ExperienceInput>
        <h4>Telefon</h4>
        <ContactInput>{mobile}</ContactInput>
        <ExperienceInput
          onChange={(e) => setMobile(e.target.value)}
          placeholder="+47 0000000"
          className="show"
          type="tel"
        ></ExperienceInput>
        <h4>E-post</h4>
        <ContactInput>{email}</ContactInput>
        <ExperienceInput
          onChange={(e) => setEmail(e.target.value)}
          placeholder="epost@epost.no"
          className="show"
          type="email"
        ></ExperienceInput>
        <h4>Linkedin</h4>
        <ContactInput>{linkedin}</ContactInput>
        <ExperienceInput
          onChange={(e) => setLinkedin(e.target.value)}
          placeholder="www.linkedin.com/username"
          className="show"
          type="url"
        ></ExperienceInput>
      </ContactInfo>
    </>
  );
}

export default About;
