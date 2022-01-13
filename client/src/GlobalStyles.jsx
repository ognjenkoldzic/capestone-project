import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    box-sizing: border-box;
}
:root {
    --primary: white;
    --secondary: #EC012A;
    background: #8f8e8e;
    color: var(--primary)

}
body {
    margin:0;
    font-family: Georgia, 'Times New Roman', Times, serif;
}
`
