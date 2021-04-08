import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  padding: 90px 20px 20px;
  a {
    :first-child svg {
      margin: 0;
    }
  }
  svg {
    color: ${(props) => props.theme.contentDropColor};
    font-size: 36px;
    padding: 10px;
    border: 3px solid;
    border-color: ${(props) => props.theme.headingColor};
    border-radius: 100%;
    display: inline-block;
    :hover {
      border-color: ${(props) => props.theme.contentDropColor};
    }
  }

  .footericons {
    width: 30px;
    height: 30px;
    margin-left: 20px;
  }
`;

const Socials = () => {
  const styles = {};
  return (
    <Container className="socials" target="_blank">
      <a href="http://linkedin.com/in/ashishajimal/" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedinIn} className="footericons" />
      </a>
      <a
        href="https://github.com/Ajimal14"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} className="footericons" />
      </a>
      <a
        href="https://www.instagram.com/ashishajimal/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} className="footericons" />
      </a>
    </Container>
  );
};
export default Socials;
