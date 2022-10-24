import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*,*::after,*::before{
    box-sizing:border-box;
    padding:0;
    margin: 0;
}

body{
    padding:0;
    margin: 0;
    transition: all 0.3s linear;
}

body {
    -ms-overflow-style: none;  
    scrollbar-width: none;  
}
body::-webkit-scrollbar { 
    display: none;  
}

.canvas{
    display:grid;
    justify-items:center;
    gap:0.5rem;
    grid-auto-flow: row;
    grid-template-rows : 1fr ;
    height:100vh;
    transition: all 0.3s linear;
} 

.type-box{
    min-width:100%;
    max-height:80%;
    display:block;
    overflow:hidden;
    margin: auto 5px;
    text-align:justify;
    // border: 10px groove red;
}
.stats-box{
   min-width:100%;
    height:fit-content;
    display:block;
    overflow:hidden;
    margin: auto 5px;
    text-align:justify; 
     border:2px solid blue;
}

.result-box{
     min-width:90%;
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
line-height:1.8rem
}

.word{
    /* border:1px solid red; */
    padding:1px 2px;
    margin:1px 1px;
    
}

.Charecter{
    margin:1px .5px;
    color:#111;
    font-size:1.5rem;
    font-weight:500;
}

.correctChar{
    color:green;
}


.incorrectChar{
    color:red;
}

.currentCharLeftCursor{
    border-left: 1px solid;
    animation: borderLeft 2s infinite;
    animation-timing-function: ease;


    @keyframes borderLeft { 
        0%{border-left-color: #111}
        25%{border-left-color: #fff}
        50%{border-left-color: #111}
        75%{border-left-color: #fff}
        100%{border-left-color: #111}
    }
}
.currentCharRightCursor{
    border-right: 1px solid #111;
    animation: borderRight 2s infinite;
    animation-timing-function: ease;

   @keyframes borderRight { 
        0%{border-right-color: #111}
        25%{border-right-color: #fff}
        50%{border-right-color: #111}
        75%{border-right-color: #fff}
        100%{border-right-color: #111}
    }
}

.timmer-menu{
    display:flex;
    justify-content: space-around;
    align-items:   center;
   ;
}

.timer{
padding:.5rem;
border : 5px solid orange;
border-radius:10px;
color:orange;
}

.timer:hover{
background-color:orange;
color:white;
}

.time{
     margin:.5rem;
     padding:0 .5rem;
     font-size:1.3rem;
     border: 2px solid green;
     border-radius:10px;
color : green;
}

.time:hover{
    cursor:pointer;
    color:white;
    background-color:green;

}

.kdb{
    border-radius: 5px;
    padding: 5px;
    border: 1px solid gray;
    background-color:gray;
    color:white;
    font-size:.8rem;
    font-weight:700;
    boxShadow:"  0px 1px 10px 0px rgba(51, 50, 50, 0.5)"
}

b{
color:white;
    font-size:1rem;
    font-weight:700;
    text-decoration : underline;
    // text-decoration: overline;
}

`;
