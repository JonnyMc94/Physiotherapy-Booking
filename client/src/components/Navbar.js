import Link from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button, Container} from 'react-bootstrap'
const NavBar = () => {
  
  return (
    <Navbar collapseOnSelect fixed="top" exppand="sm" bg="dark" variant="dark" className="nav">
      <Container >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" />
          <Navbar.Brand href="HomePage">Leinster Physio Services</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/ClientRender">Clients</Nav.Link>
              <Nav.Link href="/PhysioRender">Physiotherapists</Nav.Link>
              <Nav.Link href="/SessionRender">Sessions</Nav.Link>
            </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBar;