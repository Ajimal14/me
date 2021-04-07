import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styled from "styled-components";
import Themes from "../styles/theme";
import {
  faCss3,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBed,
  faBeer,
  faFootballBall,
  faFutbol,
  faHeart,
  faMobile,
  faPizzaSlice,
  faRadiation,
} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  max-width: 900px;
  min-height: 500px;
  position: relative;
  display: flex;
  margin: 0 auto;

  hr {
    border: 0;
    height: 1px;
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.75),
      rgba(255, 255, 255, 0)
    );
    margin: 15px auto;
  }
  @media only screen and (max-width: 480px) {
    max-width: 95%;
    min-height: 200px;
  }
`;

const MiddleContent = styled.div`
  background: ${(props) => props.theme.contentDropColor};
  border-radius: 10px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) 0s;
  padding: 20px;
  width: 100%;
  margin-top: -30px;
  border: 2px solid;
  border-color: ${(props) => props.theme.borderColor};
  color: ${(props) => props.theme.textColor};
  font-weight: bold;
  @media only screen and (max-width: 480px) {
    margin-top: -5px;
  }
`;

const Heading = styled.div`
  color: ${(props) => props.theme.headingColor};
  font-family: "Bebas Neue";
  font-size: 35px;
  display: flex;
  justify-content: space-between;
  margin: 15px 0px;
  @media only screen and (max-width: 480px) {
    font-size: 25px;
  }
`;

const Icons = styled.div`
  display: flex;
  svg {
    font-size: 35px;
    margin-right: 10px;
    color: ${(props) => props.theme.headingColor};
  }
  @media only screen and (max-width: 480px) {
    svg {
      font-size: 20px;
      margin-right: 5px;
      color: ${(props) => props.theme.headingColor};
    }
  }
`;

const Text = styled.div`
  font-size: 16px;
  line-height: 1.5;
  font-family: "Raleway";

  svg {
    margin: 0px 5px;
    color: ${(props) => props.theme.headingColor};
  }

  @media only screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

const Spacer = styled.div`
  margin-top: 40px;
`;

const Content = ({ theme }) => {
  return (
    <Container>
      <MiddleContent>
        <Heading>
          <div>Full Stack Dev.</div>
          <Icons>
            <FontAwesomeIcon icon={faReact} />
            <FontAwesomeIcon icon={faJs} />
            <FontAwesomeIcon icon={faNodeJs} />
            <FontAwesomeIcon icon={faHtml5} />
            <FontAwesomeIcon icon={faCss3} />
            <FontAwesomeIcon icon={faMobile} />
          </Icons>
        </Heading>
        <Text>
          I have more than 3 Years of experience in Frontend Development with
          React Ecosystem.
          <br />
          I write Full Stack Applications and sometimes Mobile Apps with React
          Native.
          <hr />I have good expertise working with organisations and early-stage
          startups varying from Security, Logistics, E-Commerce, and Fantasy
          Sports.
        </Text>
        <Spacer />
        <Heading>Four-Four-Two.</Heading>
        <Text>
          I <FontAwesomeIcon icon={faHeart} /> to watch{" "}
          <FontAwesomeIcon icon={faFutbol} />
          on weekends worsening my sleeping <FontAwesomeIcon
            icon={faBed}
          />{" "}
          pattern with a pint of wheat beer
          <FontAwesomeIcon icon={faBeer} />
          and a cold slice of pizza
          <FontAwesomeIcon icon={faPizzaSlice} /> in my hand.
          <br />
          I also support Paris Saint Germain.
          <hr />
          I've played football in the past for Local Clubs in Delhi and 9-aside
          National Tournament.
        </Text>
      </MiddleContent>
    </Container>
  );
};

export default Content;
