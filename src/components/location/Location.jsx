import "./Location.css";

export default function Location() {
  const handleDirections = () => {
    window.open(
      "https://www.google.com/maps/place/JEEVA+PHOTOGRAPHY/",
      "_blank"
    );
  };

  return (
    <section className="location-section">
      <div className="location-container">
        
        {/* Left Side */}
        <div className="location-content">
          <span className="location-tag">
            Visit Our Studio
          </span>

          <h2>Location</h2>

          <div className="address-box">
            <h3 className="brand-name">
              Jeeva Photography
            </h3>

            <p className="address-details">
              Ramanathapuram, <br />
              Tamil Nadu, India
            </p>
          </div>

          <button
            className="directions-btn"
            onClick={handleDirections}
          >
            Get Directions
          </button>
        </div>

        {/* Right Side Map */}
        <div className="map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125971.79129960937!2d78.67686949726561!3d9.366988699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b01a3006c5eddc3%3A0x2c9c848f63c13ffe!2sJEEVA%20PHOTOGRAPHY!5e0!3m2!1sen!2sin!4v1776961422379!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Jeeva Photography Location"
          ></iframe>

          <div className="map-border-decoration"></div>
        </div>
      </div>
    </section>
  );
}