import { useState } from "react";

import styled from "styled-components";

import { BsFillHouseFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { FaMobileAlt, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";

const ContactBox = styled.div`
  padding: 0 15px 0 15px;
`;

const ContactInfoContainer = styled.div`
  max-width: 30vw;
  word-break: break-word;
`;

const ContactInfoParagraph = styled.p`
  padding-left: 15px;
`;

const ContactInfoContent = styled.div`
  display: flex;
  padding-top: 5px;
`;

const ContactInfoIcon = styled.div`
  margin-top: 2px;
`;

const ContactInfoLink = styled.a`
  text-decoration: underline;
  color: black;
`;

const ContactInfoInput = styled.input`
  border: none;
  border-bottom: 1px solid black;
  padding-top: 10px;
  &:focus {
    outline: none;
    border-bottom: 2px solid green;
  }
`;

function ContactInfo() {
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [linkedin, setLinkedin] = useState("");

  return (
    <>
      <ContactBox>
        <ContactInfoContainer>
          <ContactInfoContent>
            <ContactInfoIcon>
              <BsFillHouseFill />
            </ContactInfoIcon>
            <ContactInfoParagraph>{address}</ContactInfoParagraph>
          </ContactInfoContent>
          <ContactInfoContent>
            <ContactInfoIcon>
              <HiLocationMarker></HiLocationMarker>
            </ContactInfoIcon>
            <ContactInfoParagraph>{location}</ContactInfoParagraph>
          </ContactInfoContent>
          <ContactInfoContent>
            <ContactInfoIcon>
              <FaMobileAlt></FaMobileAlt>
            </ContactInfoIcon>
            <ContactInfoParagraph>{mobile}</ContactInfoParagraph>
          </ContactInfoContent>
          <ContactInfoContent>
            <ContactInfoIcon>
              <MdEmail></MdEmail>
            </ContactInfoIcon>
            <ContactInfoParagraph>{email}</ContactInfoParagraph>
          </ContactInfoContent>
          <ContactInfoContent>
            <ContactInfoIcon>
              <CgWebsite></CgWebsite>
            </ContactInfoIcon>
            <ContactInfoParagraph>
              <ContactInfoLink href={portfolio}>Portfolio</ContactInfoLink>
            </ContactInfoParagraph>
          </ContactInfoContent>
          <ContactInfoContent>
            <ContactInfoIcon>
              <FaLinkedin></FaLinkedin>
            </ContactInfoIcon>
            <ContactInfoParagraph>
              {" "}
              <ContactInfoLink href={linkedin}>Linkedin</ContactInfoLink>
            </ContactInfoParagraph>
          </ContactInfoContent>
        </ContactInfoContainer>
        <div>
          <ContactInfoInput
            onChange={(e) => setAddress(e.target.value)}
            placeholder="adresse"
            className="show"
            type="text"
          ></ContactInfoInput>
          <ContactInfoInput
            onChange={(e) => setLocation(e.target.value)}
            placeholder="postnummer / by"
            className="show"
            type="text"
          ></ContactInfoInput>
          <ContactInfoInput
            onChange={(e) => setMobile(e.target.value)}
            placeholder="telefonnummer"
            className="show"
            type="tel"
          ></ContactInfoInput>
          <ContactInfoInput
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e-post"
            className="show"
            type="email"
          ></ContactInfoInput>

          <ContactInfoInput
            onChange={(e) => setPortfolio(e.target.value)}
            placeholder="https://www.hjemmeside.no"
            className="show"
            type="url"
          ></ContactInfoInput>
          <ContactInfoInput
            onChange={(e) => setLinkedin(e.target.value)}
            placeholder="https://www.linkedin.com/"
            className="show"
            type="url"
          ></ContactInfoInput>
        </div>
      </ContactBox>
    </>
  );
}

export default ContactInfo;
