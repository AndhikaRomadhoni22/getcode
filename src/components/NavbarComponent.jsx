import { useState, useEffect } from "react";
import { Container, Nav, Navbar, Button, Form } from "react-bootstrap";
import { FaBars, FaTimes, FaSearch, FaUserCircle } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { navLinks, semuaKursus } from "../data/index";
import "../dist/css/NavbarComponent.css";

export default function NavbarComponent() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // cek loginData di localStorage
  useEffect(() => {
    const loginData = JSON.parse(localStorage.getItem("loginData"));
    if (loginData) {
      setUser(loginData);
    }
  }, []);

  // state untuk search
  const [query, setQuery] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);

  const handleScroll = () => {
    setScrolled(window.scrollY > 10);
  };

  const handleLogout = () => {
    localStorage.removeItem("loginData");
    setUser(null);
    navigate("/login");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // update hasil pencarian
  const handleSearchChange = (e) => {
    const keyword = e.target.value;
    setQuery(keyword);

    if (keyword.trim() === "") {
      setFilteredCourses([]);
    } else {
      const results = semuaKursus.filter((kelas) =>
        kelas.nama.toLowerCase().includes(keyword.toLowerCase())
      );
      setFilteredCourses(results);
    }
  };

  // submit search (tekan Enter)
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (filteredCourses.length > 0) {
      navigate(`/kursus/${filteredCourses[0].id}`);
      setQuery("");
      setFilteredCourses([]);
      setShowSearch(false);
    }
  };

  return (
    <Navbar
      expand="lg"
      className={`navbar-custom ${scrolled ? "scrolled" : ""}`}
      fixed="top"
      expanded={isOpen}
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img
            src="/assets/logo/Logo.png"
            alt="GetCode Logo"
            width="40"
            height="40"
          />
          <span
            className="fs-4 fw-semibold d-none d-lg-inline ms-2"
            style={{ color: "#4169E1" }}
          >
            GetCode
          </span>
        </Navbar.Brand>

        {/* Tombol di MOBILE */}
        <div className="d-lg-none d-flex align-items-center ms-auto me-3">
          {/* Tombol Search */}
          <div className="me-3">
            <Button
              variant="light"
              onClick={() => {
                setShowSearch(true);
                setIsOpen(false);
              }}
            >
              <FaSearch className="text-primary" />
            </Button>
          </div>

          {/* Icon + Username */}
          {user ? (
            <div className="d-flex align-items-center">
              <FaUserCircle size={24} className="text-primary me-2" />
              <span className="fw-medium">{user.username}</span>
            </div>
          ) : (
            <>
              <Button
                variant="outline-primary"
                className="me-2"
                onClick={() => navigate("/login")}
              >
                Masuk
              </Button>
              <Button
                className="btn btn-primary"
                onClick={() => navigate("/register")}
              >
                Daftar
              </Button>
            </>
          )}
        </div>

        {/* Search MOBILE */}
        {showSearch && (
          <div className="d-lg-none position-absolute top-100 start-0 w-100 bg-white p-2 shadow">
            <Form className="d-flex" onSubmit={handleSearchSubmit}>
              <Form.Control
                type="search"
                placeholder="Cari kelas..."
                value={query}
                onChange={handleSearchChange}
                autoFocus
              />
              <Button
                variant="primary"
                className="ms-2"
                onClick={() => setShowSearch(false)}
              >
                <FaTimes />
              </Button>
            </Form>

            {/* hasil pencarian */}
            {query && (
              <div className="mt-2 bg-light p-2 rounded shadow">
                {filteredCourses.length > 0 ? (
                  filteredCourses.map((kelas) => (
                    <div
                      key={kelas.id}
                      className="d-flex align-items-center mb-2 p-2 rounded"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        navigate(`/kursus/${kelas.id}`);
                        setQuery("");
                        setFilteredCourses([]);
                        setShowSearch(false);
                      }}
                    >
                      <img
                        src={kelas.image}
                        alt={kelas.nama}
                        width="40"
                        height="40"
                        className="me-2 rounded"
                      />
                        <span>{kelas.nama}</span>
                    </div>
                  ))
                ) : (
                  <p className="text-muted">Kelas tidak ditemukan</p>
                )}
              </div>
            )}
          </div>
        )}

        {/* Tombol Menu mobile */}
        {!showSearch && (
          <button
            className="navbar-toggle-custom d-lg-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        )}

        {/* Menu */}
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Kalau search aktif */}
          {showSearch ? (
            <div className="d-flex align-items-center w-100 justify-content-between position-relative">
              {/* Search Bar */}
              <Form
                className="flex-grow-1 d-flex mx-3"
                onSubmit={handleSearchSubmit}
              >
                <Form.Control
                  type="search"
                  placeholder="Cari kursus..."
                  value={query}
                  onChange={handleSearchChange}
                  autoFocus
                />
                <Button
                  variant="primary"
                  className="ms-2"
                  onClick={() => setShowSearch(false)}
                >
                  <FaTimes />
                </Button>
              </Form>

              {/* hasil pencarian (DESKTOP) */}
              {query && (
                <div className="position-absolute top-100 start-0 w-75 mt-2 ms-lg-3 bg-white border rounded shadow p-2">
                  {filteredCourses.length > 0 ? (
                    filteredCourses.map((kelas) => (
                      <div
                        key={kelas.id}
                        className="d-flex align-items-center mb-2 p-2 rounded"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          navigate(`/kursus/${kelas.id}`);
                          setQuery("");
                          setFilteredCourses([]);
                          setShowSearch(false);
                        }}
                      >
                        <img
                          src={kelas.image}
                          alt={kelas.nama}
                          width="40"
                          height="40"
                          className="me-2 rounded"
                        />
                          <span>{kelas.nama}</span>
                      </div>
                    ))
                  ) : (
                    <p className="text-muted mb-0">Kelas tidak ditemukan</p>
                  )}
                </div>
              )}

              {/* Tombol Login/Logout */}
              <div className="d-flex">
                {user ? (
                  <Button variant="danger" onClick={handleLogout}>
                    Logout
                  </Button>
                ) : (
                  <>
                    <Button
                      variant="outline-primary"
                      className="me-2"
                      onClick={() => navigate("/login")}
                    >
                      Masuk
                    </Button>
                    <Button
                      className="btn btn-primary"
                      onClick={() => navigate("/register")}
                    >
                      Daftar
                    </Button>
                  </>
                )}
              </div>
            </div>
          ) : (
            <>
              <Nav className="mx-auto">
                {navLinks.map((link) => (
                  <div className="nav-link" key={link.id}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        isActive ? "active" : ""
                      }
                      end
                      onClick={() => setIsOpen(false)}
                    >
                      {link.text}
                    </NavLink>
                  </div>
                ))}
              </Nav>

              {/* Tombol Logout khusus MOBILE */}
              {user && (
                <div className="d-lg-none mt-3 text-center">
                  <Button
                    variant="danger"
                    onClick={handleLogout}
                    className="w-100"
                  >
                    Logout
                  </Button>
                </div>
              )}

              {/* Tombol di DESKTOP */}
              <div className="d-none d-lg-flex align-items-center">
                {/* Tombol Search */}
                <Button
                  variant="light"
                  className="me-3"
                  onClick={() => {
                    setShowSearch(true);
                    setIsOpen(false);
                  }}
                >
                  <FaSearch className="text-primary" />
                </Button>

                {/* Icon + Username */}
                {user ? (
                  <div className="d-flex align-items-center">
                    <FaUserCircle size={24} className="text-primary me-2" />
                    <span className="me-3 fw-medium">{user.username}</span>
                    <Button
                      variant="danger"
                      onClick={handleLogout}
                      className="d-lg-inline-block d-none"
                    >
                      Logout
                    </Button>
                  </div>
                ) : (
                  <>
                    <Button
                      variant="outline-primary"
                      className="me-2"
                      onClick={() => navigate("/login")}
                    >
                      Masuk
                    </Button>
                    <Button
                      className="btn btn-primary"
                      onClick={() => navigate("/register")}
                    >
                      Daftar
                    </Button>
                  </>
                )}
              </div>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
