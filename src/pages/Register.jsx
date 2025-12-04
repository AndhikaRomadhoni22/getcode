import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa6"; 
import Swal from "sweetalert2";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

     // cek password & confirm
    if (formData.password !== formData.confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password dan konfirmasi password tidak sama!",
      });
      return;
    }
    
    // ambil data users lama dari localStorage (kalau ada)
  const savedUsers = JSON.parse(localStorage.getItem("users")) || [];

    // simpan user baru
    const newUser = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
    };
    savedUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(savedUsers));

    Swal.fire({
      icon: "success",
      title: "Registrasi berhasil!",
      text: "Silakan login untuk melanjutkan.",
      confirmButtonText: "OK",
    }).then(() => {
      navigate("/login");
    });
  };

  return (
    <Container
      fluid
      className="background-bg d-flex justify-content-center align-items-center vh-100 bg-light"
    >
      <Row className="w-100 justify-content-center">
        <Col xs={11} sm={8} md={6} lg={4}>
          <Card className="shadow-lg p-4 rounded-4 border-0">
            <h3 className="text-center mt-3 mb-4 fw-medium">Register</h3>
            <Form onSubmit={handleSubmit}>
              {/* Username */}
              <Form.Group className="mb-3">
                <Form.Label>
                  <FaUser className="me-2" />
                  Username
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukkan username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              {/* Email */}
              <Form.Group className="mb-3">
                <Form.Label>
                  <FaEnvelope className="me-2" />
                  Email
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Masukkan email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              {/* Password */}
              <Form.Group className="mb-3">
                <Form.Label>
                  <FaLock className="me-2" />
                  Password
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Masukkan password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              {/* Confirm Password */}
              <Form.Group className="mb-3">
                <Form.Label>
                  <FaLock className="me-2" />
                  Konfirmasi Password
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ulangi password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <div className="d-grid mb-3">
                <Button type="submit" variant="primary" className="btn btn-primary rounded-3" onClick={() => navigate("/login")}>
                  Register
                </Button>
              </div>

              <p className="text-center text-muted small">
                Sudah punya akun? <a href="/login">Masuk</a>
              </p>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
