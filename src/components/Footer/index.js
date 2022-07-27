import styled from "styled-components";
import React from "react";

const FOOTER = styled.footer`
  padding: 1.2rem calc(2.5rem + 2.5vw);
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  @media only Screen and (max-width: 48em) {
    padding: 1.2rem 0;
    flex-direction: column;
    align-items: left;
  }
`;

const CenterText = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  a {
    font-family: "Dancing Script", cursive;
    color: #111;
    text-decoration: none;
  }
  @media only Screen and (max-width: 48em) {
    max-width: 165px;
    flex-direction: column;
    text-align: left;
  }
`;

const Footer = () => {
  return (
    <FOOTER data-scroll-section>
      <CenterText>
        © 2022 Built and Design by{" "}
        <a href="https://www.youtube.com/channel/UCeYt6blRBKuNrEg_-282fSA">
          &nbsp;George Okello
        </a>
      </CenterText>
    </FOOTER>
  );
};

export default Footer;

//© 2022 by CodeBucks. Design by @GeorgeOkello.
