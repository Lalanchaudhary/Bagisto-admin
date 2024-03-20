import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../AllCss/Navbar.css'
import { IoIosSearch } from "react-icons/io";
import { BsMoonStars } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineBell } from "react-icons/ai";
function BasicExample(props) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
      <Navbar.Brand href="#home">
            <img
              src="https://demo.bagisto.com/bagisto-common/themes/admin/default/build/assets/logo-f02a1643.svg"
              height="36"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex align-items-center">
          <IoIosSearch className='icon-1' />
            <input type='text' className='input-box' placeholder='Mega Search'/>
          </Nav>
        </Navbar.Collapse>
        <div>
        <BsMoonStars className='nav-icons'/>
        <AiOutlineHome className='nav-icons' />
        <AiOutlineBell className='nav-icons' />
        </div>
      </Container>
    </Navbar>
  ); 
}

export default BasicExample;