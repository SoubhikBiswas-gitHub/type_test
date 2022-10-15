import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*,*::after,*::before{
    box-sizing:border-box;
    padding:0;
    margin: 0;
}

body{
    background:#AEBDCA;
    display: flex;
    align-items:center;
    flex-direction:column;
    justify-content:center;
    height:100%;
    width: 100%;
    /* color:#111; */
    transition: all 0.3s linear;
}

.canvas{
    display:grid;
    justify-items:center;
    gap:0.5rem;
    grid-auto-flow: row;
    grid-template-rows : auto 1fr auto;
    min-height:100vh;
    padding:1rem;
    margin-left:auto;
    margin-right:auto;
} 

.type-box{
    max-width:70%;
    height:fit-content;
    display:block;
    overflow:hidden;
    margin: auto 5px;
    text-align:justify;

}

.words{
display:flex;
flex-direction:row;
flex-wrap:wrap;
justify-content:flex-start;
width:fit-content;

}

.word{
    /* border:1px solid red; */
    // padding:1px 2px;
    // margin:1px 1px;
    
}

.Charecter{
    margin:1px .5px;
}

.correctChar{
    color:green;
}


.incorrectChar{
    color:red;
}

`

