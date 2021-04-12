import styled from "styled-components";
import { transparentize, shade } from "polished";

export const Container = styled.div`
  background: ${(props) => transparentize(0.95, props.theme.colors.text)};
  backdrop-filter: blur(0.2rem);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100vw;
  min-height: 100vh;
  height: 100%;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalTitle = styled.h3`
  font-size: 1.8rem;
  max-width: 26rem;
  margin-bottom: 1rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 24rem;
  max-width: 90%;
  padding: 2.275rem;
  background: ${(props) => props.theme.colors.foreground};
  border-radius: 1rem;
  margin: 0 auto;

  @media (max-width: 50rem) {
    width: 30rem;
  }

  @media (max-width: 40rem) {
    width: 100%;
  }
`;

export const InputGroup = styled.div`
  position: relative;
  height: 3.6rem;
  width: 100%;

  & > svg {
    position: absolute;
    left: 1.25rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 3.6rem;
  padding: 1.8rem;
  padding-left: 3rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  &::placeholder {
    color: ${(props) => props.theme.colors.lightText};
  }
`;

export const TextAreaGroup = styled.div`
  margin: 0.75rem 0;
  position: relative;
  height: 7.2rem;
  width: 100%;

  & > svg {
    position: absolute;
    left: 1.25rem;
    top: 1.32rem;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 7.2rem;
  padding: 1.2rem;
  padding-left: 3.2rem;
  border: 0;
  border-radius: 0.5rem;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  outline: none;
  resize: none;
  font-family: Ubuntu, Arial, Helvetica, sans-serif;
  font-size: 1rem;

  &::placeholder {
    color: ${(props) => props.theme.colors.lightText};
  }
`;

export const ButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin-top: 1.25rem;
  @media (max-width: 50rem) {
    grid-template-columns: 1fr;
  }
`;

export const CancelButton = styled.button`
  width: 100%;
  height: 3.6rem;
  border: 0;
  border-radius: 0.5rem;
  cursor: pointer;
  background: ${(props) => transparentize(0.1, props.theme.colors.background)};
  color: ${(props) => props.theme.colors.primary};
  font-weight: 700;
  font-size: 1rem;
  transition: background 0.3s ease;
  &:hover {
    background: ${(props) => shade(0.025, props.theme.colors.background)};
  }
  &:disabled {
    background: ${(props) =>
      transparentize(0.15, props.theme.colors.background)};
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 3.6rem;
  border: 0;
  border-radius: 0.5rem;
  cursor: pointer;
  background: ${(props) => transparentize(0.1, props.theme.colors.primary)};
  color: ${(props) => props.theme.colors.text};
  font-weight: 700;
  font-size: 1rem;
  transition: background 0.3s ease;
  &:hover {
    background: ${(props) => shade(0.025, props.theme.colors.primary)};
  }
  &:disabled {
    background: ${(props) => transparentize(0.15, props.theme.colors.primary)};
  }
`;
