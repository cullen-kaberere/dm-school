import Link from "next/link"

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>The Best of Holistic Learning</h1>
          <p>Nurturing minds, building futures, creating leaders of tomorrow</p>
          <Link href="/about/bb" className="btn hero-btn">
            Learn More About Us
          </Link>
        </div>
      </section>

      {/* Intro Section */}
      <section className="intro-section">
        <div className="container">
          <h2 className="section-title">Welcome to Mirema School</h2>
          <p className="intro-text">
            Founded on the principles of excellence and holistic education, Mirema School has been at the forefront of
            nurturing young minds for over two decades. Our commitment to academic excellence, character development,
            and innovative learning approaches makes us the preferred choice for parents seeking quality education for
            their children.
          </p>
        </div>
      </section>

      {/* Highlight Grid */}
      <section className="highlights-section">
        <div className="container">
          <h2 className="section-title">Our Programs</h2>
          <div className="grid-three">
            <div className="highlight-card">
              <h3>Pre-School Program</h3>
              <p>
                Early childhood development with play-based learning, preparing children for their educational journey
                with joy and confidence.
              </p>
            </div>
            <div className="highlight-card">
              <h3>CBC Curriculum</h3>
              <p>
                Competency-Based Curriculum implementation with modern teaching methods, focusing on practical skills
                and critical thinking development.
              </p>
            </div>
            <div className="highlight-card">
              <h3>Special Needs Unit</h3>
              <p>
                Inclusive education with specialized support for learners with diverse needs, ensuring every child
                reaches their full potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Stats */}
      <section className="stats-section">
        <div className="container">
          <h2 className="section-title">Academic Excellence</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <h3>415</h3>
              <p>Top Score</p>
            </div>
            <div className="stat-item">
              <h3>365</h3>
              <p>Mean Score</p>
            </div>
            <div className="stat-item">
              <h3>70</h3>
              <p>Total Candidates</p>
            </div>
          </div>
          <div className="stats-cta">
            <Link href="/about/bb" className="btn">
              Discover More
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
