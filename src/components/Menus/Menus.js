import React from "react";
import "./Menus.css";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
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
const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
        <Zoom>
          <div className="navbar-profile-pic">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI8DK8HCuvWNyHHg8enmbmmf1ue4AeeF3GDw&usqp=CAU"
              alt="profile-pic"
            />
          </div>
          </Zoom>
          <Fade left>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
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
                >
                  <AiOutlineUserAdd />
                  Contect
                </Link>
              </div>
            </div>
          </div>
          </Fade>
        </>
      ) : (
        <>
          <div className="nav-item">
            <div className="nav-link">
            <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcHome />
                </Link>
            </div>
            <div className="nav-link">
            <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcAbout />
                </Link>
            </div>
            <div className="nav-link">
            <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcReading />
                </Link>
            </div>

            <div className="nav-link">
            <Link
                  to="tech"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcBiotech />
                </Link>
            </div>
            <div className="nav-link">
            <Link
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcVoicePresentation />
                </Link>
            </div>
            <div className="nav-link">
            <Link
                  to="exp"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcBookmark />
                </Link>
            </div>

            <div className="nav-link">
            <Link
                  to="contect"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <AiOutlineUserAdd />
                </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menus;
