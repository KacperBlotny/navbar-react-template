import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo-01.png";

import Dropdown from "../Dropdown";

function Navbar() {
  return (
    <>
      <div className="hidden xl:flex justify-between shadow-md w-screen p-4">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-8" />
        </Link>
        <div className="flex">
          <ul className="flex text-sm m-auto">
            <li className="px-4 dropdown">
              <p className="dropbtn hover:text-normal cursor-pointer">
                O nas <i class="fa-solid fa-chevron-down text-normal"></i>
              </p>
              <div className="dropdown-content">
                <Link to="/about-us">Item 1</Link>
                <Link to="/about-us">Item 1</Link>
              </div>
            </li>
            <li className="px-4 dropdown">
              <p className="dropbtn hover:text-normal cursor-pointer">
                Dla pracowników{" "}
                <i class="fa-solid fa-chevron-down text-normal"></i>
              </p>
              <div className="dropdown-content">
                <Link to="/about-us">Item 1</Link>
                <Link to="/about-us">Item 1</Link>
              </div>
            </li>
            <li className="px-4 dropdown">
              <p className="dropbtn hover:text-normal cursor-pointer">
                Dla pracodawców{" "}
                <i class="fa-solid fa-chevron-down text-normal"></i>
              </p>
              <div className="dropdown-content">
                <Link to="/about-us">Item 1</Link>
                <Link to="/about-us">Item 1</Link>
              </div>
            </li>
            <li className="px-4 dropdown">
              <p className="dropbtn hover:text-normal cursor-pointer">
                Dla agencji zatrudnienia{" "}
                <i class="fa-solid fa-chevron-down text-normal"></i>
              </p>
              <div className="dropdown-content">
                <Link to="/about-us">Item 1</Link>
                <Link to="/about-us">Item 1</Link>
              </div>
            </li>{" "}
            <li className="px-4 dropdown">
              <p className="dropbtn hover:text-normal cursor-pointer">
                <i class="fa-solid fa-language"></i>
              </p>
              <div className="dropdown-content">
                <Link to="/about-us">Item 1</Link>
                <Link to="/about-us">Item 1</Link>
              </div>
            </li>
            <li className="px-4 hover:text-normal cursor-pointer">
              <Link to="/contact">Kontakt</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile navbar */}
      <div className="shadow-md w-screen p-4 xl:hidden">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-8" />
        </Link>
        <div className="hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label className="menu__btn" for="menu__toggle">
            <span></span>
          </label>

          <ul className="menu__box">
            <li className="px-4 py-2">
              <Link to="/">
                <img src={logo} alt="Logo" className="h-8" />
              </Link>
            </li>
            <li className="px-6 py-2">
              <Dropdown title="O nas" />
            </li>
            <li className="px-6 py-2">
              <Dropdown title="Dla pracowników" />
            </li>
            <li className="px-6 py-2">
              <Dropdown title="Dla pracodawców" />
            </li>
            <li className="px-6 py-2">
              <Dropdown title="Dla agencji zatrudnienia" />
            </li>
            <li className="px-6 py-2">
              <Dropdown title="Język" />
            </li>
            <li className="px-6 py-2 mt-2">
              <Link to="/">Kontakt</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
