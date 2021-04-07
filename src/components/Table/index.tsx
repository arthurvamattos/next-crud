import axios from "axios";
import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { FiEdit2, FiTrash2, FiExternalLink } from "react-icons/fi";
import ReactTooltip from "react-tooltip";
import { ThemeContext, DefaultTheme } from "styled-components";

import { Container, Tr, Th, Td, Button, NoTools } from "./styles";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface Tool {
  _id: string;
  name: string;
  description: string;
  link: string;
}

interface Props {
  tools: Tool[];
  setTools: Dispatch<SetStateAction<Tool[]>>;
  openEditModal(tool): void;
}

function Table({ tools, openEditModal, setTools }: Props) {
  const [deleteButtonsDisabled, setDeleteButtonsDisabled] = useState(false);
  const theme = useContext<DefaultTheme>(ThemeContext);

  useEffect(() => {
    ReactTooltip.rebuild();
  });

  if (tools.length <= 0) {
    return <NoTools>No tool yet :c</NoTools>;
  }

  async function handleDelete(id) {
    try {
      setDeleteButtonsDisabled(true);
      await axios.delete(`/api/tools/${id}`);
      const filteredTools = tools.filter(
        (tool) => tool._id.toString() !== id.toString()
      );
      setTools(filteredTools);
      toast.success("Deleted with success");
    } catch (error) {
      toast.error("Error on delete, please try again");
    } finally {
      setDeleteButtonsDisabled(false);
    }
  }

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
        {tools.map((tool) => (
          <Tr key={tool._id}>
            <Td>{tool.name}</Td>
            <Td>{tool.description}</Td>
            <Td>
              <Button onClick={() => {}} data-tip data-for="link">
                <a href={tool.link} target="_blanl">
                  <FiExternalLink size={18} color={theme.colors.primary} />
                </a>
              </Button>
              <Button
                onClick={() => {
                  openEditModal(tool);
                }}
                data-tip
                data-for="edit"
              >
                <FiEdit2 size={18} color={theme.colors.primary} />
              </Button>
              <Button
                disabled={deleteButtonsDisabled}
                onClick={() => {
                  handleDelete(tool._id);
                }}
                data-tip
                data-for="add"
              >
                <FiTrash2 size={18} color={theme.colors.primary} />
              </Button>
            </Td>
          </Tr>
        ))}
      </tbody>
    </Container>
  );
}

export default Table;
