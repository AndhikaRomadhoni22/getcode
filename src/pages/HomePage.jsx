import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Benefit from "../components/Home/Benefit";
import PopularCourse from "../components/Home/PopularCourse";
import Testimonial from "../components/Home/Testimonial";
import Faq from "../components/Faq";

export default function HomePage() {
  return (
    <div className="homepage">
      {/* HERO SECTION */}
      <Hero />
      {/* Kenapa GetCode */}
      <Benefit />
      {/* Tentang Kami */}
      <About />
      {/* Kursus Populer */}
      <PopularCourse />
      {/* Testimonial */}
      <Testimonial />
      {/* Faq */}
      <Faq />
    </div>
  );
}
