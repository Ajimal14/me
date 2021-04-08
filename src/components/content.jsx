import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styled from "styled-components";
import {
  faCss3,
  faFantasyFlightGames,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBed,
  faBeer,
  faCartPlus,
  faFootballBall,
  faFutbol,
  faGamepad,
  faHandsWash,
  faHeart,
  faMagic,
  faMobile,
  faNetworkWired,
  faPizzaSlice,
  faRadiation,
  faSchool,
  faTv,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  max-width: 900px;
  min-height: 500px;
  position: relative;
  display: flex;
  margin: 0 auto;

  hr {
    border: 1px dotted ${(props) => props.theme.headingColor};
    background: ${props => props.theme.contentDropColor};
    height: 2px;
    width: 25px;
    margin: 15px 0;
    border-radius: 50px;
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
    margin-top: -20px;
  }
`;

const Heading = styled.div`
  color: ${(props) => props.theme.headingColor};
  font-family: "Bebas Neue";
  font-size: 35px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  @media only screen and (max-width: 480px) {
    font-size: 25px;
    margin-bottom: 5px;
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
  padding: 10px;

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

const SubHeading = styled.div`
  color: ${(props) => props.theme.headingColor};
  font-family: "Poppins";
  font-size: 16px;
  margin: 10px auto;
  font-weight: bold;

  @media only screen and (max-width: 480px) {
    font-size: 12px;
    margin: 5px auto;
  }
`;

const TimelineText = styled.div`
  font-size: 14px;
  margin-left: 10px;

  @media only screen and (max-width: 480px) {
    font-size: 9px;
    margin-left: 5px;
  }
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
        <Heading>Timeline</Heading>
        <Text>
          <div>
            <SubHeading>
              {" "}
              <FontAwesomeIcon icon={faMagic} /> Fantasy
            </SubHeading>

            <TimelineText>
              A Promising Fantasy Sports startup disrupted the space with
              Advanced Fantasy sports experience.
              <br />
              As the fantasy space grew in India we launched multiple sports
              with exciting features.
              <br />
              Unluckily, our startup ran out of funds too soon.
            </TimelineText>
          </div>
          <hr />
          <div>
            <SubHeading>
              <FontAwesomeIcon icon={faHandsWash} /> Laundry
            </SubHeading>

            <TimelineText>
              Early Laundry startup with pick and drop services for Gurgaon.
              <br />
              We suspended operations after few months due to a lack of storage
              and logistic power.
            </TimelineText>
          </div>
          <hr />
          <div>
            <SubHeading>
              <FontAwesomeIcon icon={faCartPlus} /> E-Commerce
            </SubHeading>

            <TimelineText>
              A midsized e-commerce company, producing and selling health
              supplements in India.
              <br />
              India's biggest online marketplace supplements and health goods.
            </TimelineText>
          </div>
          <hr />
          <div>
            <SubHeading>
              <FontAwesomeIcon icon={faMagic} /> Fantasy 2.0
            </SubHeading>

            <TimelineText>
              Designed and developed a fantasy platform from scratch with plug
              and playable fantasy model.
              <br />
            </TimelineText>
          </div>
          <hr />
          <div>
            <SubHeading>
              <FontAwesomeIcon icon={faSchool} /> Education
            </SubHeading>

            <TimelineText>
              Ed-tech company with the largest catalog of specialization courses
              in the government and banking sector.
            </TimelineText>
          </div>
          <hr />
          <div>
            <SubHeading>
              <FontAwesomeIcon icon={faUserSecret} /> Security
            </SubHeading>

            <TimelineText>
              Currently working in a Cyber Security Company with solutions
              ranging from communication endpoint security, encryption, network
              security, cloud security, email security, mobile security and
              unified threat management.
            </TimelineText>
          </div>
        </Text>

        <Spacer />
        <Heading>Four-Four-Two.</Heading>
        <Text>
          <FontAwesomeIcon icon={faTv} />I love to watch football on weekends
          worsening my sleeping pattern with a pint of wheat beer and a cold
          slice of pizza in my hand.
          <br />
          <br />
          <FontAwesomeIcon icon={faHeart} /> I support Paris Saint Germain.
          <br />
          <br />
          <FontAwesomeIcon icon={faFutbol} /> I've played football in the past
          for Local Clubs in Delhi and 9-aside National Tournament.
          <br />
          <br />
          <FontAwesomeIcon icon={faGamepad} /> I enjoy playing FIFA in my spare
          time.
        </Text>
      </MiddleContent>
    </Container>
  );
};

export default Content;
