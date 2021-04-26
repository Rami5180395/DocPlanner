import logo from './logo.svg';
import './App.css';
import '../node_modules/react-bootstrap'
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'
import FormControl from 'react-bootstrap/FormControl'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Card.Link from 'react-bootstrap/Card.Link'
import Navbar.Brand from 'react-bootstrap/Navbar.Brand'
import Navbar.Toggle from 'react-bootstrap/Navbar.Toggle'
import Navbar.Collapse from 'react-bootstrap/Navbar.Collapse'
import Nav.Link from 'react-bootstrap/Nav.Link'
import Card.Body from 'react-bootstrap/Card.Body'
import Card.Text from 'react-bootstrap/Card.Text'
import Card.Subtitle from 'react-bootstrap/Card.Card'
import Card.Title from 'react-bootstrap/Card.Card'
import Card from 'react-bootstrap/Card.Card'


function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home"><img class="logo-docplanner" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="Docplanner Group"></img></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">About us</Nav.Link>
      <Nav.Link href="#link">Career</Nav.Link>
      <NavDropdown title="Departement" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">About us</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Career</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Departement</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>

<img class="lead__logo" src="https://www.docplanner.com/img/sygnet.png" srcset="https://www.docplanner.com/img/sygnet.png 1x, https://www.docplanner.com/img/sygnet@2x.png 2x"></img>
    
<h1>Making the healthcare experience more human</h1>
<div class="grid">
  <p class="col-6">
    We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere. 
  </p>
  <p class="col-6">
    We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients. 
  </p>
</div> 
<div>
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
</div>
    
    </div>
  );
}

export default App;
