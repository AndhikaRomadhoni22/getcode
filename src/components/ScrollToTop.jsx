<<<<<<< HEAD
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const toggleVisibility = () => {
      const hero = document.querySelector(".hero-section"); 
      const heroHeight = hero ? hero.offsetHeight : 300; 

      if (window.scrollY > heroHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button onClick={scrollToTop} className="scroll-to-top btn btn-primary bottom-0 me-0 m-3"
          initial={{ opacity: 0, y: 50 }}   
          animate={{ opacity: 1, y: 0 }}  
          exit={{ opacity: 0, y: 50 }}     
          transition={{ duration: 0.4, ease: "easeInOut" }}>
          <FaArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
=======
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const toggleVisibility = () => {
      const hero = document.querySelector(".hero-section"); 
      const heroHeight = hero ? hero.offsetHeight : 300; 

      if (window.scrollY > heroHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button onClick={scrollToTop} className="scroll-to-top btn btn-primary bottom-0 me-0 m-3"
          initial={{ opacity: 0, y: 50 }}   
          animate={{ opacity: 1, y: 0 }}  
          exit={{ opacity: 0, y: 50 }}     
          transition={{ duration: 0.4, ease: "easeInOut" }}>
          <FaArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
>>>>>>> 9fb999e2136c79d4a32e8371acd58c8f091bada0
