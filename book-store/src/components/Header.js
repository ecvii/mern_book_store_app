import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar } from "@mui/material";
// import { Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import InfoIcon from "@mui/icons-material/Info";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState();
  return (
    <div>
      <AppBar sx={{ backgroundColor: "darkslategrey" }} position="sticky">
        <Toolbar>
          {/* <NavLink to="/">
            <Typography>
              <HomeIcon />
            </Typography>
          </NavLink> */}

          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="secondary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab
              LinkComponent={NavLink}
              to="/"
              label="Home"
              icon={<HomeIcon />}
            />
            <Tab
              LinkComponent={NavLink}
              to="/add"
              label="Add Book"
              icon={<BookmarkAddIcon />}
            />
            <Tab
              LinkComponent={NavLink}
              to="/books"
              label="Books"
              icon={<MenuBookIcon />}
            />
            <Tab
              LinkComponent={NavLink}
              to="/about"
              label="About"
              icon={<InfoIcon />}
            />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
