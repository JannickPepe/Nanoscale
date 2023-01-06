import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


import React from 'react';

function Header() {
  const [ darkMode, setDarkMode ] = React.useState(false)
   
  React.useEffect(() => {
    const body = document.body
    const toggle = document.querySelector('.toggle-inner')
    
    // If dark mode is enabled - adds classes to update dark-mode styling.
    // Else, removes and styling is as normal.
    if( darkMode === true ) {
      body.classList.add('dark-mode')
      toggle.classList.add('toggle-active')
    } else {
      body.classList.remove('dark-mode')
      toggle.classList.remove('toggle-active')
    }
  }, [darkMode])
  
  return (
    <header>
      <div
        id="toggle"
        onClick={() => darkMode === false ? setDarkMode(true) : setDarkMode(false)}
      >
        <div className="toggle-inner"/>
      </div>
    </header>
  )
}


function NavScrollExample() {
  return (
    <main>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/"><img src={require('./logo.png')} alt="logo" width='60%'></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 text-uppercase"
            style={{ maxHeight: '100px'}}
            navbarScroll
          >
            <Nav.Link href="#scrollspyHeading1">Fordele</Nav.Link>
            <Nav.Link href="#scrollspyHeading2">VR</Nav.Link>
            <NavDropdown title="Funktioner" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#scrollspyHeading3">Overblik</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/funktioner">
              Byg molekyler og interager
              </NavDropdown.Item>
              <NavDropdown.Item href="/funktioner">
              Fysiske og kemiske egenskaber
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#scrollspyHeading4">Galleri</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
        <Header />
      </Container>
    </Navbar>
    </main>
  );
}

export default NavScrollExample;