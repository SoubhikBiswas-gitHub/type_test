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
    cursor:pointer;
    min-width:100%;
    max-height:80%;
    display:block;
    overflow:hidden;
    margin: auto 5px;
    text-align:justify;
    background-color:${ ({theme})=>theme.typeBox};
    // border: 10px groove red;
    padding :2px 5px; 
    border-radius:5px;
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
    color:${({theme})=>theme.text1};
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
margin:3px;
border : 2px solid ${({theme})=>theme.navitext};
border-radius:10px;
color:${({theme})=>theme.header_footer_text};
}

.timer:hover{
    cursor:pointer;
background-color:${({theme})=>theme.navibg};
color:${({theme})=>theme.navitext};
}

.time{
    cursor:pointer;
     margin:.5rem;
     padding:0 .5rem;
     font-size:1.3rem;
     border : 2px solid ${({theme})=>theme.navitext};
border-radius:10px;
color:${({theme})=>theme.header_footer_text};
}

.time:hover{
    cursor:pointer;
    background-color:${({theme})=>theme.navibg};
color:${({theme})=>theme.navitext};

}

.kdb{
    border-radius: 5px;
    padding: 5px;
    border: 1px solid ${({theme})=>theme.mainbg};
    background-color:${({theme})=>theme.mainbg};
    color:${({theme})=>theme.mainbg2};
    font-size:.8rem;
    font-weight:700;
    box-shadow:  0px 1px 10px 0px rgba(51, 50, 50, 0.5)
}

b{
color:white;
    font-size:1rem;
    font-weight:700;
    text-decoration : underline;
    // text-decoration: overline;
}

.userStat{
    background-color:${({theme})=>theme.mainbg2};
    border: 1px solid ${({theme})=>theme.mainbg2};
    padding:5px;
    color:${({theme})=>theme.textbg1};
    border-radius:5px;
    box-shadow:  0px 1px 10px 0px rgba(51, 50, 50, 0.5);
    text-align:center;
    font-size:1rem;
    display: flex;
    flex-direction:column;
    justify-content:space-between;
}

.user-result{
    color:${({theme})=>theme.textbg2};
    font-size:1.5rem;
    font-weight:700;
}

.user-profile{
    background-color:${({theme})=>theme.typeBox};
    padding:5px;
    color:goldenrod;
    border-radius:5px;
    box-shadow:  0px 1px 10px 0px rgba(51, 50, 50, 0.5);
    text-align:left;
    font-size:1rem;
    border: 1px solid black;
    /* background-image:url("https://source.unsplash.com/random/1200×300/?Experimental"); */



.ul {
	width:100px;
    list-style-position: outside;
}
.ol {
	width:100px;
    list-style-position: outside;
}
.blur{
    filter: blur(5px);
 }
 #focusWarning{
    height:100px;
    display:none!important;
 }
 
 .list-head{
    color:${({theme})=>theme.navibg};
 }
 .list{
    color:${({theme})=>theme.text2};
 }

.mode{
    color:${({theme})=>theme.mainbg2};
    font-weight:700;
}

.hidden-input{
    opacity:0
}

}
`;
