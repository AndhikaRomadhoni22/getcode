import { Container, Row, Col, Card } from "react-bootstrap";
import { testimonial } from "../data";
import Faq from "../components/Faq";

export default function TestimonialPage() {
  return (
    <div className="testimonial-page">
      <section className="testimonial min-vh-100">
        <Container>
          {/* Header */}
          <Row className="text-center py-5">
            <Col lg={{ span: 8, offset: 2 }}>
              <h1 className="fw-bold mt-5">Semua Testimonial</h1>
              <p className="text-muted">
                Setiap perjalanan belajar punya kisahnya sendiri. Inilah
                pengalaman nyata dari mereka yang berhasil mengembangkan
                kemampuan dan mencapai tujuan lewat kursus GetCode.
              </p>
            </Col>
          </Row>

          {/* List Testimonial */}
          <Row className="g-4">
            {testimonial.map((data) => (
              <Col key={data.id} lg={4} md={6} sm={12}>
                <Card className="h-100 shadow-sm border-0 p-4">
                  {/* Deskripsi */}
                  <Card.Text className="text-muted fst-italic mb-4">
                    "{data.desc}"
                  </Card.Text>

                  {/* Profile */}
                  <div className="d-flex align-items-center">
                    <img
                      src={data.image}
                      alt={data.name}
                      className="rounded-circle me-3"
                      style={{
                        width: "55px",
                        height: "55px",
                        objectFit: "cover",
                      }}
                    />
                    <div>
                      <h6 className="mb-0 fw-bold">{data.name}</h6>
                      <small className="text-muted">{data.skill}</small>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <Faq />
    </div>
  );
}
