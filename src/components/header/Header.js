import React,{useState} from "react"
import logo from "../../Images/logo.webp"
import down from "../../Images/down-arrow.png"
import SideNav from "react-simple-sidenav";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import {Link} from "react-router-dom"
import pic from "../../Images/data.jpg"
import "./header.css"
import "./headermedia.css"
const Header = () =>{
    const [open,setopen]=useState(false)
    const [name,setName]=useState("")
 const onOpenModal = (str) => {
     setName(str)
    setopen(true);
    
  };

const  onCloseModal = () => {
    setopen(false);
  };

    const [showNav, setShowNav] = useState();
    const navItems = [
        <Link onClick={()=>{onOpenModal("Home")}}>
          Link1
        </Link>,
        <Link  onClick={()=>{onOpenModal("Solutions")}}>
          Link2
        </Link>,
        <Link  onClick={()=>{onOpenModal("Insights")}}>
          Link3
        </Link>,
        <Link  onClick={()=>{onOpenModal("Team")}}>
          Link3
        </Link>,
        <Link  onClick={()=>{onOpenModal("Demo")}}>
          Link3
        </Link>
      ];
    return <div className="row header">
        <div className="col-lg-1 col-md-1 col-sm-1 col-0">

        </div>
        <div className="col-lg-10 col-md-10 col-sm-10 col-12 header-box-main">
            <div>
                <img  src={logo} alt="logo"/>
                <span className="compny-name">DATALYTIX</span>
            </div>
            <div className="header-tabs">
                <div onClick={()=>{onOpenModal("Home")}} className="head-comp">Home</div>
                <div onClick={()=>{onOpenModal("Solutions")}} className="head-comp">Solutions<img src={down} alt="dpwm"/></div>
                <div onClick={()=>{onOpenModal("Insights")}} className="head-comp">Insights<img src={down} alt="dpwm"/></div>
                <div onClick={()=>{onOpenModal("Team")}} className="head-comp">Team</div>
                <button onClick={()=>{onOpenModal("Demo")}} className="head-comp demo-btn">Demo</button>
            </div>
            <Modal open={open} onClose={onCloseModal}>
          <h2 className="topic">{name}</h2>
          <img className="data-science" src={pic} alt="data science"/>
        </Modal>
            <div className="ham-contanier" onClick={() => setShowNav(true)}>
        <div class="one"></div>
        <div class="two"></div>
        <div class="three"></div>
        
        </div>
        </div>
        <div className="col-lg-1  col-md-1 col-sm-1 col-0">

        </div>
        <SideNav
                  openFromRight={true}
                  showNav={showNav}
                  onHideNav={() => setShowNav(false)}
                  navStyle={{width:"20rem"}}
                  title="Menu Bar"
                  items={navItems}
                  titleStyle={{
                    backgroundColor: "#F3F4F4",
                    padding: "0rem 20px",
                    color: "#6C6F71",
                    fontSize: "22px",
                  }}
                  itemStyle={{ backgroundColor: "#fff",listStyle:"none" }}
                  itemHoverStyle={{ backgroundColor: "#CDDC39" }}
                />
    </div>
}
export default Header;