import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { MenuItem, Select } from "@mui/material";
import { themeOptions } from "../Styled_Component/theme";
import { useTheme } from "../Context/ThemeContext";

function Footer() {
  const [value, setValue] = React.useState("recents");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
const {setTheme}=useTheme
const handelThemeChange=(e)=>{
setTheme(e.target.value);
// 
}


  return (
    <BottomNavigation
      sx={{ width: "100%", backgroundColor: "orange" }}
      value={value}
      onChange={handleChange}
    >
      {/* <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={<RestoreIcon />}
      /> */}
      {/* <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<LocationOnIcon />}
      /> */}
      {/* <BottomNavigationAction
        label="Themes"
        value="folder"
        icon={<FolderIcon />}
      ></BottomNavigationAction> */}
      <Select options={themeOptions} value={[1]} label="Options" onChange={handelThemeChange}>
        {themeOptions.map((op) => (
          <MenuItem value={op.value}>{op.label}</MenuItem>
        ))}
      </Select>
    </BottomNavigation>
  );
}

export default Footer;
