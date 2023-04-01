import React from "react";
import Content from "./components/Content";
import "./App.css";
import Footer from "./components/Footer";
import SideMenu from "./components/SideMenu";
import Header from "./components/Header";
import { Grid } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Header />
      <Grid container>
        <Content />
        <SideMenu />
      </Grid>
      <Footer />
    </div>
  );
}

export default App;
