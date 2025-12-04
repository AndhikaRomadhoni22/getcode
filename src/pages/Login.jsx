import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";
import { FaUser, FaLock } from "react-icons/fa6";
import Swal from "sweetalert2";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = savedUsers.find(
      (user) =>
        user.username === formData.username &&
        user.password === formData.password
    );

    if (foundUser) {
      localStorage.setItem("loginData", JSON.stringify(foundUser));
      Swal.fire({
        icon: "success",
        title: "Login Berhasil!",
        text: `Selamat datang, ${foundUser.username}!`,
        timer: 2000,
        showConfirmButton: false,
        timerProgressBar: true,
      }).then(() => {
        navigate("/");
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Login Gagal!",
        text: "Username atau password salah!",
        confirmButtonColor: "#d33",
      });
    }
  };

  return (
    <Container
      fluid
      className="background-bg d-flex justify-content-center align-items-center vh-100 bg-light"
    >
      <Row className="w-100 justify-content-center">
        <Col xs={11} sm={8} md={6} lg={4}>
          <Card className="shadow p-4 rounded-4 border-0">
            <h3 className="text-center mt-3 mb-0 fw-medium">Selamat Datang</h3>
            <p className="text-center mb-4">Silakan masuk untuk melanjutkan</p>
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

              <div className="d-grid mb-3">
                <Button
                  type="submit"
                  variant="primary"
                  className="btn btn-primary rounded-3"
                >
                  Masuk
                </Button>
              </div>

              <p className="text-center text-muted small">
                Belum punya akun?{" "}
                <span
                  className="text-primary cursor-pointer"
                  onClick={() => navigate("/register")}
                >
                  Daftar
                </span>
              </p>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
