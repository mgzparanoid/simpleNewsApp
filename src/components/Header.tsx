import Toolbar from "@mui/material/Toolbar";
import React from "react";
import { AppBar, Avatar, Container } from "@mui/material";

const Header: React.FC = () => {
  return (
    // <><Toolbar disableGutters sx={{background: "red"}}></Toolbar></>
    <AppBar position="static">
      <Container maxWidth="xl">
        {/* <Avatar alt="Gnstudio logo" src="/resources/gnstudio.png"/> */}
        <Avatar alt="Gnstudio logo" src="/images/gnstudio.png" />
        <img src="/images/gnstudio.png" alt="asd" />
      </Container>
    </AppBar>
  );
};
export default Header;
