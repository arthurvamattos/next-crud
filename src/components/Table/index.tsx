import { useContext } from "react";
import { FiEdit2, FiTrash2, FiExternalLink } from "react-icons/fi";
import { ThemeContext, DefaultTheme } from "styled-components";

import { Container, Tr, Th, Td, Button } from "./styles";

function Table() {
  const theme = useContext<DefaultTheme>(ThemeContext);

  return (
    <Container>
      <thead>
        <Tr>
          <Th>Name</Th>
          <Th>Description</Th>
          <Th>Action</Th>
        </Tr>
      </thead>
      <tbody>
        <Tr>
          <Td>Visual Studio Code</Td>
          <Td>
            A code editor redefined and optimized for building and debugging
            modern web and cloud applications
          </Td>
          <Td>
            <Button onClick={() => {}}>
              <FiExternalLink size={18} color={theme.colors.primary} />
            </Button>
            <Button onClick={() => {}}>
              <FiEdit2 size={18} color={theme.colors.primary} />
            </Button>
            <Button onClick={() => {}}>
              <FiTrash2 size={18} color={theme.colors.primary} />
            </Button>
          </Td>
        </Tr>
        <Tr>
          <Td>Insomnia</Td>
          <Td>
            The best API Client for REST, GraphQL, GRPC and OpenAPI design tool
            for developers
          </Td>
          <Td>
            <Button onClick={() => {}}>
              <FiExternalLink size={18} color={theme.colors.primary} />
            </Button>
            <Button onClick={() => {}}>
              <FiEdit2 size={18} color={theme.colors.primary} />
            </Button>
            <Button onClick={() => {}}>
              <FiTrash2 size={18} color={theme.colors.primary} />
            </Button>
          </Td>
        </Tr>
      </tbody>
    </Container>
  );
}

export default Table;
