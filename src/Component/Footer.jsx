import React from "react";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import Select from "react-select";
import { useTheme } from "../Context/ThemeContext";
import { themeOptions } from "../Styled_Component/theme";

function Footer() {
  const { setTheme, theme, defaultTheme } = useTheme();
  const handleThemeChange = (e) => {
    setTheme(e.value);
  };

  

  return (
    <Box sx={{ display:"grid", 
    gridTemplateColumns: "1fr 8fr 1fr", 
    width: "100%", hight:"6rem", 
    backgroundColor: "orange",
    boxShadow:"  0px 3px 5px 0px rgba(51, 50, 50, 0.7)"
     }}>
      <div className="link"></div>
      <div className="note"></div>
      <div className="theme"><Select
 styles={{width:"100px"}}
    value="theme"
    options={themeOptions}
    menuPlacement='top'
    onChange={handleThemeChange}
    // defaultValue={{label:defaultTheme.label,value:defaultTheme}}
    // styles={{
        // control: (styles) => ({...styles,backgroundColor:theme.background, cursor:'pointer', borderColor:theme.title}),
        // singleValue: (styles) => ({...styles, color:theme.title}),
        // menu: styles => ({...styles,backgroundColor:theme.background})
    // }}
/></div>
    </Box>
  );
}
export default Footer;
