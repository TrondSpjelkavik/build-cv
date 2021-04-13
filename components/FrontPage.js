import { useState } from "react";
import Link from "next/link";

import styled from "styled-components";

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 20vh;
  flex-direction: column;
  h2 {
    padding-top: 40px;
    font-weight: 400;
  }
`;

const UpperHalf = styled.div`
  display: flex;
  flex: 1;
  color: white;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 30vh;
  width: 100%;
  background-color: #156781;
`;

const LowerHalf = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  width: 100%;
  background-color: #12323d;
  position: relative;
`;

const Templates = styled.div`
  position: absolute;
  z-index: 999;
  top: 25%;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
`;

const Images = styled.img`
  transition: all 0.3s;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  height: 600px;
  width: 400px;
  transform: scale(1);
  cursor: pointer;
  &:hover {
    transition: 0.4s ease;
    transform: scale(1.2);
  }
`;

const LeftArrow = styled.div`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  margin-right: 100px;
  cursor: pointer;
  font-size: 40px;
  &:hover {
    color: lightgrey;
  }
`;

const RightArrow = styled.div`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  margin-left: 100px;
  cursor: pointer;
  font-size: 40px;
  &:hover {
    color: lightgrey;
  }
`;

const Container = styled.main`
  background-color: #156781;
  color: white;
`;

const TemplateHeadline = styled.p`
  font-size: 22px;
  padding: 20px 0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

function FrontPage() {
  const [img, setImg] = useState("https://www.t-dev.no/api/skill/prof.PNG");
  const [pages, setPage] = useState("/professional");
  const [template, setTemplate] = useState("Profesjonelt");

  function arrowLeft() {
    if (img === "https://www.t-dev.no/api/skill/prof.PNG") {
      setImg("https://www.t-dev.no/api/skill/org.PNG");
      setPage("/original");
      setTemplate("Orginal");
    }
    if (img === "https://www.t-dev.no/api/skill/org.PNG") {
      setImg("https://www.t-dev.no/api/skill/savvy.PNG");
      setPage("/savvy");
      setTemplate("Erfaren");
    }
    if (img === "https://www.t-dev.no/api/skill/savvy.PNG") {
      setImg("https://www.t-dev.no/api/skill/prof.PNG");
      setPage("/professional");
      setTemplate("Profesjonelt");
    }
  }

  function arrowRight() {
    if (img === "https://www.t-dev.no/api/skill/prof.PNG") {
      setImg("https://www.t-dev.no/api/skill/savvy.PNG");
      setPage("/savvy");
      setTemplate("Erfaren");
    }
    if (img === "https://www.t-dev.no/api/skill/org.PNG") {
      setImg("https://www.t-dev.no/api/skill/prof.PNG");
      setPage("/professional");
      setTemplate("Profesjonelt");
    }
    if (img === "https://www.t-dev.no/api/skill/savvy.PNG") {
      setImg("https://www.t-dev.no/api/skill/org.PNG");
      setPage("/original");
      setTemplate("Orginal");
    }
  }

  return (
    <Container>
      <Header>
        <h1>Lag din egen CV</h1>
        <h2>Velg en mal og begynn å bygg din CV</h2>
      </Header>
      <UpperHalf>
        <Templates>
          <div>
            <LeftArrow onClick={arrowLeft}>❮</LeftArrow>
          </div>
          <Link href={pages}>
            <Images src={img}></Images>
          </Link>

          <RightArrow style={{ marginLeft: "50px" }} onClick={arrowRight}>
            ❯
          </RightArrow>
        </Templates>
        <TemplateHeadline>{template}</TemplateHeadline>
      </UpperHalf>
      <LowerHalf></LowerHalf>
    </Container>
  );
}

export default FrontPage;
