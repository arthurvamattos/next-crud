import Head from "next/head";
import { useCallback, useContext, useRef } from "react";
import { FiTool, FiSun, FiMoon, FiPlus } from "react-icons/fi";
import { ThemeContext, DefaultTheme } from "styled-components";
import Table from "../components/Table";
import Modal, { ModalHandles } from "../components/Modal";

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
  const modalRef = useRef<ModalHandles>(null);

  const openModal = useCallback(() => {
    modalRef.current?.openModal();
  }, []);

  // const openEditModal = useCallback((tool: Tool) => {
  //   modalRef.current?.openEditModal(tool);
  // }, []);

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
              <TextWraper>
                <Title>
                  <LogoWrapper>
                    <FiTool color="#fff" size={18} />
                  </LogoWrapper>
                  Manage my tools
                </Title>
                <Subtitle>
                  What makes your life easier as a programmer?
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
              <Add onClick={openModal}>
                <FiPlus size={36} color="fff" />
              </Add>
            </RightSide>
          </Header>
          <Table />
        </Container>
      </Wrapper>

      <Modal ref={modalRef} />
    </div>
  );
}
