import { createContext, useContext, useState } from "react";
// import { themeOptions } from "../Styled_Component/theme";


 const ThemeContext =createContext();

export const ThemeContextProvider = ({children})=>{
   
    const [theme, setTheme] = useState({
        background:"green",
        color:"white"
    });
    const values = {
        theme,
        setTheme,
    }

    return (<ThemeContext.Provider value = {values}>{children}</ThemeContext.Provider>);

}

export const useTheme = ()=> useContext(ThemeContext);




