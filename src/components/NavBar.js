import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BasicExample() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className='positio'>
      <Container>
        <Navbar.Brand className='fw-bold' href="#home">Sociale Markt</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" active>Home</Nav.Link>
            <Nav.Link href="Pembayaran" active>Cara Pembayaran</Nav.Link>
            <Nav.Link href="Tentangkami" active>Tentang Kami</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav className="me-auto">
              <Nav.Link href="Belisekarang">Beli Sekarang</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default BasicExample;