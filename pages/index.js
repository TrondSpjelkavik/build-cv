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

export default function Home() {
  const linkToPrint = () => {
    return <PrintPreview>Preview & Print</PrintPreview>;
  };
  const componentRef = useRef();

  return (
    <div>
      <ReactToPrint
        trigger={linkToPrint}
        content={() => componentRef.current}
      />
      <div ref={componentRef}>
        <Original></Original>
      </div>
    </div>
  );
}
