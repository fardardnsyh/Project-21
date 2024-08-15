import React, { ReactElement } from 'react'
import { Link } from "react-router-dom";
import logo from "../images/astral-nav-logo-300x300.png";

interface Props {
  
}

export default function BrandLink({}: Props): ReactElement {
  return (
    <Link to="/" id="brand-container" className="grid">
    <img src={logo} alt="Atral Nav" className="brand-img" />
    <h1 className="brand-text">ASTRAL NAV</h1>
  </Link>
  )
}
