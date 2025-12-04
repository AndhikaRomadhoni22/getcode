import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import {
  BsBook,
  BsClipboardCheck,
  BsInfinity,
  BsPatchCheck,
} from "react-icons/bs";
import { semuaKursus } from "../data";
import CheckoutModal from "../components/CheckoutModal";

export default function CourseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const kursus = semuaKursus.find((k) => k.id === parseInt(id));

  if (!kursus) {
    return (
      <Container className="py-5 text-center">
        <h2>Kursus tidak ditemukan</h2>
        <Link to="/kursus" className="btn btn-primary mt-3">
          Kembali ke Semua Kursus
        </Link>
      </Container>
    );
  }
  const handleDaftar = () => {
     const loginData = localStorage.getItem("loginData");

  if (!loginData) {
    navigate("/login");
  } else {
    setShowModal(true);
    }
  };

  return (
    <section className="detail-kursus py-5">
      <Container>
        <Row className="g-5">
          {/* Bagian kiri: Gambar + Deskripsi */}
          <Col lg={8}>
            <img
              src={kursus.image}
              alt={kursus.nama}
              className="img-fluid rounded shadow mb-4"
            />
            <h1 className="fw-bold mb-3">{kursus.nama}</h1>

            <div className="d-flex align-items-center mb-3">
              <div className="text-warning me-2">
                <i className={kursus.star1}></i>
                <i className={kursus.star2}></i>
                <i className={kursus.star3}></i>
                <i className={kursus.star4}></i>
                <i className={kursus.star5}></i>
              </div>
              <span className="text-muted">4.8 (120+ ulasan)</span>
            </div>

            <p className="lead text-muted">{kursus.title}</p>

            {/* Tentang Kursus */}
            <Card className="mt-4 shadow-sm border-0">
              <Card.Body>
                <h4 className="mb-3">Tentang Kursus</h4>
                <p className="text-muted">{kursus.deskripsi}</p>
              </Card.Body>
            </Card>
          </Col>

          {/* Bagian kanan: Sidebar Info Kursus */}
          <Col lg={4}>
            <Card
              className="shadow-sm border-0 sticky-top"
              style={{ top: "90px" }}
            >
              <Card.Body>
                {/* Harga Kursus */}
                <div className="bg-primary text-white text-center p-3 rounded mb-3">
                  <h6 className="mb-1">Harga Kursus</h6>
                  <h3 className="fw-bold">{kursus.harga}</h3>
                </div>
                <Button
                  variant="primary"
                  size="lg"
                  className="w-100 mb-3"
                  onClick={handleDaftar}
                >
                  Daftar Kursus
                </Button>
                <Link
                  to="/kursus"
                  className="btn btn-outline-secondary w-100 mb-4"
                >
                  Kembali
                </Link>

                {/* Info Kursus */}
                <h6 className="fw-bold mb-3">Kursus ini mencakup:</h6>
                <ul className="list-unstyled small mb-4">
                  <li className="d-flex align-items-center mb-2">
                    <BsBook className="text-primary me-2" /> 6 Modul
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <BsClipboardCheck className="text-success me-2" /> Quizzes
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <BsInfinity className="text-warning me-2" /> Akses penuh
                    seumur hidup
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <BsPatchCheck className="text-danger me-2" /> Sertifikat
                    penyelesaian
                  </li>
                </ul>

                {/* Metode Pembayaran */}
                <h6 className="fw-bold mb-2">Metode Pembayaran:</h6>
                <div className="d-flex flex-wrap gap-2">
                  <img src="/assets/payment/bni.png" alt="BNI" height="25" />
                  <img src="/assets/payment/bri.png" alt="BRI" height="25" />
                  <img src="/assets/payment/bca.png" alt="BCA" height="25" />
                  <img src="/assets/payment/dana.png" alt="DANA" height="25" />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <CheckoutModal
        show={showModal}
        onHide={() => setShowModal(false)}
        kursus={kursus}
      />
    </section>
  );
}
