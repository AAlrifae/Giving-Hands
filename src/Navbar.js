import React from "react";
import {Navbar, NavbarBrand, Container,} from "reactstrap";
import "./App.css";



class NavbarMain extends React.Component {

  render() {
    return (
      <div>
      
        <Navbar
          color="faded"
          dark
          expand="md"
          fixed={`top`}
          className="navDark"
        >
         
          <Container>
            <NavbarBrand href="/"> Giving Hands </NavbarBrand>
          </Container>
          <Container className="links">
            <NavbarBrand href="/"> Home </NavbarBrand>
            <NavbarBrand href="/newpost"> New Event </NavbarBrand>
            <NavbarBrand href="/signup"> Sign Up </NavbarBrand>
            <NavbarBrand href="/signin"> Sign In </NavbarBrand>
          </Container>
        </Navbar>
      
      </div>
    );
  }
}

export default NavbarMain;
