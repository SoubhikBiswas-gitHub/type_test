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

// .canvas{
//     display:grid;
//     justify-items:center;
//     gap:0.5rem;
//     grid-auto-flow: row;
//     grid-template-rows : auto 1fr auto;
//     min-height:100vh;
//     padding:1rem;
//     margin-left:auto;
//     margin-right:auto;
// } 

.mainbox{
   
}

.type-box{
    min-width:100%;
    height:fit-content;
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

}

.word{
    /* border:1px solid red; */
    padding:1px 2px;
    margin:1px 1px;
    
}

.Charecter{
    // margin:1px .5px;
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

.time{
     margin:10px
}

.time:hover{
    cursor:pointer;
    color:green;
}

`;
