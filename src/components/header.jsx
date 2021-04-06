import React from "react";
import styled from "styled-components";
import Toggle from "./toggle";

const Container = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  background: ${(props) => props.theme.primaryColor};
  display: flex;
  padding: 20px 50px;
  justify-content: space-between;
`;

const Logo = styled.img`
  position: absolute;
  overflow: hidden;
  display: inline-block;
  width: 100px;
  height: 100px;
  top: 10px;
  z-index: 100000;
  box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 6px;
`;

const Links = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 25px;
  * {
    color: #fff;
  }
`;


const Header = ({ theme, changeTheme }) => {
  return (
    <Container>
      <div>
        <Logo src={`/${theme}-logo.png`} />
      </div>
      <Links className="navlinks">
        <div>About</div>
        <div>Blog</div>
        <div>Contact</div>
        <Toggle 
            theme={theme}
            changeTheme={changeTheme}
        />
      </Links>
    </Container>
  );
};

export default Header;
