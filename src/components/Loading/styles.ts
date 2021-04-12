import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${(props) => props.theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled.div`
  width: 3.6rem;
  height: 3.6rem;
  border: 0.8rem solid ${(props) => props.theme.colors.primary};
  border-radius: 2rem;
  border-left-color: ${(props) => props.theme.colors.background};
  animation: spin 1.8s linear infinite;
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;
