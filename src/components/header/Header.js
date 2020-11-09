import React, { useState } from "react";
import logo from "../../Images/logo.webp";
import down from "../../Images/down-arrow.png";
import SideNav from "react-simple-sidenav";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { Link } from "react-router-dom";
import pic from "../../Images/data.jpg";
import "./header.css";
import "./headermedia.css";
import item from "./Items"
const Header = () => {
  const [open, setopen] = useState(false);
  const [name, setName] = useState("");
  const onOpenModal = (str) => {
    setName(str);
    setopen(true);
  };

  const onCloseModal = () => {
    setopen(false);
  };

  const [showNav, setShowNav] = useState();
  const navItems = [
    <Link
      onClick={() => {
        onOpenModal("Home");
      }}
    >
      Home
    </Link>,
    <Link
      onClick={() => {
        onOpenModal("Solutions");
      }}
    >
      Solutions
    </Link>,
    <Link
      onClick={() => {
        onOpenModal("Insights");
      }}
    >
      Insights
    </Link>,
    <Link
      onClick={() => {
        onOpenModal("Team");
      }}
    >
      Team
    </Link>,
    <Link
      onClick={() => {
        onOpenModal("Demo");
      }}
    >
      Demo
    </Link>,
  ];
  return (
    <div className="row header">
      <div className="col-lg-1 col-md-1 col-sm-1 col-0"></div>
      <div className="col-lg-10 col-md-10 col-sm-10 col-12 header-box-main">
        <div>
          <img src={logo} alt="logo" />
          <span className="compny-name">DATALYTIX</span>
        </div>
        <div className="header-tabs">
          <div
            onClick={() => {
              onOpenModal("Home");
            }}
            className="head-comp"
          >
            Home
          </div>
          <div class="dropdown">
            <div class="dropbtn head-comp">Solutions
            <img src={down} alt="dpwm" /></div>
            <div class="dropdown-content">
              <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 drop-part1">
                      <div className="drop-left-head">
                        Solution
                      </div>
                      <div className="drop-left-content">
                      Presenting the complete story through alternative data across multiple verticals
                      </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 drop-part2">
                  <div className="row">
                     {item.map((i)=>{
                       return <div className="col-lg-4 col-md-4 row-content">
                          <img className="img-cont" src={i.pic} alt="pic"/>
                          <h5 className="text-cont">{i.text}</h5>
                          </div>
                     })}
                     </div>
                </div>
              </div>
            </div>
          </div>
          <div class="dropdown">
            <div class="dropbtn head-comp">Insights
            <img src={down} alt="dpwm" /></div>
            <div class="dropdown-content1">
              <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 drop-part1">
                      <div className="drop-left-head">
                        Insights
                      </div>
                      <div className="drop-left-content">
                      Stories, key statistics, periodic reports for key industries from billions of signals and data points
                      </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 drop-part2">
                  <div className="row">
                     {item.map((i)=>{
                       return <div className="col-lg-4 col-md-4 row-content">
                          <img className="img-cont" src={i.pic} alt="pic"/>
                          <h5 className="text-cont">{i.text}</h5>
                          </div>
                     })}
                     </div>
                </div>
              </div>
            </div>
          </div>
      
          <div
            onClick={() => {
              onOpenModal("Team");
            }}
            className="head-comp"
          >
            Team
          </div>
          <button
            onClick={() => {
              onOpenModal("Demo");
            }}
            className="head-comp demo-btn"
          >
            Demo
          </button>
        </div>
        <Modal open={open} onClose={onCloseModal}>
          <h2 className="topic">{name}</h2>
          <img className="data-science" src={pic} alt="data science" />
        </Modal>
        <div className="ham-contanier" onClick={() => setShowNav(true)}>
          <div class="one"></div>
          <div class="two"></div>
          <div class="three"></div>
        </div>
      </div>
      <div className="col-lg-1  col-md-1 col-sm-1 col-0"></div>
      <SideNav
        openFromRight={true}
        showNav={showNav}
        onHideNav={() => setShowNav(false)}
        navStyle={{ width: "20rem" }}
        title="Menu Bar"
        items={navItems}
        titleStyle={{
          backgroundColor: "#F3F4F4",
          padding: "0rem 20px",
          color: "#6C6F71",
          fontSize: "22px",
        }}
        itemStyle={{ backgroundColor: "#fff", listStyle: "none" }}
        itemHoverStyle={{ backgroundColor: "#CDDC39" }}
      />
    </div>
  );
};
export default Header;
