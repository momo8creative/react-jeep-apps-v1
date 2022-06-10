import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing:border-box;
    }

    body {
        margin:0;
        font-family: 'Roboto', sans-serif;
        color:${({ theme }) => theme.text};
        background-color:${({ theme }) => theme.bgBase};
        font-size:1rem;
    }

    h1,h2,h3,h4,h5,h6 {
        margin:0;
    }

    ul li {
        list-style:none;
    }

    a {
        text-decoration:none;
        color:inherit;
        display:block;
    }
`;
