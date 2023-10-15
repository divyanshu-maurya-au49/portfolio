import React from "react";
import "./Contect.css";
import { AiFillLinkedin, AiOutlineFacebook, AiOutlineGithub } from "react-icons/ai";

const Contect = () => {
  return (
    <>
      <div className=" contact" id="contect">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <img
                    src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                    alt="contect"
                    className="image"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 com-md-6">
              <div className="card2 d-flex card border-0 px-4 py-5">
                <div className="row">
                  <div className="row">
                    <h6>
                      
                      Contect With
                      <AiFillLinkedin color="blue" size={30} className="ms-2" />
                      <AiOutlineGithub color="black" size={30} className="ms-2"/>
                      <AiOutlineFacebook color="blue" size={30} className="ms-2"/>
                         </h6>
                  </div>
                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div>
                  <div className="row px-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enatr your Name"
                      className="mb-3"
                    />

                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your Email"
                      className="mb-3"
                    />
                    <textarea
                      type="text"
                      name="msg"
                      placeholder="Write your Message"
                      className="mb-3"
                    />
                    <div className="row px-3">
                      <button className="button" type="submit">
                        SEND MESSAGE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contect;
