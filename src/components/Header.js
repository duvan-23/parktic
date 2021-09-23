import Nav from 'react-bootstrap/Nav';
const Header = ()=>{
    return(
        <header>
          <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item>
              <Nav.Link  href="/Home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link  href="otro.html">otro</Nav.Link>
            </Nav.Item>
          </Nav>
      </header>
    );
}
export default Header;