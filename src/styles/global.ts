import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Ubuntu", Arial, Helvetica, sans-serif;
    color: ${(props) => props.theme.colors.text};
    background: ${(props) => props.theme.colors.background};
  }
`;
