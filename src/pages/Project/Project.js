import React from "react";
import "./Project.css";
import Spin from 'react-reveal/Spin';

const Project = () => {
  return (
    <>
      <div className="container project" id="project">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECT
        </h2>
        <hr />
        <p className="pb-3 text-center">
          👉 Here are my top project with source code <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet,
        </p>

        <div className="row" id="ads">
          <Spin>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge"> full stack </span>
                <img
                  src="https://img.freepik.com/free-photo/blog-website-development-data-network-concept_53876-125055.jpg?w=900&t=st=1695207869~exp=1695208469~hmac=c640fce9b2945c11daeab209f58f6912eedbec32d543663c98adf6afba3868b7"
                  alt="project1"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">Mongodb</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Blog App</h5>
                </div>
                <a className="ad-btn" href="#">
                  View
                </a>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge"> Mern Stack </span>
                <img
                  src="https://img.freepik.com/free-vector/graphic-design-courses-isometric-concept-with-computer-tablet-planner-money-swatches-3d-vector-illustration_1284-30002.jpg?w=900&t=st=1695209923~exp=1695210523~hmac=0fffcac48fd701c5f400ba3408ddb6a77cb0df93ce0a2be9d1e17b136eb300e6"
                  alt="project1"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">Mongodb</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Ecommers App</h5>
                </div>
                <a className="ad-btn" href="view">
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge"> full stack </span>
                <img
                  src="https://img.freepik.com/free-vector/gradient-creative-portfolio-templates_23-2149206303.jpg?w=900&t=st=1695210025~exp=1695210625~hmac=e37104d70c135a5a9e1818612d6fbe2c04d5fd0ea6a5d7a30ef8a0c2e611493b"
                  alt="project1"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">Mongodb</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase"> Portfolio</h5>
                </div>
                <a className="ad-btn" href="#">
                  View
                </a>
              </div>
            </div>
          </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Project;
