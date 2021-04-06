import React, { useState } from "react";
import Banner from "../components/banner";
import Content from "../components/content";
import Header from "../components/header";
import Socials from "../components/socials";
import { ThemeProvider } from 'styled-components';
import Theme from '../styles/theme';

export default function Home() {
  const [ theme, changeTheme ] = useState('light');
  return (
    <ThemeProvider theme={Theme[theme]}>
      <Header theme={theme} changeTheme={changeTheme} />
      <Socials />
      <Banner theme={theme}/>
      <Content />
    </ThemeProvider>
  );
}
