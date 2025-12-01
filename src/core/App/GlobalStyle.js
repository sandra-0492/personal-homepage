import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
}

*,
::after,
::before {
    box-sizing: inherit;
}

body {
    background: ${({ theme }) => theme.colors.site.background};
    color: ${({ theme }) => theme.colors.site.text};
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    padding-bottom: 108px;
    letter-spacing: 0.05em;
    word-break: break-word;
    transition: background 0.3s;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        padding-bottom: 32px;
    }
}
`;
