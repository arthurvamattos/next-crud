import { transparentize } from "polished";
import styled from "styled-components";

export const Container = styled.table`
  padding: 0.8rem 3.5rem;
  border-spacing: 0 1.7rem;

  @media (max-width: 37.5rem) {
    padding: 1.75rem 2rem;
  }
`;

export const Tr = styled.tr``;

export const Th = styled.th`
  padding-bottom: 0.5rem;
  font-weight: 600;
  text-align: left;

  :nth-child(3) {
    text-align: center;
  }
`;

export const Td = styled.td`
  color: ${(props) => props.theme.colors.lightText};

  :nth-child(3) {
    display: flex;
  }
`;

export const Button = styled.button`
  height: 2.25rem;
  width: 2.25rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.colors.gray};
  cursor: pointer;
  transition: background 0.2s ease;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  + button {
    margin-left: 0.5rem;
  }

  :hover {
    background: ${(props) => transparentize(0.8, props.theme.colors.primary)};
  }

  @media (max-width: 26rem) {
    height: 2.75rem;
    width: 2.75rem;
    border-radius: 1.2rem;
  }
`;
