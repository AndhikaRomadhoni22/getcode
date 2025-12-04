import { Container, Row, Col, Button } from "react-bootstrap";
import { FaUserGraduate, FaBookOpen, FaUsers  } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
const navigate = useNavigate()

return (
    <header className="hero-section w-100 min-vh-100 d-flex align-items-center pt-5 pt-lg-0">
        <Container>
            <Row className="align-items-center mt-5">
                {/* Text Section */}
                <Col lg={6} className="text-start order-2 order-lg-1">
                    <div className="text-center text-lg-start">
                        {/* Judul */}
                        <motion.h1
                            className="mb-4 fw-medium display-6"
                            initial={{ opacity: 0, y: 40, scale: 1 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            Bangun Karier Digitalmu <br />
                            Mulai dari <span className="text-primary">GetCode</span>
                        </motion.h1>

                        {/* Deskripsi */}
                        <motion.p
                            className="text-secondary mb-4 fs-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            Belajar coding kini lebih mudah, terarah, dan menyenangkan. Di{" "}
                            <span className="fw-semibold">GetCode</span>, kamu akan dibimbing
                            dengan materi praktis, mentor berpengalaman, dan proyek nyata
                            untuk membangun portofolio.
                        </motion.p>

                        {/* Tombol */}
                        <motion.div className="d-flex flex-column flex-md-row gap-2 justify-content-center justify-content-lg-start" 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.8 }}
                        >
                            <Button variant="primary" onClick={()=> navigate("/login")}>Daftar Sekarang</Button>
                            <Button variant="outline-primary" onClick={()=> navigate("/kursus")}>Lihat Semua Kursus</Button>
                        </motion.div>
                    </div>
                    
                    {/* Stastik Singkat */}
                    <Row>
                        <Col xs={4} className="mb-3 pt-4">
                            <motion.div 
                                className="d-flex align-items-start" 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.2 }}
                            >
                                <FaUserGraduate size={30} className="text-primary me-2" />
                                <div>
                                    <h5 className="fw-bold text-primary mb-1">300+</h5>
                                    <p className="mb-0 small">Siswa Aktif</p>
                                </div>
                            </motion.div>
                        </Col>

                        <Col xs={4} className="mb-3 pt-4">
                            <motion.div 
                                className="d-flex align-items-start" 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.4 }}
                            >
                                <FaBookOpen size={30} className="text-primary me-2" />
                                <div>
                                    <h5 className="fw-bold text-primary mb-1">20+</h5>
                                    <p className="mb-0 small">kursus Interaktif</p>
                                </div>
                            </motion.div>
                        </Col>

                        <Col xs={4} className="mb-3 pt-4">
                            <motion.div 
                                className="d-flex align-items-start" 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.6 }}
                            >
                                <FaUsers size={30} className="text-primary me-2" />
                                <div>
                                    <h5 className="fw-bold text-primary mb-1">500+</h5>
                                    <p className="mb-0 small">Alumni Sukses</p>
                                </div>
                            </motion.div>
                        </Col>
                    </Row>
                </Col>

                {/* Gambar */}
                <Col lg={6} className="order-1 order-lg-2 mb-4 mb-lg-0">
                    <motion.img
                        src="/assets/Foto.png"
                        alt="foto"
                        className="img-fluid d-block mx-auto hero-img"
                        style={{ height: "auto", maxHeight: "600px",  }}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1 }} 
                    />
                </Col>
            </Row>
        </Container>
    </header>
    );
}
