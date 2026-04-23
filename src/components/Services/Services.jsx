import "./Services.css";

export default function Services() {
  const services = [
    {
      title: "Wedding Story",
      desc: "Cinematic & Candid Coverage",
    },
    {
      title: "Editorial",
      desc: "Fashion & Lifestyle Portraits",
    },
    {
      title: "Commercial",
      desc: "Brand Identity & Visuals",
    }
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        {services.map((item, index) => (
          <div className="service-item" key={index}>
            <span className="service-icon">0{index + 1} —</span>
            <div className="service-text">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}