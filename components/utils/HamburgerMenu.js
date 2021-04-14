import Link from "next/link";
import { useRouter } from "next/router";

import styled from "styled-components";

const NavContainer = styled.nav`
  position: absolute;
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  transition: visibility 0.3s ease-in
  top: 0;
  right: 0;
  height: 100vh;
  width: 250px;
  background-color: #f2f2f2;
  z-index: 99999;
`;

const NavList = styled.ul`
  padding-top: 2rem;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 50vh;
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
`;

const NavItems = styled.li`
  list-style: none;
`;

const CloseNav = styled.button`
  border: 0;
  padding: 0 5px 0 5px;
  border-bottom: 1px solid black;
  position: absolute;
  top: 20px;
  left: 20px;
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
`;

const NavImage = styled.img``;

function HamburgerMenu({ open, setOpen }) {
  const router = useRouter();
  return (
    <NavContainer open={open}>
      <CloseNav onClick={() => setOpen(!open)}>X</CloseNav>
      <NavList>
        <NavItems>
          <NavImage src="./nav-image.svg"></NavImage>
        </NavItems>
        <Link href="/">
          <NavItems
            className={router.pathname == "/" ? "active" : ""}
            style={{ cursor: "pointer" }}
          >
            Hjem
          </NavItems>
        </Link>
        <Link href="/select">
          <NavItems
            className={router.pathname == "/select" ? "active" : ""}
            style={{ cursor: "pointer" }}
          >
            Velg mal
          </NavItems>
        </Link>
      </NavList>
    </NavContainer>
  );
}

export default HamburgerMenu;
