import { createGlobalStyle } from "styled-components/";

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;700&display=swap');

*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
}

html{
    font-family: 'Open Sans', sans-serif;
    font-size:62.5%;
    

}

@media (max-width: 941px) {
        html {
            font-size: 50%;
        }
    }

`;
