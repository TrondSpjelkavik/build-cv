import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";

import styled from "styled-components";

const HamburgerContainer = styled.div`
  position: relative;
  width: 50px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  z-index: 9999;
`;

const HamburgerBox = styled.div`
  position: absolute;
  top: 50px;
  right: 40px;
  cursor: pointer;
  @media (max-width: 535px) {
    right: 10px;
  }
`;

const SittingImage = styled.img`
  position: absolute;
  height: 100px;
  top: -62px;
  right: 10px;
`;

const HamburgerLines = styled.div`
  height: 4px;
  width: 42px;
  background-color: black;
`;

function Hamburger() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <HamburgerBox className="show" open={open} onClick={() => setOpen(!open)}>
        <SittingImage src="./sitting.svg" alt="sitting human"></SittingImage>
        <HamburgerContainer>
          <HamburgerLines />
          <HamburgerLines />
          <HamburgerLines />
        </HamburgerContainer>
      </HamburgerBox>
      <HamburgerMenu open={open} setOpen={setOpen} />
    </>
  );
}

export default Hamburger;
