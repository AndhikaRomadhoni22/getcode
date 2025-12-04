<<<<<<< HEAD
import { Container, Row, Col } from "react-bootstrap";
import { BsFacebook, BsTwitter, BsEnvelope, BsWhatsapp, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../dist/css/FooterComponent.css";

export default function FooterComponent() {
  return (
    <footer className="text-white pt-5 pb-0" style={{ backgroundColor: "#0c0032" }}>
      <Container>
        <Row>
          {/* Kiri: Logo & Deskripsi */}
          <Col md={5} className="mb-4">
            <div className="d-flex align-items-center">
              <img
                src="/assets/logo/logo-putih.png"
                alt="GetCode Logo"
                className="d-none d-lg-inline"
                style={{ height: "85px", width: "auto", marginLeft: "-20px", marginTop: "-15px" }}
              />
              <span className="highlight-font fs-3 fw-semibold mb-0">GetCode</span>
            </div>
            <p className="text-muted mb-4" style={{ maxWidth: "300px" }}>
              GetCode adalah Platform Pembelajaran yang digunakan untuk upgrade
              ilmu dan wawasan secara langsung.
            </p>
            <div className="d-flex align-items-center mb-2">
                <BsWhatsapp className="me-2 fs-5" />
                <span>+62 896-9643-5975</span>
            </div>

            <div className="d-flex align-items-center">
              <BsEnvelope className="me-2 fs-5" />
              <span>getcode@gmail.com</span>
            </div>
          </Col>

          <Col md={3} className="mb-4">
            <h6 className="fw-bold mb-2">Menu</h6>
            <ul className="list-unstyled footer-menu">
              <li><Link to="/">Beranda</Link></li>
              <li><Link to="/kursus">Kursus</Link></li>
              <li><Link to="/testimoni">Testimoni</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/syaratketen">Syarat & Ketentuan</Link></li>
            </ul>
          </Col>

          <Col md={4} className="mb-4">
            <h6 className="fw-bold mb-2">Sosial Media</h6>
            <p className="text-muted">Kunjungi Sosial Media Kami</p>
            <div className="d-flex gap-3 fs-4">
              <a href="#" className="text-white"><BsFacebook /></a>
              <a href="#" className="text-white"><BsInstagram /></a>
              <a href="#" className="text-white"><BsTwitter /></a>
              <a href="#" className="text-white"><BsWhatsapp /></a>
            </div>
          </Col>
        </Row>
      </Container>

            <div className="text-center py-4" style={{ backgroundColor: "#150050", margin: 0 }}>
              <small>&copy; 2025 GetCode. All rights reserved.</small>
            </div>
    </footer>
  );
}
=======
import { Container, Row, Col } from "react-bootstrap";
import { BsFacebook, BsTwitter, BsEnvelope, BsWhatsapp, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../dist/css/FooterComponent.css";

export default function FooterComponent() {
  return (
    <footer className="text-white pt-5 pb-0" style={{ backgroundColor: "#0c0032" }}>
      <Container>
        <Row>
          {/* Kiri: Logo & Deskripsi */}
          <Col md={5} className="mb-4">
            <div className="d-flex align-items-center">
              <img
                src="/assets/logo/logo-putih.png"
                alt="GetCode Logo"
                className="d-none d-lg-inline"
                style={{ height: "85px", width: "auto", marginLeft: "-20px", marginTop: "-15px" }}
              />
              <span className="highlight-font fs-3 fw-semibold mb-0">GetCode</span>
            </div>
            <p className="text-muted mb-4" style={{ maxWidth: "300px" }}>
              GetCode adalah Platform Pembelajaran yang digunakan untuk upgrade
              ilmu dan wawasan secara langsung.
            </p>
            <div className="d-flex align-items-center mb-2">
                <BsWhatsapp className="me-2 fs-5" />
                <span>+62 896-9643-5975</span>
            </div>

            <div className="d-flex align-items-center">
              <BsEnvelope className="me-2 fs-5" />
              <span>getcode@gmail.com</span>
            </div>
          </Col>

          <Col md={3} className="mb-4">
            <h6 className="fw-bold mb-2">Menu</h6>
            <ul className="list-unstyled footer-menu">
              <li><Link to="/">Beranda</Link></li>
              <li><Link to="/kursus">Kursus</Link></li>
              <li><Link to="/testimoni">Testimoni</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/syaratketen">Syarat & Ketentuan</Link></li>
            </ul>
          </Col>

          <Col md={4} className="mb-4">
            <h6 className="fw-bold mb-2">Sosial Media</h6>
            <p className="text-muted">Kunjungi Sosial Media Kami</p>
            <div className="d-flex gap-3 fs-4">
              <a href="#" className="text-white"><BsFacebook /></a>
              <a href="#" className="text-white"><BsInstagram /></a>
              <a href="#" className="text-white"><BsTwitter /></a>
              <a href="#" className="text-white"><BsWhatsapp /></a>
            </div>
          </Col>
        </Row>
      </Container>

            <div className="text-center py-4" style={{ backgroundColor: "#150050", margin: 0 }}>
              <small>&copy; 2025 GetCode. All rights reserved.</small>
            </div>
    </footer>
  );
}
>>>>>>> 9fb999e2136c79d4a32e8371acd58c8f091bada0
