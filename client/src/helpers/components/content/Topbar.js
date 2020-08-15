import React, { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import {
  Navbar,
  Button,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink, Card, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from "reactstrap";
import { Link } from "react-router-dom";
import { createHashHistory } from "history";

const Topbar = ({ toggleSidebar }) => {
  const [topbarIsOpen, setTopbarOpen] = useState(true);
  const toggleTopbar = () => setTopbarOpen(!topbarIsOpen);

     const history = createHashHistory();

  const handleClick = (event) => {
    event.preventDefault();
    delete localStorage.jwt
    history.go("/");
  }

  const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  const [referrals, setReferrals] = useState('');

useEffect( ()=>{
  let jwt = window.localStorage.getItem("jwt");
    let result = jwtDecode(jwt);
    setUsername(result.username)
    // this.setState({username:result.username})
    console.log(`The result is`, result);
    console.log(`the current dashboard state is`, window.localStorage);

    //  getRefs
   
       fetch(`http://localhost:3006/api/v1/getrefs/${result.id}`)
      .then(response => response.json())
      .then(res => {
         setReferrals(res.data.rows[0].count)
          // this.setState({referrals: });
          console.log(res.data.rows[0].count);
      
      })
      

      .catch(res => {
        console.log(res)
    
    })
}, [username, referrals])

  return (
    <div>
    <Navbar
      color="light"
      light
      className="navbar shadow-sm p-3 mb-5 bg-white rounded"
      expand="md"
    >
      <Button color="info" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faAlignLeft} />
      </Button>
      <NavbarToggler onClick={toggleTopbar} />
      <Collapse isOpen={topbarIsOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to={"/home"}>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={"/buy"}>
              Buy Bitcoin
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={"/affiliate"}>
              Affiliate
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={"/signout"} onClick={handleClick}>
              Sign Out
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
    {/* <CardDeck>
      <Card>
        <CardBody>
          <CardTitle>#3,000</CardTitle>
          <CardSubtitle>Balance</CardSubtitle>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle>{referrals ? referrals : 'loading'}</CardTitle>
          <CardSubtitle>No of Referrals</CardSubtitle>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle>10</CardTitle>
          <CardSubtitle>No of trades</CardSubtitle>
          </CardBody>
      </Card>
    </CardDeck> */}
    {/* <h1>HELLO! {username}</h1>
    <h1>No of Referrals: {referrals ? referrals : 'loading'}</h1>
    <button className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
    onClick={this.handleClick}>Sign out</button> */}
    </div>
  );
};

export default Topbar;
