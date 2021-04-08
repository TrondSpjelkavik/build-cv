import React, { useRef } from "react";
import Meta from "../components/Layout/Meta";
import Savvy from "../components/templates/Savvy";
import ReactToPrint from "react-to-print";

import { PrintPreview } from "./index";

function savvy() {
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
