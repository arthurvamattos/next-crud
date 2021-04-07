import Head from "next/head";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { FiTool, FiSun, FiMoon, FiPlus } from "react-icons/fi";
import { ThemeContext, DefaultTheme } from "styled-components";
import ReactTooltip from "react-tooltip";
import axios from "axios";

import Table from "../components/Table";
import Tooltips from "../components/Tooltips";
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

interface Tool {
  _id: string;
  name: string;
  description: string;
  link: string;
}

export default function Home({ toggleTheme }) {
  const [tools, setTools] = useState<Array<Tool>>([]);

  const theme = useContext<DefaultTheme>(ThemeContext);
  const modalRef = useRef<ModalHandles>(null);

  useEffect(() => {
    async function loadTools() {
      const response = await axios.get("/api/tools");
      if (response.data) {
        setTools(response.data);
      }
    }
    loadTools();
  }, []);

  useEffect(() => {
    ReactTooltip.rebuild();
  });

  const openModal = useCallback(() => {
    modalRef.current?.openModal();
  }, []);

  const openEditModal = useCallback((tool: Tool) => {
    modalRef.current?.openEditModal(tool);
  }, []);

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
              <ToggleTheme
                onClick={toggleTheme}
                data-tip
                data-for="toggleTheme"
              >
                {theme.title === "light" ? (
                  <FiSun size={28} color={theme.colors.secondary} />
                ) : (
                  <FiMoon size={28} color={theme.colors.secondary} />
                )}
              </ToggleTheme>
              <Add onClick={openModal} data-tip data-for="add">
                <FiPlus size={36} color="fff" />
              </Add>
            </RightSide>
          </Header>
          <Table
            tools={tools}
            openEditModal={openEditModal}
            setTools={setTools}
          />
        </Container>
      </Wrapper>

      <Tooltips />
      <Modal tools={tools} setTools={setTools} ref={modalRef} />
    </div>
  );
}
