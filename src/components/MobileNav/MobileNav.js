import React, { useState } from "react";
import "./MobileNav.css";
import { AiOutlineMenu, AiOutlineMenuUnfold } from "react-icons/ai";
import { Link } from "react-scroll";
import {
  FcHome,
  FcAbout,
  FcBiotech,
  FcBookmark,
  FcReading,
  FcVoicePresentation,
} from "react-icons/fc";
import { AiOutlineUserAdd } from "react-icons/ai";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  //handle open
  const handleopen = () => {
    setOpen(!open);
  };

  //handle menu clicks
  const handlemenuClick = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="mobile-nav">
        <div className="mobile-nav-header">
          {open ? (
            <AiOutlineMenuUnfold
              size={30}
              className="mobile-nav-icon"
              onClick={handleopen}
            />
          ) : (
            <AiOutlineMenu
              size={30}
              className="mobile-nav-icon"
              onClick={handleopen}
            />
          )}
          <span className="mobile-nav-title">My Portfolio App</span>
        </div>
        {open && (
          <div className="mobile-nav-menu">
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handlemenuClick}
                  >
                    <FcHome />
                    Home
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handlemenuClick}
                  >
                    <FcAbout />
                    About
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handlemenuClick}
                  >
                    <FcReading />
                    Education
                  </Link>
                </div>

                <div className="nav-link">
                  <Link
                    to="tech"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handlemenuClick}
                  >
                    <FcBiotech />
                    Tech Stack
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="project"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handlemenuClick}
                  >
                    <FcVoicePresentation />
                    Project
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="exp"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handlemenuClick}
                  >
                    <FcBookmark />
                    work Experience
                  </Link>
                </div>

                <div className="nav-link">
                  <Link
                    to="contect"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handlemenuClick}
                  >
                    <AiOutlineUserAdd />
                    Contect
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileNav;
