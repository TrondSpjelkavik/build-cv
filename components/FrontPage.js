import React from "react";
import Link from "next/link";
import Footer from "./Layout/Footer";

import Hamburger from "../components/utils/Hamburger";

import styled from "styled-components";

const Container = styled.main`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Headline = styled.h1`
  position: absolute;
  font-family: "Open Sans", sans-serif;
  top: 20%;
  padding-right: 140px;
  font-size: 40px;
  text-shadow: 0px 8px 1px rgba(0, 0, 0, 0.25);
  @media (max-width: 656px) {
    padding-right: 80px;
  }
  @media (max-width: 656px) {
    text-align: center;
    font-size: 30px;
  }
  @media (max-width: 656px) {
    text-align: center;
    font-size: 26px;
    padding-right: 00px;
  }
`;

const MainImage = styled.img`
  @media (max-width: 1011px) {
    width: 100%;
  }
`;

const Button = styled.button`
  border: 0;
  position: absolute;
  margin-bottom: 100px;
  background-color: #2995c2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  padding: 0.7rem 2rem 0.7rem 2rem;
  color: white;
  transform: translateX(-58%) translateY(-42%);
  &:hover {
    background-color: darkgreen;
  }
  @media (max-width: 656px) {
    transform: translateX(-25%);
  }
  @media (max-width: 656px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 656px) {
    transform: translateX(0%);
  }
`;

function FrontPage() {
  return (
    <Container>
      <Hamburger></Hamburger>
      <Headline>Curricula Vitae</Headline>
      <Link href="/templates">
        <Button>Bygg din CV</Button>
      </Link>
      <MainImage src="./frontpage.svg" alt="humans vector image"></MainImage>
      <Footer />
    </Container>
  );
}

export default FrontPage;
