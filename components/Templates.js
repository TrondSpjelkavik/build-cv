import { useState } from "react";
import Link from "next/link";
import { Container } from "./Selection";
import Hamburger from "../components/utils/Hamburger";

import styled from "styled-components";

const TemplateProfessional = styled.img`
  height: ${({ openPro }) => (openPro ? "612px" : "312px")};
  width: ${({ openPro }) => (openPro ? "433px" : "216px")};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  transition: 0.4s linear;
  cursor: ${({ openPro }) => (openPro ? "default" : "pointer")};

  z-index: ${({ openPro }) => (openPro ? "999" : "10")};
`;

const TemplateOriginal = styled.img`
  height: ${({ openOrg }) => (openOrg ? "612px" : "312px")};
  width: ${({ openOrg }) => (openOrg ? "433px" : "216px")};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  transition: 0.4s linear;
  cursor: ${({ openOrg }) => (openOrg ? "default" : "pointer")};
  z-index: ${({ openOrg }) => (openOrg ? "999" : "10")};
`;

const TemplateSavvy = styled.img`
  height: ${({ openSavvy }) => (openSavvy ? "612px" : "312px")};
  width: ${({ openSavvy }) => (openSavvy ? "433px" : "216px")};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  transition: 0.4s linear;
  cursor: ${({ openSavvy }) => (openSavvy ? "default" : "pointer")};
`;

const Images = styled.div`
  display: flex;
  width: 800px;
  height: 80vh;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
`;

const SelectionHeadline = styled.h1`
  text-align: center;
  padding-top: 2rem;
`;

const RightMan = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
`;

const LeftWoman = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
`;

const CloseIconOrg = styled.div`
  display: ${({ openOrg }) => (openOrg ? "flex" : "none")};
  padding: 5px;
  border: 0.5px solid black;
  background: black;
  color: white;
  position: absolute;
  font-size: 12px;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;
const CloseIconPro = styled.div`
  display: ${({ openPro }) => (openPro ? "flex" : "none")};
  padding: 5px;
  border: 0.5px solid black;
  background: black;
  color: white;
  position: absolute;
  font-size: 12px;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const CloseIconSavvy = styled.div`
  display: ${({ openSavvy }) => (openSavvy ? "flex" : "none")};
  padding: 5px;
  border: 0.5px solid black;
  background: black;
  color: white;
  position: absolute;
  font-size: 12px;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const OriginalBox = styled.div`
  position: relative;
  z-index: 9999;
  opacity: ${({ openSavvy }) => (openSavvy ? "0" : "1")};
  display: ${({ openPro }) => (openPro ? "none" : "block")};
`;

const ProfessionalBox = styled.div`
  position: relative;
  z-index: 9999;
  display: ${({ openSavvy }) => (openSavvy ? "none" : "block")};
  opacity: ${({ openOrg }) => (openOrg ? "0" : "1")};
`;

const SavvyBox = styled.div`
  position: relative;
  display: ${({ openOrg }) => (openOrg ? "none" : "block")};
  opacity: ${({ openPro }) => (openPro ? "0" : "1")};
  z-index: 9999;
`;

const OriginalButtons = styled.div`
  display: ${({ openOrg }) => (openOrg ? "flex" : "none")};
  width: 100%;
  justify-content: space-around;
  position: absolute;

  top: 50%;
  transform: translateY(-50%);
  button {
    padding: 0.7rem 1rem 0.7rem 1rem;
    background-color: darkgreen;
    color: white;
    border: none;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    cursor: pointer;
  }
`;

const SavvyButtons = styled.div`
  display: ${({ openSavvy }) => (openSavvy ? "flex" : "none")};
  width: 100%;
  justify-content: space-around;
  position: absolute;

  top: 50%;
  transform: translateY(-50%);
  button {
    padding: 0.7rem 1rem 0.7rem 1rem;
    background-color: darkgreen;
    color: white;
    border: none;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    cursor: pointer;
  }
`;

const ProfessionalButtons = styled.div`
  display: ${({ openPro }) => (openPro ? "flex" : "none")};
  width: 100%;
  justify-content: space-around;
  position: absolute;

  top: 50%;
  transform: translateY(-50%);
  button {
    padding: 0.7rem 1rem 0.7rem 1rem;
    background-color: darkgreen;
    color: white;
    border: none;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    cursor: pointer;
  }
`;

function Templates() {
  // FULL IMG
  // height: 612px;
  // width: 433px;

  const TemplateImages = {
    savvy: "https://www.t-dev.no/api/skill/savvy.PNG",
    original: "https://www.t-dev.no/api/skill/org.PNG",
    professional: "https://www.t-dev.no/api/skill/prof-img.png",
  };

  const [openPro, setOpenPro] = useState(false);
  const [openOrg, setOpenOrg] = useState(false);
  const [openSavvy, setOpenSavvy] = useState(false);

  return (
    <Container>
      <Hamburger />
      <SelectionHeadline>Velg din mal</SelectionHeadline>
      <Images>
        <OriginalBox openPro={openPro} openSavvy={openSavvy}>
          <TemplateOriginal
            openOrg={openOrg}
            onClick={() => setOpenOrg(!openOrg)}
            src={TemplateImages.original}
          />
          <OriginalButtons openOrg={openOrg}>
            <Link href="/original">
              <button>Bruk denne</button>
            </Link>
          </OriginalButtons>
          <CloseIconOrg openOrg={openOrg} onClick={() => setOpenOrg(!openOrg)}>
            X
          </CloseIconOrg>
          <p
            style={{
              textAlign: "center",
              paddingTop: "10px",
              fontWeight: "700",
            }}
          >
            Orginal
          </p>
        </OriginalBox>
        <ProfessionalBox openSavvy={openSavvy} openOrg={openOrg}>
          <TemplateProfessional
            openPro={openPro}
            onClick={() => setOpenPro(!openPro)}
            src={TemplateImages.professional}
          />
          <ProfessionalButtons openPro={openPro}>
            <Link href="/professional">
              <button>Bruk denne</button>
            </Link>
          </ProfessionalButtons>
          <CloseIconPro openPro={openPro} onClick={() => setOpenPro(!openPro)}>
            X
          </CloseIconPro>
          <p
            style={{
              textAlign: "center",
              paddingTop: "10px",
              fontWeight: "700",
            }}
          >
            Profesjonelt
          </p>
        </ProfessionalBox>
        <SavvyBox openOrg={openOrg} openPro={openPro}>
          <TemplateSavvy
            openSavvy={openSavvy}
            onClick={() => setOpenSavvy(!openSavvy)}
            src={TemplateImages.savvy}
          />
          <SavvyButtons openSavvy={openSavvy}>
            <Link href="/savvy">
              <button>Bruk denne</button>
            </Link>
          </SavvyButtons>
          <CloseIconSavvy
            openSavvy={openSavvy}
            onClick={() => setOpenSavvy(!openSavvy)}
          >
            X
          </CloseIconSavvy>
          <p
            style={{
              textAlign: "center",
              paddingTop: "10px",
              fontWeight: "700",
            }}
          >
            Erfaren
          </p>
        </SavvyBox>
      </Images>
      <RightMan src="./right-man.svg" />
      <LeftWoman src="./left-woman.svg" />
    </Container>
  );
}

export default Templates;
