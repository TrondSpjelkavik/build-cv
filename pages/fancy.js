import React, { useRef, useState } from "react";

import ReactToPrint from "react-to-print";
import { PrintPreview } from "./savvy";
import { Information, InformationContent } from "./savvy";

import Fancy from "../components/templates/Fancy";
import Meta from "../components/Layout/Meta";

function fancy() {
  const [open, setOpen] = useState(true);
  const linkToPrint = () => {
    return <PrintPreview>Forhåndsvisning & Skriv ut</PrintPreview>;
  };
  const componentRef = useRef();

  return (
    <>
      <Meta font="https://fonts.googleapis.com/css2?family=Anton&display=swap"></Meta>
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
          <Fancy />
        </div>
      </div>
    </>
  );
}

export default fancy;
