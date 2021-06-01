import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
export class Header extends Component {
  render() {
    return (
      <div className="navBar">
        <Nav defaultActiveKey="/" as="ul">
          <Nav.Item as="li">
            <Nav.Link className="link" href="/" eventKey="link-1">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link className="link" href="/Fav" eventKey="link-1">Favorite</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    )
  }
}

export default Header
