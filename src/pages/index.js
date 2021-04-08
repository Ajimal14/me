import React, { useState } from "react";
import Banner from "../components/banner";
import Content from "../components/content";
import Header from "../components/header";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import Theme from "../styles/theme";
import styled from "styled-components";
import Footer from "../components/footer";

const Container = styled.div`
  font-family: "Poppins", "Material Icons";
  background: ${(props) =>
    props.theme.name === "light" ? "#e3e3e3" : "#282c35"};
`;

export default function Home() {
  const [theme, changeTheme] = useState("light");
  return (
    <ThemeProvider theme={Theme[theme]}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ashish Ajimal</title>
        <link rel="canonical" href="https://ajima14.github.io" />
      </Helmet>
      <Container>
        <Header theme={theme} changeTheme={changeTheme} />
        <Banner theme={theme} />
        <Content theme={theme} />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}
