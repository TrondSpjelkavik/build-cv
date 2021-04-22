import Hamburger from "../components/utils/Hamburger";
import Link from "next/link";
import { MobileView } from "./FrontPage";

import styled from "styled-components";

const SelectionHeadlines = styled.div`
  text-align: center;
  padding-top: 2rem;
  h3 {
    padding-top: 2rem;
  }
`;

const RightMan = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
`;

const LeftWoman = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
`;

const TemplatesBox = styled.div`
  max-width: 900px;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: space-between;
  display: flex;
  padding-top: 1.2rem;
`;

const TemplateImage = styled.img`
  z-index: 0;
  height: 350px;
  width: 250px;
  margin-top: 20px;
  cursor: pointer;
  overflow: hidden;
  &:hover {
    transition: 0.3s ease-in;
    transform: scale(1.04);
  }
`;

const Container = styled.main`
  min-height: 100vh;
  font-weight: 700;
  background-image: url("./background-shape.svg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  @media (max-width: 768px) {
    display: none;
  }
`;

function Templates({ data }) {
  const templates = data.templates;

  return (
    <>
      <MobileView>
        {" "}
        Bruk en laptop eller datamaskin for å bruke denne siden{" "}
      </MobileView>
      <Container>
        <Hamburger />
        <SelectionHeadlines>
          <h1>Lag din CV</h1>
          <h3>Velg din favorittmal og begynn å bygge din CV</h3>
        </SelectionHeadlines>
        <div style={{ margin: "0 40px" }}>
          <TemplatesBox>
            {templates.map((items, index) => (
              <div key={index} style={{ zIndex: "999", position: "relative" }}>
                <Link href={items.path}>
                  <TemplateImage
                    alt={items.name}
                    title={items.name}
                    src={items.url}
                  ></TemplateImage>
                </Link>
                <div
                  style={{
                    textAlign: "center",
                    paddingTop: "5px",
                  }}
                >
                  {items.name}
                </div>
              </div>
            ))}
          </TemplatesBox>
        </div>
        <RightMan src="./right-man.svg" />
        <LeftWoman src="./left-woman.svg" />
      </Container>
    </>
  );
}

export default Templates;
