import React from "react";
import Content from "./components/Content";
import "./App.css";
import Footer from "./components/Footer";
import SideMenu from "./components/SideMenu";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Content />
        <SideMenu />
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
