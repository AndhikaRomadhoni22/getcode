import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonial } from "../../data";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Keyboard, Autoplay } from "swiper/modules";

export default function Testimonial() {
  console.log("Jumlah data:", testimonial.length);
  return (
    <section className="py-5 bg-white">
      <Container>
        <h2 className="text-center fw-bold mb-5">Testimoni</h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          keyboard={{ enabled: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1200: { slidesPerView: 3, spaceBetween: 40 },
          }}
          modules={[Pagination, Keyboard, Autoplay]}
          className="mySwiper"
        >
          {testimonial.map((data) => (
            <SwiperSlide key={data.id}>
              <div className="card h-100 shadow-sm border-0 p-4">
                <p className="text-muted fst-italic mb-4">"{data.desc}"</p>
                <div className="d-flex align-items-center">
                  <img
                    src={data.image}
                    alt={data.name}
                    className="rounded-circle me-3"
                    style={{ width: "55px", height: "55px", objectFit: "cover" }}
                  />
                  <div>
                    <h6 className="mb-0 fw-bold">{data.name}</h6>
                    <small className="text-muted">{data.skill}</small>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}
