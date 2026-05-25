import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="brand-name">DEVI PHOTOGRAPHY</h2>
        <a href="mailto:hello@thenarrative.com" className="footer-contact">
          HELLO@DEVIPHOTOGRAPHY.COM
        </a>
        <div className="social-links">
          <a href="#">INSTAGRAM</a>
          <a href="#">PINTEREST</a>
          <a href="#">VIMEO</a>
        </div>
        <p className="copyright">© 2026 DEVI PHOTOGRAPHY. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
};

export default Footer;
