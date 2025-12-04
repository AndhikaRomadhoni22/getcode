import { useState } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Faq from "../components/Faq";
import { semuaKursus } from "../data";

export default function KursusPage() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [kategori, setKategori] = useState("all");

// Ambil semua kategori unik dari data
  const kategoriList = [
    "all",
    ...new Set(semuaKursus.map((kursus) => kursus.kategori)),
  ];

  // Filter & Sort data
  const filteredKursus = semuaKursus
    .filter((kursus) => {
      const cocokSearch = kursus.nama.toLowerCase().includes(search.toLowerCase());
      const cocokKategori = kategori === "all" ? true : kursus.kategori === kategori;
      return cocokSearch && cocokKategori;
    })
    .sort((a, b) => {
      if (sort === "asc") return a.nama.localeCompare(b.nama);
      if (sort === "desc") return b.nama.localeCompare(a.nama);
      if (sort === "harga-asc") return parseInt(a.harga.replace(/\D/g, "")) - parseInt(b.harga.replace(/\D/g, ""));
      if (sort === "harga-desc") return parseInt(b.harga.replace(/\D/g, "")) - parseInt(a.harga.replace(/\D/g, ""));
      return 0;
    });

  return (
    <div className="kursus-page">
      <section className="kursus min-vh-100">
        <Container>
          {/* Heading */}
          <Row className="text-center py-5">
            <Col>
              <h1 className="fw-bold mt-5">Semua Kursus</h1>
              <p className="text-muted">
                Tingkatkan skill coding kamu dari dasar hingga mahir dengan
                berbagai kursus <br /> yang tersedia. Pilih kursus sesuai minat
                dan kebutuhanmu!
              </p>
            </Col>
          </Row>

          {/* Search, Sorting, Filter */}
          <Row className="mb-4">
            <Col lg={8} md={6} sm={12} className="mb-2">
              <Form.Control
                type="text"
                placeholder="Cari kursus..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </Col>
            <Col lg={2} md={3} sm={12} className="mb-2">
              <Form.Select value={kategori} onChange={(e) => setKategori(e.target.value)}>
                {kategoriList.map((kat, idx) => (
                  <option key={idx} value={kat}>
                    {kat === "all" ? "Semua Kategori" : kat}
                  </option>
                ))}
              </Form.Select>
            </Col>
            <Col lg={2} md={3} sm={12} className="mb-2">
              <Form.Select value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="">Urutkan</option>
                <option value="asc">A - Z</option>
                <option value="desc">Z - A</option>
                <option value="harga-asc">Harga Terendah</option>
                <option value="harga-desc">Harga Tertinggi</option>
              </Form.Select>
            </Col>
          </Row>

          {/* Card Grid */}
          <Row className="pb-5">
            {filteredKursus.map((kursus) => (
              <Col key={kursus.id} lg={3} md={6} sm={12} className="mb-4">
                <Link
                  to={`/kursus/${kursus.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Card className="h-100 border-0 card-shadow">
                    <Card.Img
                      variant="top"
                      src={kursus.image}
                      alt={kursus.title}
                      style={{ height: "180px", objectFit: "cover" }}
                    />

                    <Card.Body>
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <small className="text-muted">{kursus.nama}</small>
                        <div className="text-warning">
                          <i className={kursus.star1}></i>
                          <i className={kursus.star2}></i>
                          <i className={kursus.star3}></i>
                          <i className={kursus.star4}></i>
                          <i className={kursus.star5}></i>
                        </div>
                      </div>

                      <Card.Title className="fw-semibold text-truncate">
                        {kursus.title}
                      </Card.Title>

                      <small className="text-muted d-block mb-2">By GetCode</small>
                      <hr />
                      <h4 className="text-primary text-end fw-semibold">
                        {kursus.harga}
                      </h4>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <Faq />
    </div>
  );
}
