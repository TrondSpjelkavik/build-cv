import styled from "styled-components";

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 10px;
  left: 10px;

  a {
    color: black;
  }
`;

function Footer() {
  return (
    <>
      <FooterContainer className="show">
        <p>
          Utviklet av{" "}
          <a
            href="https://www.trondspjelkavik.com"
            title="Trond Fuglseth Spjelkavik"
          >
            Trond
          </a>
        </p>
      </FooterContainer>
    </>
  );
}

export default Footer;
