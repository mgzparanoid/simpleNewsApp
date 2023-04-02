import React from "react";
import { Link } from "react-router-dom";

const SideMenu: React.FC = () => {
  return (
    <>
      <Link to="/country/pl">
        <span style={{ textDecoration: "none" }}>Poland</span>
      </Link>
      <br />
      <Link to="/country/gb">
        <span style={{ textDecoration: "none" }}>Great Britain</span>
      </Link>
      <br />
      <Link to="/country/jp">
        <span style={{ textDecoration: "none" }}>Japan</span>
      </Link>
      <br />
      <Link to="/country/de">
        <span style={{ textDecoration: "none" }}>Germany</span>
      </Link>{" "}
      <br />
      <Link to="/country/us">
        <span style={{ textDecoration: "none" }}>USA</span>
      </Link>
    </>
  );
};
export default SideMenu;
