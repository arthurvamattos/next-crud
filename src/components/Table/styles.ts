import { transparentize } from "polished";
import styled from "styled-components";

export const Container = styled.table`
  padding: 0.8rem 3.5rem;
  border-spacing: 0 1.7rem;

  @media (max-width: 37.5rem) {
    padding: 0.5rem 2rem;
  }
`;

export const Tr = styled.tr``;

export const Th = styled.th`
  padding-bottom: 0.5rem;
  font-weight: 600;
  text-align: left;

  + th {
    padding-left: 0.5rem;
  }

  :nth-child(2) {
    width: 95%;
  }

  :nth-child(3) {
    text-align: center;
  }

  @media (max-width: 29rem) {
    :nth-child(1) {
      width: 100%;
    }

    :nth-child(2) {
      display: none;
    }
  }
`;

export const Td = styled.td`
  color: ${(props) => props.theme.colors.lightText};
  width: 100%;

  + td {
    padding-left: 0.75rem;
  }

  :nth-child(1) {
    width: 20%;
  }
  :nth-child(3) {
    display: flex;
    align-items: center;
  }

  @media (max-width: 29rem) {
    :nth-child(1) {
      width: 100%;
      max-width: 9rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    :nth-child(2) {
      display: none;
    }
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

  @media (max-width: 29rem) {
    + button {
      margin-left: 0.25rem;
    }

    :hover {
      background: ${(props) => transparentize(0.8, props.theme.colors.primary)};
    }
  }
`;

export const NoTools = styled.p`
  margin: 0.8rem 3.5rem;
  font-size: 1.8rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};
`;
