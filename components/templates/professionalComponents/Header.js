import { useState } from "react";
import { InputContainer } from "../savvyComponents/Header";

import styled from "styled-components";

const HeaderContainer = styled.div`
  background-color: #3b3b48;
  padding: 20px 0 20px 10px;
  font-family: "Source Sans Pro", sans-serif;

  h1 {
    color: white;
    font-size: 28px;
  }
  h3 {
    color: white;
    padding-top: 5px;
    font-weight: 400;
    font-size: 18px;
  }
`;

function Header() {
  const [title, setTitle] = useState("DITT NAVN");
  const [subTitle, setSubTitle] = useState("Tittel");

  return (
    <HeaderContainer>
      <h1>{title}</h1>
      <InputContainer
        onChange={(e) => setTitle(e.target.value.toUpperCase())}
        placeholder="Ditt navn"
        className="show"
        type="text"
      ></InputContainer>
      <h3>{subTitle}</h3>
      <InputContainer
        onChange={(e) => setSubTitle(e.target.value)}
        placeholder="Tittel"
        className="show"
        type="text"
      ></InputContainer>
    </HeaderContainer>
  );
}

export default Header;
