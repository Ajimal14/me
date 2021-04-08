import React from "react";
import styled from "styled-components";
import Socials from "./socials";

const Container = styled.div`
  min-height: 100px;
  background: ${(props) => props.theme.headingColor};
  margin-top: -50px;
  @media only screen and (max-width: 480px) {
    min-height: 70px;
    margin-top: -20px;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Socials />
    </Container>
  );
};

export default Footer;
