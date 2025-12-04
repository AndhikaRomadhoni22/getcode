import { Routes, Route, useLocation } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import HomePage from "./pages/HomePage";
import KursusPage from "./pages/KursusPage";
import CourseDetails from "./pages/CourseDetails";
import TestimonialPage from "./pages/TestimonialPage";
import FaqPage from "./pages/FaqPage";
import SyaratKetentuanPage from "./pages/SyaratKetentuanPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const location = useLocation();
  const hideNavbarFooter = ["/login", "/register"].includes(location.pathname);

  return (
    <div>
      {!hideNavbarFooter && <NavbarComponent />}
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kursus" element={<KursusPage />} />
        <Route path="/kursus/:id" element={<CourseDetails />} />
        <Route path="/testimoni" element={<TestimonialPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/syaratketentuan" element={<SyaratKetentuanPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      
      {!hideNavbarFooter && <FooterComponent />}
      <ScrollToTop />
    </div>
  );
}
