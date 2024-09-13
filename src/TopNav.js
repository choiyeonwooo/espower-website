import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './img/logo.webp'
import Offcanvas from 'react-bootstrap/Offcanvas'
import './TopNav.css'
function TopNav() {
  return (
    <Navbar expand="lg" id="topnav-wrapper">
      <Container classname="topnav-container">
        <Navbar.Brand href="/">
          <img src={logo} className="topnav-logo" alt="logo" style={{width:200}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-xxl" />
        <Navbar.Offcanvas 
          id="offcanvasNavbar-expand-xxl"
          aria-labelledby="offcanvasNavbar-expand-xxl"
          placement="end"
          className = "topnav-offcanvas"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbar-expand-xxl">
              <img src={logo} alt="logo" style={{width:100}}/>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="topnav-menu-container">
              <Nav.Link href="/">회사소개</Nav.Link>
              <Nav.Link onClick={()=>{
                const element = document.getElementById('home2-wrapper');
                element?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}>전기차 충전 플랫폼</Nav.Link>
              <Nav.Link onClick={()=>{
                const element = document.getElementById('home2-wrapper');
                element?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}>태양광판</Nav.Link>
              <Nav.Link onClick={()=>{
                const element = document.getElementById('home2-wrapper');
                element?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}>AMI</Nav.Link>
            </Nav>

          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default TopNav;