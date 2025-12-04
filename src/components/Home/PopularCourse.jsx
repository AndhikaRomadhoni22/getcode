<<<<<<< HEAD
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { kursusPopuler } from "../../data/index"

export default function PopularCourse() {
    const navigate = useNavigate()

return (
    <section className="py-5 bg-light">
        <Container>
            {/* Judul Section */}
            <div className="text-center mb-5">
                <h6 className="text-uppercase text-primary fw-bold mb-2">
                    Kursus Terpopuler
                </h6>
                <h2 className="fw-bold">Jelajahi kursus Teratas</h2>
                <p className="text-muted">kursus terbaik kami</p>
            </div>

            {/* List Kursus */}
            <Row>
            {kursusPopuler.map((kursus) => (
                <Col key={kursus.id} lg={3} md={6} sm={12} className="mb-4">
                    <Link
                        to={`/kursus/${kursus.id}`}
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                    <Card className="h-100 border-0 card-shadow">
                        {/* Thumbnail */}
                        <Card.Img 
                            variant="top"
                            src={kursus.image}
                            alt={kursus.title}
                            style={{ height: "180px", objectFit: "cover" }}
                        />

                        <Card.Body>
                            {/* Nama & Rating */}
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <p className="text-muted mb-0">{kursus.nama}</p>
                                <div className="text-warning">
                                    <i className={kursus.star1}></i>
                                    <i className={kursus.star2}></i>
                                    <i className={kursus.star3}></i>
                                    <i className={kursus.star4}></i>
                                    <i className={kursus.star5}></i>
                                </div>    
                            </div>

                            {/* Judul */}
                            <Card.Title 
                                className="fw-semibold text-truncate" 
                                style={{ maxWidth: "100%" }}
                            >
                                {kursus.title}
                            </Card.Title>

                            {/* pembuat */}
                            <p className="text-muted">By GetCode</p>
                            <hr />

                            {/* Harga */}
                            <h4 className="text-primary text-end fw-semibold">
                                {kursus.harga}
                            </h4>
                        </Card.Body>
                    </Card>
                    </Link>
                </Col>
            ))}
            </Row>

            {/* Tombol lihat semua Kursus */}
            <div className="text-center mt-4">
                <Button 
                    variant="primary" 
                    size="lg" 
                    className="px-4 rounded-pill" 
                    onClick={() => navigate("/kursus")}
                >
                    Lihat Semua Kursus 
                    <i className="fa-solid fa-chevron-right ms-1"></i>
                </Button>
            </div>
        </Container>
    </section>
    )
=======
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { kursusPopuler } from "../../data/index"

export default function PopularCourse() {
    const navigate = useNavigate()

return (
    <section className="py-5 bg-light">
        <Container>
            {/* Judul Section */}
            <div className="text-center mb-5">
                <h6 className="text-uppercase text-primary fw-bold mb-2">
                    Kursus Terpopuler
                </h6>
                <h2 className="fw-bold">Jelajahi kursus Teratas</h2>
                <p className="text-muted">kursus terbaik kami</p>
            </div>

            {/* List Kursus */}
            <Row>
            {kursusPopuler.map((kursus) => (
                <Col key={kursus.id} lg={3} md={6} sm={12} className="mb-4">
                    <Link
                        to={`/kursus/${kursus.id}`}
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                    <Card className="h-100 border-0 card-shadow">
                        {/* Thumbnail */}
                        <Card.Img 
                            variant="top"
                            src={kursus.image}
                            alt={kursus.title}
                            style={{ height: "180px", objectFit: "cover" }}
                        />

                        <Card.Body>
                            {/* Nama & Rating */}
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <p className="text-muted mb-0">{kursus.nama}</p>
                                <div className="text-warning">
                                    <i className={kursus.star1}></i>
                                    <i className={kursus.star2}></i>
                                    <i className={kursus.star3}></i>
                                    <i className={kursus.star4}></i>
                                    <i className={kursus.star5}></i>
                                </div>    
                            </div>

                            {/* Judul */}
                            <Card.Title 
                                className="fw-semibold text-truncate" 
                                style={{ maxWidth: "100%" }}
                            >
                                {kursus.title}
                            </Card.Title>

                            {/* pembuat */}
                            <p className="text-muted">By GetCode</p>
                            <hr />

                            {/* Harga */}
                            <h4 className="text-primary text-end fw-semibold">
                                {kursus.harga}
                            </h4>
                        </Card.Body>
                    </Card>
                    </Link>
                </Col>
            ))}
            </Row>

            {/* Tombol lihat semua Kursus */}
            <div className="text-center mt-4">
                <Button 
                    variant="primary" 
                    size="lg" 
                    className="px-4 rounded-pill" 
                    onClick={() => navigate("/kursus")}
                >
                    Lihat Semua Kursus 
                    <i className="fa-solid fa-chevron-right ms-1"></i>
                </Button>
            </div>
        </Container>
    </section>
    )
>>>>>>> 9fb999e2136c79d4a32e8371acd58c8f091bada0
}