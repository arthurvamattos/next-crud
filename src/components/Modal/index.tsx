import {
  useState,
  useCallback,
  useContext,
  forwardRef,
  useImperativeHandle,
  FormEvent,
  Dispatch,
  SetStateAction,
} from "react";

import { ThemeContext, DefaultTheme } from "styled-components";

import { FiTool, FiBookOpen, FiLink } from "react-icons/fi";
import OutsideClickHandler from "react-outside-click-handler";

import { toast } from "react-toastify";

import {
  Container,
  ModalTitle,
  Form,
  InputGroup,
  Input,
  Button,
  CancelButton,
  ButtonsWrapper,
  TextAreaGroup,
  TextArea,
} from "./styles";

export interface ModalHandles {
  openModal: () => void;
  openEditModal: (tool: Tool) => void;
}

interface Tool {
  _id: string;
  name: string;
  description: string;
  link: string;
}

interface Props {
  // tools: Array<Tool>;
  // setTools: Dispatch<SetStateAction<Tool[]>>;
}

const Modal: React.ForwardRefRenderFunction<ModalHandles, Props> = (
  {},
  ref
) => {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [tool, setTool] = useState<Tool>();

  const theme = useContext<DefaultTheme>(ThemeContext);

  const clearFields = useCallback(() => {
    setName("");
    setDescription("");
    setLink("");
    setTool(undefined);
  }, []);

  const closeModal = useCallback(() => {
    clearFields();
    setVisible(false);
  }, []);

  const openModal = useCallback(() => {
    setVisible(true);
  }, []);

  const openEditModal = useCallback((tool: Tool) => {
    setName(tool.name);
    setDescription(tool.description);
    setLink(tool.link);
    setVisible(true);

    setTool(tool);
  }, []);

  useImperativeHandle(ref, () => {
    return {
      openModal,
      openEditModal,
    };
  });

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  function handleEditSubmit(event: FormEvent) {
    event.preventDefault();
  }

  if (!visible) {
    return null;
  }

  return (
    <Container>
      <OutsideClickHandler onOutsideClick={closeModal}>
        <Form onSubmit={tool ? handleEditSubmit : handleSubmit}>
          <ModalTitle>{name !== "" ? name : "Tool"}</ModalTitle>
          <InputGroup>
            <FiTool size={16} color={theme.colors.primary} />
            <Input
              type="text"
              placeholder="Tool name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </InputGroup>

          <TextAreaGroup>
            <FiBookOpen size={16} color={theme.colors.primary} />
            <TextArea
              placeholder="A small descripiton of the tool"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </TextAreaGroup>

          <InputGroup>
            <FiLink size={16} color={theme.colors.primary} />
            <Input
              type="text"
              placeholder="Where I find the tool?"
              required
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </InputGroup>

          <ButtonsWrapper>
            <CancelButton type="button" onClick={closeModal}>
              Cancel
            </CancelButton>
            {tool ? (
              <Button type="submit">Update</Button>
            ) : (
              <Button type="submit">Add new</Button>
            )}
          </ButtonsWrapper>
        </Form>
      </OutsideClickHandler>
    </Container>
  );
};

export default forwardRef(Modal);
