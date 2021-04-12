import React, { useRef, useState } from "react";
import Meta from "../components/Layout/Meta";
import Professional from "../components/templates/Professional";
import ReactToPrint from "react-to-print";

import { PrintPreview } from "./savvy";
import { Information, InformationContent } from "./savvy";

function professional() {
  const [open, setOpen] = useState(true);
  const linkToPrint = () => {
    return <PrintPreview>Preview & Print</PrintPreview>;
  };
  const componentRef = useRef();

  return (
    <>
      <Meta
        title="Professional"
        font="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap"
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
          <Professional></Professional>
        </div>
      </div>
    </>
  );
}

export default professional;
