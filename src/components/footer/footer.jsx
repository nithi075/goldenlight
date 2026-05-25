import './footer.css';
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-container">

        {/* Top Section */}
        <div className="footer-top">
          <h1 className="footer-logo">Golden Lights Photography</h1>
          <p className="footer-slogan">
            Capturing timeless stories with elegance.
          </p>
        </div>

        {/* Social Links */}
        <div className="footer-middle">
          <div className="footer-social-links">

            <a
              href="https://www.instagram.com/goldenlights_photography/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram /> Instagram
            </a>

            <a
              href="https://wa.me/91709226986"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp /> WhatsApp
            </a>

            <a href="mailto:hello@jeevaphotography.com">
              <FaEnvelope /> Email
            </a>

          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <div className="footer-line"></div>

          <div className="footer-copyright">
            <p>
              © {currentYear} Golden Lights Photography. Crafted with Love.
            </p>

            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
