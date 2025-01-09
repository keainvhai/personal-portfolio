import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/fei-xue-ff">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://github.com/keainvhai">
                <img src={navIcon2} alt="Icon" />
              </a>
            </div>
            <p>CopyRight 2025</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
