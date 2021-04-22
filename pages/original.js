import Meta from "../components/Layout/Meta";
import Original from "../components/templates/Original";
import React, { useRef } from "react";
import ReactToPrint from "react-to-print";

import styled from "styled-components";

const PrintPreview = styled.button`
  position: fixed;
  bottom: 20px;
  right: 50px;
  z-index: 999;
  padding: 5px 10px 5px 10px;
  color: white;
  background-color: green;
  border: none;
  box-shadow: 1px 1px 1px black;
  font-size: 18px;
  font-family: "Lato", sans-serif;
  cursor: pointer;
  &:hover {
    background-color: darkgreen;
  }
  @media (max-width: 645px) {
    right: 10px;
  }
`;

function original() {
  // TODO: Beautify add and remove buttons. Color on "Legg til bilde"?
  // TODO:

  const linkToPrint = () => {
    return <PrintPreview>Forhåndsvisning & Skriv ut</PrintPreview>;
  };
  const componentRef = useRef();

  return (
    <>
      <Meta
        title="Din CV"
        font="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;700&display=swap"
        description="Malen orginal er en klassisk CV og kan brukes til det meste"
      ></Meta>
      <ReactToPrint
        trigger={linkToPrint}
        content={() => componentRef.current}
      />
      <div ref={componentRef}>
        <Original></Original>
      </div>
    </>
  );
}

export default original;
