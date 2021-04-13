import { useState } from "react";
import Link from "next/link";

import styled from "styled-components";

const Header = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
  width: 100%;
`;

const Templates = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
`;

const Images = styled.img`
  transition: all 0.3s;
  height: 600px;
  width: 400px;
  transform: scale(1);
  cursor: pointer;
  &:hover {
    transition: 0.4s ease;
    transform: scale(1.2);
  }
`;

const LeftArrow = styled.div`
  margin-right: 100px;
  cursor: pointer;
  font-size: 40px;
`;

const RightArrow = styled.div`
  margin-left: 100px;
  cursor: pointer;
  font-size: 40px;
`;

function FrontPage() {
  const [img, setImg] = useState("https://www.t-dev.no/api/skill/prof.PNG");
  const [pages, setPage] = useState("/professional");
  const [template, setTemplate] = useState("Profesjonelt");

  function arrowLeft() {
    if (img === "https://www.t-dev.no/api/skill/prof.PNG") {
      setImg("https://www.t-dev.no/api/skill/org.PNG");
      setPage("/original");
      setTemplate("Orginal");
    }
    if (img === "https://www.t-dev.no/api/skill/org.PNG") {
      setImg("https://www.t-dev.no/api/skill/savvy.PNG");
      setPage("/savvy");
      setTemplate("Erfaren");
    }
    if (img === "https://www.t-dev.no/api/skill/savvy.PNG") {
      setImg("https://www.t-dev.no/api/skill/prof.PNG");
      setPage("/professional");
      setTemplate("Profesjonelt");
    }
  }

  function arrowRight() {
    if (img === "https://www.t-dev.no/api/skill/prof.PNG") {
      setImg("https://www.t-dev.no/api/skill/savvy.PNG");
      setPage("/savvy");
      setTemplate("Erfaren");
    }
    if (img === "https://www.t-dev.no/api/skill/org.PNG") {
      setImg("https://www.t-dev.no/api/skill/prof.PNG");
      setPage("/professional");
      setTemplate("Profesjonelt");
    }
    if (img === "https://www.t-dev.no/api/skill/savvy.PNG") {
      setImg("https://www.t-dev.no/api/skill/org.PNG");
      setPage("/original");
      setTemplate("Orginal");
    }
  }

  return (
    <>
      <Header>
        <h1>Lag din egen CV fra maler</h1>
      </Header>
      <Templates>
        <div>
          <LeftArrow onClick={arrowLeft}>❮</LeftArrow>
        </div>
        <Link href={pages}>
          <Images src={img}></Images>
        </Link>

        <RightArrow style={{ marginLeft: "50px" }} onClick={arrowRight}>
          ❯
        </RightArrow>
      </Templates>
      <p
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        {template}
      </p>
    </>
  );
}

export default FrontPage;
