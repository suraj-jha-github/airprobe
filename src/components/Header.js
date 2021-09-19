import React, { useEffect } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const Header = ({dataHeader, setDataHeader}) => {
  const history = useHistory();

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("userData"));
    setDataHeader(user);
  }, [dataHeader]);

  const logoutHandler = () => {
    localStorage.removeItem("userData");
    let user = JSON.parse(localStorage.getItem("userData"));
    setDataHeader(user);
    history.push("/login");
  };
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <Link to="/">Suraj Jha</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {dataHeader ? (
              <Nav.Link>
                <Button variant="danger" onClick={logoutHandler}>
                  Log Out
                </Button>
              </Nav.Link>
            ) : (
              <>
                <Nav.Link>
                  <Link to="/login">Login</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/signup">Register</Link>
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
