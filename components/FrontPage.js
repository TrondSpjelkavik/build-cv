import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.main`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Headline = styled.h1`
  position: fixed;
  font-family: "Open Sans", sans-serif;
  top: 20%;
  padding-right: 100px;
  font-size: 40px;
  text-shadow: 0px 8px 1px rgba(0, 0, 0, 0.25);
`;

const MainImage = styled.img``;

const Button = styled.button`
  border: 0;
  position: fixed;
  margin-bottom: 100px;
  background-color: #2995c2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  padding: 0.7rem 2rem 0.7rem 2rem;
  color: white;
  transform: translateX(-42%) translateY(-42%);
  &:hover {
    background-color: darkgreen;
  }
`;

function FrontPage() {
  return (
    <Container>
      <Headline>Curricula Vitae</Headline>
      <Link href="/select">
        <Button>Bygg egen CV</Button>
      </Link>
      <MainImage src="./frontpage.svg"></MainImage>
    </Container>
  );
}

export default FrontPage;
