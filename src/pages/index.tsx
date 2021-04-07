import Head from "next/head";
import { useContext } from "react";
import { FiTool, FiSun, FiMoon, FiPlus } from "react-icons/fi";
import { ThemeContext, DefaultTheme } from "styled-components";
import Table from "../components/Table";

import {
  Wrapper,
  Container,
  Header,
  LogoWrapper,
  TextWraper,
  Title,
  Subtitle,
  LeftSide,
  RightSide,
  ToggleTheme,
  Add,
} from "../styles/pages/home";

export default function Home({ toggleTheme }) {
  const theme = useContext<DefaultTheme>(ThemeContext);

  return (
    <div>
      <Head>
        <title>Next Crud - Dev tools</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper>
        <Container>
          <Header>
            <LeftSide>
              <LogoWrapper>
                <FiTool color="#fff" size={36} />
              </LogoWrapper>
              <TextWraper>
                <Title>Manage my tools</Title>
                <Subtitle>
                  what makes your life easier as a programmer?
                </Subtitle>
              </TextWraper>
            </LeftSide>

            <RightSide>
              <ToggleTheme onClick={toggleTheme}>
                {theme.title === "light" ? (
                  <FiSun size={28} color={theme.colors.secondary} />
                ) : (
                  <FiMoon size={28} color={theme.colors.secondary} />
                )}
              </ToggleTheme>
              <Add onClick={() => {}}>
                <FiPlus size={36} color="fff" />
              </Add>
            </RightSide>
          </Header>
          <Table />
        </Container>
      </Wrapper>
    </div>
  );
}
