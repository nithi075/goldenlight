import "./Location.css";

export default function Location() {
  const handleDirections = () => {
    window.open(
      "https://www.google.com/maps/place/Golden+Digital+Studio/",
      "_blank"
    );
  };

  return (
    <section className="location-section">
      <div className="location-container">

        {/* Left Side Content */}
        <div className="location-content">
          <span className="location-tag">
            Visit Our Studio
          </span>

          <h2>Location</h2>

          <div className="address-box">
            <h3 className="brand-name">
              Golden Light Photography
            </h3>

            <p className="address-details">
              Chennai, <br />
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d151831.14893069552!2d80.01735781186598!3d13.136727823733377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525dee98af0673%3A0x8ed16866795e8adb!2sGolden%20Digital%20Studio!5e0!3m2!1sen!2sin!4v1777015438820!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Golden Digital Studio Location"
          ></iframe>

          <div className="map-border-decoration"></div>
        </div>

      </div>
    </section>
  );
}