import React from "react";
import Link from "next/link";

import styled from "styled-components";

const GoBack = styled.button`
  border: 0;
  background-color: transparent;
  color: black;
  font-size: 30px;
  cursor: pointer;
  position: fixed;
  padding: 0.5rem 1rem 0.5rem 1rem;
  top: 20px;
  left: 20px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  &:hover {
    color: darkgrey;
  }
`;

function BackButton() {
  return (
    <div>
      <Link href="/select">
        <GoBack>❮</GoBack>
      </Link>
    </div>
  );
}

export default BackButton;
