import React, { useState } from "react";
import Banner from "../components/banner";
import Content from "../components/content";
import Header from "../components/header";
import Socials from "../components/socials";
import { ThemeProvider } from "styled-components";
import Theme from "../styles/theme";
import styled from "styled-components";
import Footer from "../components/footer";

const Container = styled.div`
  font-family: "Poppins", "Material Icons";
  background: ${ props => props.theme.name === 'light' ? '#e3e3e3' : '#282c35'};
`;

export default function Home() {
  const [theme, changeTheme] = useState("light");
  return (
    <ThemeProvider theme={Theme[theme]}>
      <Container>
        <Header theme={theme} changeTheme={changeTheme} />
        {/* <Socials /> */}
        <Banner theme={theme} />
        <Content theme={theme} />
        {/* <Footer /> */}
      </Container>
    </ThemeProvider>
  );
}
