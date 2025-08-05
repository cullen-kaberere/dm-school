export default function ServicesPage() {
  const services = [
    {
      title: "Learning Support",
      description:
        "Individualized support for students who need extra help with their studies, including remedial classes and one-on-one tutoring.",
      features: ["Remedial classes", "One-on-one tutoring", "Learning assessments", "Progress monitoring"],
    },
    {
      title: "School Transport",
      description:
        "Safe and reliable transportation service covering various routes across Nairobi and surrounding areas.",
      features: ["Multiple routes", "Qualified drivers", "GPS tracking", "Safety protocols"],
    },
    {
      title: "Cafeteria Services",
      description:
        "Nutritious and balanced meals prepared by qualified nutritionists to support healthy growth and development.",
      features: ["Balanced nutrition", "Fresh ingredients", "Dietary accommodations", "Hygiene standards"],
    },
    {
      title: "Optional Boarding",
      description:
        "Comfortable boarding facilities for students who prefer to stay on campus, with 24/7 supervision and care.",
      features: ["24/7 supervision", "Comfortable dormitories", "Study time", "Recreational activities"],
    },
  ]

  return (
    <div className="page-content">
      <div className="container">
        <h1 className="page-title">Our Services</h1>
        <p className="page-description">
          Mirema School offers comprehensive services to support our students' academic, physical, and social
          development.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
