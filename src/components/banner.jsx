import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background: url("/${(props) => props.theme.name}-banner.png") center center /
    cover fixed;
  height: 300px;
  display: flex;
  align-items: flex-end;
  @media only screen and (max-width: 480px) {
    height: 220px;
  }
`;

const Mugshot = styled.img`
  height: 250px;
  @media only screen and (max-width: 480px) {
    height: 110px;
  }
  @media only screen and (max-width: 375px) {
    height: 100px;
  }
`;

const Text = styled.div`
  color: ${(props) => props.theme.bannerText};
  font-size: 35px;
  font-weight: bold;
  font-family: "Bebas Neue";
  @media only screen and (max-width: 480px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 375px) {
    font-size: 17.5px;
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 800px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  -webkit-box-align: center;
  align-items: center;
  gap: 40px;
  @media only screen and (max-width: 480px) {
    max-width: 95%;
    gap: 20px;
    margin-bottom: 20px;
  }
`;

const Banner = ({ theme }) => {
  return (
    <Container>
      <Wrapper>
        <Mugshot src={`/${theme}-mugshot.png`} />
        <Text>
          Hey, I'm Ashish Ajimal.
          <br />I work with startups to hit the ground running on their digital
          journey.
        </Text>
      </Wrapper>
    </Container>
  );
};

export default Banner;
