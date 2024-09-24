import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --blue: #2874a6;
    --pale-yellow: #fef9e7;
    --pale-purple: #f4ecf7;
    --cream: #f9fefa;
}
body {
    margin: 0;
    font-family: "Roboto", sans-serif;
}

#root {
    height: 100dvh;
}
`;
