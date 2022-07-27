import React from "react";
import Menu from "../Menu";
import "./style.scss";

export default function Header() {
  return (
    <div className="header-wrap">
      <p className="brand-description">
        We specialised in setting up the foundation of your brand and setting
        you up for success
      </p>
      <Menu />
    </div>
  );
}
