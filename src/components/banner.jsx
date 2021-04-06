import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background: url("/${(props) => props.theme.name}-banner.png") center center /
    cover fixed;
  height: 300px;
  display: flex;
  align-items: flex-end;

  .banner-content {
    margin: 0 auto;
    max-width: 800px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    -webkit-box-align: center;
    align-items: center;
    gap: 40px;
  }

  .banner-content-heading {
    color: rgb(255, 255, 255);
    font-size: 30px;
    font-weight: bold;
  }

  .mugshot {
    height: 250px;
  }
`;

const Banner = ({ theme }) => {
  return (
    <Container>
      <div className="banner-content">
        <img className="mugshot" src={`/${theme}-mugshot.png`} />
        <div className="banner-content-heading">
          Hey, I'm Ashish Ajimal. I work with startups to hit the ground running
          on their digital journey.
        </div>
      </div>
    </Container>
  );
};

export default Banner;
