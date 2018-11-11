import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import '../../App.css';

class Header extends Component {
  render() {

    return (
      <div className='headerContainer'>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a className='navLink' href="/">Home</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>

              <NavItem eventKey={1} href="/cast">
              <a className='navLink'>Cast</a>
              </NavItem>
              <NavItem eventKey={2} href="/characters">
              <a className='navLink'>Characters</a>
              </NavItem>
              <NavItem eventKey={3} href="#">
              <a className='navLink'>Support</a>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>


    );

  }

}
export default Header;
