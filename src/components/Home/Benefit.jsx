import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaLaptopCode, FaChalkboardTeacher } from "react-icons/fa";
import { PiCertificate } from "react-icons/pi";
import { SlBookOpen } from "react-icons/sl";

export default function Benefit() {
    return (
    <section className="py-5 bg-light">
        <Container>
            <h2 className="text-center fw-bold mb-4">Kenapa Memilih GetCode?</h2>
            <Row className="g-4">
                {/* Card 1 */}
                <Col lg={3} md={6} sm={12}>
                <motion.div
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="h-100"
                >
                    <Card className="h-100 text-center p-3 shadow-sm rounded-4">
                        <Card.Body>
                            <motion.div className="mb-3 fs-1 text-primary" whileHover={{ scaleX: -1 }}
                                transition={{ duration: 0.5 }}>
                                <FaLaptopCode />
                            </motion.div>
                            <Card.Title>Belajar Fleksibel</Card.Title>
                            <Card.Text>
                                Akses materi kapan saja & di mana saja, sesuai ritme belajarmu.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </motion.div>
                </Col>

                {/* Card 2 */}
                <Col lg={3} md={6} sm={12}>
                <motion.div
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="h-100"
                >
                    <Card className="h-100 text-center p-3 shadow-sm rounded-4">
                        <Card.Body>
                            <motion.div className="mb-3 fs-1 text-primary" whileHover={{ scaleX: -1 }}
                                transition={{ duration: 0.5 }}>
                                <FaChalkboardTeacher />
                            </motion.div>
                            <Card.Title>Mentor ahli</Card.Title>
                            <Card.Text>
                                Dapatkan bimbingan dari praktisi yang berpengalaman
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </motion.div>
                </Col>

                {/* Card 3 */}
                <Col lg={3} md={6} sm={12}>
                <motion.div
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="h-100"
                >
                    <Card className="h-100 text-center p-3 shadow-sm rounded-4" >
                        <Card.Body>
                            <motion.div className="mb-3 fs-1 text-primary" whileHover={{ scaleX: -1 }}
                                transition={{ duration: 0.5 }}>
                                <SlBookOpen />
                            </motion.div>
                            <Card.Title>Pembelajaran Praktis</Card.Title>
                            <Card.Text>
                                Kuasai skill melalui latihan langsung & proyek dunia nyata.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </motion.div>
                </Col>

                {/* Card 4 */}
                <Col lg={3} md={6} sm={12}>
                <motion.div
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="h-100"
                >
                    <Card className="h-100 text-center p-3 shadow-sm rounded-4">
                        <Card.Body>
                            <motion.div className="mb-3 fs-1 text-primary" whileHover={{ scaleX: -1 }}
                                transition={{ duration: 0.5 }}>
                                <PiCertificate />
                            </motion.div>
                            <Card.Title>Program Sertifikat</Card.Title>
                            <Card.Text>
                                Dapatkan sertifikat resmi untuk mendukung karier Anda.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </motion.div>
                </Col>
            </Row>
        </Container>
    </section>
);
}
