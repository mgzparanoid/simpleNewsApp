import React from "react";
import { Link } from "react-router-dom";

const SideMenu: React.FC = () => {
  return (
    <>
      <Link to="/country/pl">
        <img
          alt="Poland"
          src="http://purecatamphetamine.github.io/country-flag-icons/3x2/PL.svg"
          style={{ height: "12px", width: "18px" }}
        />
        <span style={{ textDecoration: "none" }}>Poland</span>
      </Link>
      <br />
      <Link to="/country/gb">
        <img
          alt="Great Britain"
          src="http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg"
          style={{ height: "12px", width: "18px" }}
        />
        <span style={{ textDecoration: "none" }}>Great Britain</span>
      </Link>
      <br />
      <Link to="/country/jp">
        <img
          alt="Japan"
          src="http://purecatamphetamine.github.io/country-flag-icons/3x2/JP.svg"
          style={{ height: "12px", width: "18px" }}
        />
        <span style={{ textDecoration: "none" }}>Japan</span>
      </Link>
      <br />
      <Link to="/country/de">
        <img
          alt="Germany"
          src="http://purecatamphetamine.github.io/country-flag-icons/3x2/DE.svg"
          style={{ height: "12px", width: "18px" }}
        />
        <span style={{ textDecoration: "none" }}>Germany</span>
      </Link>
      <br />
      <Link to="/country/us">
        <img
          alt="United States"
          src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
          style={{ height: "12px", width: "18px" }}
        />
        <span style={{ textDecoration: "none" }}>USA</span>
      </Link>
    </>
  );
};
export default SideMenu;
