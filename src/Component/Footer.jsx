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
    backgroundColor: theme. textbg2,
    color:theme.textbg2,
    boxShadow:"0px 3px 5px 0px rgba(51, 50, 50, 0.7)"
     }}>
      <div className="link"></div>
      <div className="note"></div>
      <div className="theme"><Select
    value="theme"
    options={themeOptions}
    menuPlacement='top'
    onChange={handleThemeChange}
    defaultValue={{label:defaultTheme.label,value:defaultTheme}}
    styles={{
      width:"100px",
        control: (styles) => ({...styles,backgroundColor:theme.header_footer, cursor:'pointer',color:theme.header_footer, borderColor:theme.mainbg}),
        singleValue: (styles) => ({...styles, color:theme.header_footer}),
        menu: styles => ({...styles,backgroundColor:theme.typeBox})
    }}
/></div>
    </Box>
  );
}
export default Footer;
