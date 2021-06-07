import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", Verdana, Geneva, Tahoma, sans-serif;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  button, input {
    border: none;
  }

  body {
    overflow-x: hidden;
  }
`;

export const ButtonGradient = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  border-radius: 100px;
  background: linear-gradient(
    90.11deg,
    #25beff -17.32%,
    #ff54d9 109.02%,
    #ff54d9 109.02%
  );

  font-weight: 600;
  cursor: pointer;
  color: #f4f4f4;

  background-size: 200%;

  transition: background 0.25s ease-in;

  :hover {
    background-position: right;
  }
`;

ButtonGradient.defaultProps = {
  width: "8rem",
  height: "2.5rem",
};