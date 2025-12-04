import { Container, Row, Col } from "react-bootstrap";

export default function SyaratKetentuanPage() {
  return (
    <div className="syarat-page">
      <section className="syarat-page min-vh-100">
      <Container>
        <Row className="justify-content-center py-5">
          <Col lg={10}>
            <h1 className="fw-bold text-center mt-5">Syarat & Ketentuan</h1>
            <p className="text-muted text-center mb-5">
              Dengan menggunakan platform GetCode, Anda menyetujui syarat dan ketentuan berikut.
              Harap membaca dengan seksama sebelum menggunakan layanan kami.
            </p>

            <section className="mb-4">
              <h5 className="fw-semibold">1. Pendaftaran Akun</h5>
              <p className="text-muted">
                Pengguna wajib memberikan informasi yang benar, lengkap, dan terbaru
                saat melakukan pendaftaran. Akun bersifat pribadi dan tidak dapat
                dipindahtangankan tanpa persetujuan tertulis dari GetCode.
              </p>
            </section>

            <section className="mb-4">
              <h5 className="fw-semibold">2. Penggunaan Layanan</h5>
              <p className="text-muted">
                Layanan hanya boleh digunakan untuk tujuan pembelajaran dan tidak
                boleh digunakan untuk aktivitas yang melanggar hukum, merugikan
                pihak lain, atau melanggar hak kekayaan intelektual.
              </p>
            </section>

            <section className="mb-4">
              <h5 className="fw-semibold">3. Konten & Materi</h5>
              <p className="text-muted">
                Semua konten, termasuk video, modul, dan artikel, adalah milik
                GetCode atau mitra yang bekerja sama. Pengguna dilarang
                menggandakan, mendistribusikan, atau menjual konten tanpa izin.
              </p>
            </section>

            <section className="mb-4">
              <h5 className="fw-semibold">4. Pembayaran & Refund</h5>
              <p className="text-muted">
                Semua pembayaran yang dilakukan bersifat final. Refund hanya
                diberikan apabila terjadi kesalahan teknis dari pihak GetCode
                sesuai dengan kebijakan yang berlaku.
              </p>
            </section>

            <section className="mb-4">
              <h5 className="fw-semibold">5. Batasan Tanggung Jawab</h5>
              <p className="text-muted">
                GetCode tidak bertanggung jawab atas kerugian langsung maupun
                tidak langsung yang timbul akibat penyalahgunaan akun atau
                informasi yang diberikan pengguna.
              </p>
            </section>

            <section className="mb-4">
              <h5 className="fw-semibold">6. Perubahan Syarat & Ketentuan</h5>
              <p className="text-muted">
                GetCode berhak untuk mengubah atau memperbarui syarat dan
                ketentuan ini sewaktu-waktu. Perubahan akan diumumkan melalui
                platform resmi GetCode.
              </p>
            </section>

            <p className="text-muted mt-5">
              Dengan terus menggunakan layanan GetCode, Anda dianggap telah
              membaca, memahami, dan menyetujui seluruh syarat dan ketentuan
              yang berlaku.
            </p>
          </Col>
        </Row>
      </Container>
      </section>
    </div>
  );
}
