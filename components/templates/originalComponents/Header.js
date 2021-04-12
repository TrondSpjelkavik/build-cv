import { useState } from "react";
import { InputContainer } from "../Original";
import styled from "styled-components";

const Headline = styled.h1`
  margin: 10px 0;
  font-size: 22px;
  @media (max-width: 650px) {
    margin-left: 20px;
  }
  @media print {
    margin-left: 0px; !important
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  border-bottom: 2px solid black;
  @media print {
    margin-bottom: 20px; !important
  }
 
`;

function Header() {
  const [title, setTitle] = useState("Ditt navn");

  return (
    <HeaderContainer>
      <Headline>
        <div> CV - {title} </div>
        <InputContainer
          onChange={(e) => setTitle(e.target.value)}
          placeholder={title}
          className="show"
          type="text"
        ></InputContainer>
      </Headline>
    </HeaderContainer>
  );
}

export default Header;
