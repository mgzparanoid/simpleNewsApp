import React from "react";
import Content from "./components/Content";
import "./App.css";
import Footer from "./components/Footer";
import SideMenu from "./components/SideMenu";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Grid } from "@mui/material";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
          <Header />
          <Grid container display="flex">
            <Grid item xs={2} sm={2} md={2}>
              <SideMenu />
            </Grid>
            <Grid item xs={10} sm={10} md={10}>
              <Content />
            </Grid>
          </Grid>
          <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
