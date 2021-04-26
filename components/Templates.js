import Hamburger from "../components/utils/Hamburger";
import Link from "next/link";

import styled from "styled-components";

const SelectionHeadlines = styled.div`
  text-align: center;
  padding-top: 2rem;
  h3 {
    padding-top: 2rem;
  }
  @media (max-width: 535px) {
    padding-top: 4rem;
    h1 {
      font-size: 22px;
    }
    h3 {
      font-size: 16px;
    }
  }
`;

const RightMan = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  @media (max-width: 829px) {
    position: fixed;
    height: 300px;
  }
  @media (max-width: 535px) {
    height: 200px;
  }
  @media (max-width: 410px) {
    display: none;
  }
`;

const LeftWoman = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  @media (max-width: 829px) {
    position: fixed;
    height: 300px;
    left: 10px;
  }
  @media (max-width: 535px) {
    height: 200px;
  }
  @media (max-width: 410px) {
    display: none;
  }
`;

const TemplatesBox = styled.div`
  max-width: 900px;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: space-between;
  display: flex;
  padding-top: 1.2rem;
  @media (max-width: 829px) {
    max-width: 400px;
  }
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
  @media (max-width: 829px) {
    background-attachment: fixed;
  }
`;

const MobilePadding = styled.div`
  @media (max-width: 535px) {
    padding-top: 100px;
  }
`;

const TemplateImageContainer = styled.div`

  z-index: 999;
  position: relative;
  @media (max-width: 829px) {
    margin: 0 auto;
  }
 
}}
`;

function Templates({ data }) {
  const templates = data.templates;

  return (
    <>
      <Container>
        <Hamburger />
        <SelectionHeadlines>
          <h1>Lag din CV</h1>
          <h3>Velg din favorittmal og begynn å bygge din CV</h3>
        </SelectionHeadlines>
        <div style={{ margin: "0 40px" }}>
          <TemplatesBox>
            {templates.map((items, index) => (
              <TemplateImageContainer key={index}>
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
              </TemplateImageContainer>
            ))}
          </TemplatesBox>
        </div>
        <RightMan src="./right-man.svg" />
        <LeftWoman src="./left-woman.svg" />
      </Container>
      <MobilePadding></MobilePadding>
    </>
  );
}

export default Templates;
