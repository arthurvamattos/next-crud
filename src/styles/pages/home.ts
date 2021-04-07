import styled from "styled-components";
import { shade, transparentize } from "polished";

export const Wrapper = styled.main`
  width: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.main`
  width: 90%;
  max-width: 60rem;
  min-height: 30rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.colors.foreground};

  margin: 3rem 0;
`;

export const Header = styled.header`
  padding: 2.25rem 3.5rem 1.5rem;
  border-bottom: 0.1rem solid ${(props) => props.theme.colors.lightGray};

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 36rem) {
    flex-direction: column;
  }

  @media (max-width: 37.5rem) {
    padding: 1.75rem 2rem;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  height: 2rem;
  width: 2rem;
  min-width: 2rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.colors.primary};
  margin-right: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextWraper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.lightText};

  @media (max-width: 36rem) {
    font-size: 0.85rem;
  }
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 48rem) {
    align-self: flex-end;
    margin-top: 1.2rem;
  }
`;

export const ToggleTheme = styled.button`
  height: 3rem;
  width: 3rem;
  border-radius: 1.35rem;
  background: ${(props) => props.theme.colors.gray};
  cursor: pointer;
  transition: background 0.2s ease;
  border: none;
  margin-left: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background: ${(props) => transparentize(0.8, props.theme.colors.secondary)};
  }

  @media (max-width: 26rem) {
    height: 2.75rem;
    width: 2.75rem;
    border-radius: 1.2rem;
  }
`;

export const Add = styled.button`
  height: 4rem;
  width: 4rem;
  border-radius: 1.875rem;
  background: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  transition: background 0.2s ease;
  border: none;
  margin-left: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background: ${(props) => shade(0.1, props.theme.colors.primary)};
  }

  @media (max-width: 26rem) {
    height: 3rem;
    width: 3rem;
    border-radius: 1.35rem;
  }
`;
