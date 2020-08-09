import React, { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Tilt from 'react-tilt';


import SubMenu from "./SubMenu.js";

const SideBar = ({ isOpen, toggle }) => {

  const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [referrals, setReferrals] = useState('');

useEffect( ()=>{
  let jwt = window.localStorage.getItem("jwt");
    let result = jwtDecode(jwt);
    setUsername(result.username)
    // this.setState({username:result.username})
    console.log(`The result is`, result);
    console.log(`the current dashboard state is`, window.localStorage);

    //  getRefs
   
      //  fetch(`http://localhost:3006/api/v1/getrefs/${result.id}`)
      // .then(response => response.json())
      // .then(res => {
      //    setReferrals(res.data.rows[0].count)
      //     // this.setState({referrals: });
      //     console.log(res.data.rows[0].count);
      
      // })
      

    //   .catch(res => {
    //     console.log(res)
    
    // })
}, [username])


return (
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="">
    </div>
    <div className="side-menu">
      <div className=" pt-3">
    <Tilt className=" m-auto Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 70, width: 70 }} >
						 	<div className="Tilt-inner"><img src="flashtokenlogo.jpg" alt=""/></div>
						</Tilt>
            </div>
      <Nav vertical className="list-unstyled pb-3">
      <p>HELLO! {username}</p>
        <NavItem>
          <NavLink tag={Link} to={"/profile"}>
            <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
            Dashboard
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/profile/sell"}>
            <FontAwesomeIcon icon={faImage} className="mr-2" />
            Sell
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/affiliate"}>
            <FontAwesomeIcon icon={faImage} className="mr-2" />
            Affiliate
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/settings"}>
            <FontAwesomeIcon icon={faQuestion} className="mr-2" />
            Profile
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/contact"}>
            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
            Contact
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </div>
);
}
const submenus = [
  [
    {
      title: "Home 1",
      target: "Home-1",
    },
    {
      title: "Home 2",
      target: "Home-2",
    },
    {
      itle: "Home 3",
      target: "Home-3",
    },
  ],
  [
    {
      title: "Page 1",
      target: "Page-1",
    },
    {
      title: "Page 2",
      target: "Page-2",
    },
  ],
];

export default SideBar;
