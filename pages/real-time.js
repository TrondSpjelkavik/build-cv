import { useState, useRef } from "react";
import Meta from "../components/Layout/Meta";
import RealTime from "../components/templates/RealTime";
import ReactToPrint from "react-to-print";

import { PrintPreview } from "./savvy";
import { Information, InformationContent } from "./savvy";

function realtime() {
  const [open, setOpen] = useState(true);
  const linkToPrint = () => {
    return <PrintPreview>Forhåndsvisning & Skriv ut</PrintPreview>;
  };
  const componentRef = useRef();

  return (
    <>
      <Meta
        title="Sanntid"
        description="Sanntid er en oversiktlig mal satt sammen av fire elementer"
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
          <RealTime></RealTime>
        </div>
      </div>
    </>
  );
}

export default realtime;
