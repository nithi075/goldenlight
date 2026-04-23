import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import "./Hero.css";
import logoimg from "../../assets/logo.png";

// hero images
import hero1 from "../../assets/hero1.jpg";
import hero2 from "../../assets/hero2.jpg";
import hero3 from "../../assets/hero3.jpg";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const heroImages = [hero1, hero2, hero3];

  // Smooth slide transition
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      );
    }, 7000); // 7 seconds for a relaxed cinematic feel

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const scrollToSection = (id) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/917092263880", "_blank");
  };

  return (
    <section className="hero" id="home">
      {/* Navbar - Original logic with premium CSS */}
      <nav className="navbar">
        <div className="logo">
          <img src={logoimg} alt="Jeeva Photography Logo" />
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#gallery" onClick={() => setMenuOpen(false)}>Portfolio</a></li>
          <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
          <li><a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>

        <button className="nav-btn desktop-btn" onClick={() => scrollToSection("contact")}>
          Check Availability
        </button>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </nav>

      {/* Hero Background Slider */}
      <div className="hero-bg">
        {heroImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Wedding cinematic frame ${index}`}
            className={index === currentImage ? "active-slide" : ""}
          />
        ))}
      </div>

      {/* Hero Content - New Luxury Text */}
      <div className="hero-overlay">
        <span className="sub-title">The Art of Visual Storytelling</span>

        <h1>
          Preserving Your 
          <br />
          Golden Moments
        </h1>

        <p>
          Specializing in luxury wedding cinematography and candid frames. 
          We don't just document events; we capture the authentic soul 
          of your celebration with timeless elegance.
        </p>

        <div className="hero-btns">
          <button className="hero-btn" onClick={() => scrollToSection("gallery")}>
            Explore Portfolio
          </button>
          <button className="hero-btn-outline" onClick={handleWhatsAppClick}>
            Book a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}