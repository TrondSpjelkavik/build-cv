import { useState } from "react";

import styled from "styled-components";

const HeaderContainer = styled.header`
  height: 100px;
`;

const HeaderBottom = styled.div`
  background-color: #e0e0e0;
  height: 100px;
`;

const Headline = styled.h1`
  font-family: "Anton", sans-serif;
  font-weight: 400;
  color: #191919;
  @media (max-width: 420px) {
    font-size: 20px;
  }
  @media print {
    font-size: 28px;
  }
`;

const SubHeadline = styled.h3`
  text-align: center;
  padding-top: 50px;
  font-weight: 400;
  @media (max-width: 420px) {
    font-size: 16px;
  }
  @media print {
    font-size: 20px;
  }
`;

const HeadlineBox = styled.div`
  border: 1px solid #f05408;
  position: absolute;
  left: 50%;
  right: 50%;
  transform: translateY(-50%) translateX(-50%);
  width: fit-content;
  background-color: white;
  padding: 10px 25px 10px 25px;
`;

const TitleInput = styled.input`
  position: absolute;
  left: 50%;
  top: 2%;
  transform: translateX(-50%) translateY(-2%);
  border: none;
  border-bottom: 1px solid black;
  &:focus {
    outline: none;
    border-bottom: 2px solid green;
  }
`;

const SubTitleInput = styled.input`
  position: absolute;
  left: 50%;
  top: 175px;
  background-color: transparent;
  transform: translateX(-50%);
  border: none;
  border-bottom: 1px solid black;
  &:focus {
    outline: none;
    border-bottom: 2px solid green;
  }
`;

function Header() {
  const [title, setTitle] = useState("DITT NAVN");
  const [subTitle, setSubTitle] = useState("");

  return (
    <>
      <TitleInput
        onChange={(e) => setTitle(e.target.value.toUpperCase())}
        placeholder="ditt navn"
        className="show"
        type="email"
      ></TitleInput>
      <HeaderContainer></HeaderContainer>

      <HeadlineBox>
        <Headline>{title}</Headline>
      </HeadlineBox>
      <HeaderBottom>
        <SubHeadline>{subTitle}</SubHeadline>
      </HeaderBottom>
      <SubTitleInput
        onChange={(e) => setSubTitle(e.target.value)}
        placeholder="stilling / utdanning"
        className="show"
        type="text"
      ></SubTitleInput>
    </>
  );
}

export default Header;
