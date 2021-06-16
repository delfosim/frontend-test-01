import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *, input, button {
        font-family: 'Roboto', sans-serif;
    }

    body{
        background-color: #9b9b9b;
    }

    html, body, #root {
        height: 100%;
    }
`