import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Swal from "sweetalert2";

export default function CheckoutModal({ show, onHide, kursus }) {
  const [metode, setMetode] = useState(null);

  const handleBayar = () => {
    if (!metode) return;

    // Simpan transaksi ke localStorage
    const transaksi = {
      namaKursus: kursus.nama,
      harga: kursus.harga,
      metodePembayaran: metode,
      tanggal: new Date().toISOString(),
    };
    localStorage.setItem("transaksi", JSON.stringify(transaksi));

    // Tampilkan SweetAlert sukses
    Swal.fire({
      icon: "success",
      title: "Pembayaran Berhasil ",
      text: `Kursus ${kursus.nama} via ${metode} berhasil dibayar!`,
      confirmButtonText: "OK",
    }).then(() => {
      onHide(); 
      setMetode(null); 
    });
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title className="w-100 text-center">Checkout Kursus</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className="fw-semibold mb-2">{kursus.nama}</h4>
        <h5 className="mb-4 text-primary">{kursus.harga}</h5>

        <h4 className="fw-semibold mb-2">Metode Pembayaran:</h4>
        <div className="d-flex flex-wrap gap-3 mb-3">
          {["BNI", "BRI", "BCA", "DANA"].map((bank) => (
            <div
              key={bank}
              className={`border rounded p-2 text-center cursor-pointer ${
                metode === bank ? "border-primary" : ""
              }`}
              style={{ width: "100px", cursor: "pointer" }}
              onClick={() => setMetode(bank)}
            >
              <img
                src={`/assets/payment/${bank.toLowerCase()}.png`}
                alt={bank}
                height="25"
                className="mb-1"
              />
              
            </div>
          ))}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Batal
        </Button>
        <Button variant="primary" onClick={handleBayar} disabled={!metode}>
          Bayar Sekarang
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
