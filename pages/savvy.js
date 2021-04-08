import React, { useRef, useState } from "react";
import Meta from "../components/Layout/Meta";
import Savvy from "../components/templates/Savvy";
import ReactToPrint from "react-to-print";

import { PrintPreview } from "./index";

import styled from "styled-components";

const Information = styled.div`
  position: fixed;
  bottom: 22px;
  right: 210px;
  z-index: 9;
  height: 25px;
  width: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: black;
  color: white;
  font-weight: 700;
  cursor: pointer;
`;

const InformationContent = styled.div`
  display: ${({ open }) => (open ? "none" : "flex")};
  align-item: center;
  justify-content: center;
  position: fixed;
  z-index: 1;
  bottom: 62px;
  padding: 10px;
  right: 40px;
  background-color: white;
  width: 270px;
`;

function savvy() {
  const [open, setOpen] = useState(true);

  const linkToPrint = () => {
    return <PrintPreview>Preview & Print</PrintPreview>;
  };
  const componentRef = useRef();

  return (
    <>
      <Meta
        title="Savvy"
        font="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;700&display=swap"
      ></Meta>
      <InformationContent open={open}>
        Husk å krysse av bakgrunnsgrafikk
      </InformationContent>
      <Information
        onMouseEnter={() => setOpen(false)}
        onMouseLeave={() => setOpen(true)}
      >
        i
      </Information>
      <div>
        <ReactToPrint
          trigger={linkToPrint}
          content={() => componentRef.current}
        />
        <div ref={componentRef}>
          <Savvy></Savvy>
        </div>
      </div>
    </>
  );
}

export default savvy;
