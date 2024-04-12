"use client";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Summary } from "./components/Summary";
import { TranasctionsTable } from "./components/TranasctionsTable";

export default function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <Summary />
      <TranasctionsTable />
    </ThemeProvider>
  );
}
