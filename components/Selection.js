import { useState } from "react";
import Link from "next/link";
import Hamburger from "../components/utils/Hamburger";

import styled from "styled-components";

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
  height: 500px;
  width: 350px;
  transform: scale(1);
  cursor: pointer;
  &:hover {
    transition: 0.4s ease;
    transform: scale(1.2);
  }
`;

const LeftArrow = styled.div`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  margin-right: 50px;
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

export const RightMan = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const LeftWoman = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const Container = styled.main`
  min-height: 100vh;

  background-image: url("./background-shape.svg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

const TemplateHeadline = styled.p`
  font-size: 22px;
  padding: 20px 0;
  position: absolute;
  top: 150px;
  left: 50%;
  transform: translateX(-50%);
  @media (max-height: 961px) {
    top: 100px;
  }
  @media (max-height: 746px) {
    top: 60px;
  }
`;

export const SelectionHeadline = styled.h1`
  text-align: center;
  padding-top: 2rem;
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
      <Hamburger />
      <SelectionHeadline>Velg din mal</SelectionHeadline>
      <TemplateHeadline>{template}</TemplateHeadline>
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

      <LeftWoman src="./left-woman.svg"></LeftWoman>
      <RightMan src="./right-man.svg"></RightMan>
    </Container>
  );
}

export default FrontPage;
