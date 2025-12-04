<<<<<<< HEAD
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { faq } from "../data/index";

export default function Faq() {
  return (
    <section className="py-5 bg-light">
      <Container>
        <Row>
          <Col>
            <h2 className="text-center fw-bold">Temukan Pertanyaanmu</h2>
          </Col>
        </Row>
        <Row className="pt-5">
          <Col lg={10} className="mx-auto">
          <Accordion defaultActiveKey="0" alwaysOpen={false} className="shadow-sm">
          {faq.map((data, index) => {
            return (
                  <Accordion.Item key={data.id} eventKey={index.toString()} className="mb-1">
                    <Accordion.Header>{data.title}</Accordion.Header>
                    <Accordion.Body className="bg-light">{data.desc}</Accordion.Body>
                  </Accordion.Item>
            );
          })}
          </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
=======
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { faq } from "../data/index";

export default function Faq() {
  return (
    <section className="py-5 bg-light">
      <Container>
        <Row>
          <Col>
            <h2 className="text-center fw-bold">Temukan Pertanyaanmu</h2>
          </Col>
        </Row>
        <Row className="pt-5">
          <Col lg={10} className="mx-auto">
          <Accordion defaultActiveKey="0" alwaysOpen={false} className="shadow-sm">
          {faq.map((data, index) => {
            return (
                  <Accordion.Item key={data.id} eventKey={index.toString()} className="mb-1">
                    <Accordion.Header>{data.title}</Accordion.Header>
                    <Accordion.Body className="bg-light">{data.desc}</Accordion.Body>
                  </Accordion.Item>
            );
          })}
          </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
>>>>>>> 9fb999e2136c79d4a32e8371acd58c8f091bada0
