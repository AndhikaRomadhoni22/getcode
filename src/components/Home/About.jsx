import { Container, Row, Col } from "react-bootstrap";

export default function About() {
  return (
    <section className="pb-5 bg-white">
      <Container>
        <Row className="align-items-center align-items-center flex-column flex-lg-row">
          {/* Gambar */}
          <Col md={5} className="text-center order-1">
            {/* logo Tablet & Dekstop */}
            <img
              src="/assets/logo/Logo.png"
              alt="logo"
              width="350"
              height="350"
              className="d-none d-md-inline-block"
            />
            
            {/* logo mobile */}
            <img
              src="/assets/logo/logo-warna.png"
              alt="logo"
              width="400"
              height="auto"
              className="d-inline-block d-md-none"
              style={{ marginTop: "-50px", marginBottom: "-25px" }}
            />
          </Col>

          {/* Teks */}
          <Col lg={7} md={11} className="pe-md-5 order-2 text-center text-md-start">
            <h6 className="text-uppercase text-primary fw-bold mb-4 mb-lg-2">
              Tentang Kami
            </h6>
            <h2 className="fw-bold mb-2">Apa Itu GetCode?</h2>
            <p className="text-muted">
              GetCode adalah platform pembelajaran coding online yang dirancang
              untuk membantu pelajar dan profesional dalam mengembangkan
              keterampilan digital. Dengan berbagai pilihan kursus yang
              diajarkan oleh mentor ahli, GetCode memberikan pengalaman belajar
              interaktif, fleksibel, dan mudah diakses kapan saja serta di mana
              saja. Selain itu, GetCode juga menyediakan program sertifikasi dan event
              eksklusif yang memungkinkan peserta untuk mendapatkan ilmu
              terbaru, berdiskusi dengan praktisi berpengalaman, serta
              memperoleh sertifikat sebagai bukti kompetensi yang dapat
              mendukung perkembangan karier mereka.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
