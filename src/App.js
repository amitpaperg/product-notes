import React, { Component } from 'react';
import { Grid, Navbar, Nav, NavItem, Jumbotron, Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">Product Notes</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} href="/">Notes</NavItem>
                <NavItem eventKey={2} href="/features">Features</NavItem>
                <NavItem eventKey={3} href="/reports">Reports</NavItem>
              </Nav>
              <Nav pullRight>
                <NavItem eventKey={1} href="/profile">Profile</NavItem>
              </Nav>
            </Navbar.Collapse>

          </Grid>
        </Navbar>
        <Jumbotron>
          <Grid>
            <h1>Welcome to Product Notes</h1>
            <p>
              <a
                href="http://react-bootstrap.github.io/components.html"
                target="_blank">
                View React Bootstrap Docs
              </a>
            </p>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export default App;

