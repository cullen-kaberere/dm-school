"use client";

import Link from "next/link";
import { 
  FaGraduationCap, 
  FaChild, 
  FaBookOpen, 
  FaUsers, 
  FaChartLine, 
  FaSchool,
  FaFlask,
  FaMusic,
  FaFutbol,
  FaUserTie,
  FaCalendarAlt
} from "react-icons/fa";
import { motion } from "framer-motion";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const scaleUp = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Where Excellence Meets Character</h1>
          <p>At Damacrest, we don't just educate – we inspire lifelong learners and responsible global citizens</p>
          <div className="hero-cta-group">
            <Link href="/admissions" className="btn hero-btn">
              Join Damacrest
            </Link>
            <Link href="/virtual-tour" className="btn hero-btn-outline">
              Take a Virtual Tour
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Quick Facts Bar */}
      <section className="quick-facts">
        <div className="container">
          <div className="facts-grid">
            <div className="fact-item">
              <FaCalendarAlt className="fact-icon" />
              <span>Established 2005</span>
            </div>
            <div className="fact-item">
              <FaUserTie className="fact-icon" />
              <span>Qualified Teachers</span>
            </div>
            <div className="fact-item">
              <FaFlask className="fact-icon" />
              <span>Modern Laboratories</span>
            </div>
            <div className="fact-item">
              <FaFutbol className="fact-icon" />
              <span>Sports Facilities</span>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="intro-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="section-title">Discover the Damacrest Difference</h2>
            <p className="intro-text">
              For nearly two decades, Damacrest School has stood as a beacon of academic excellence and 
              character formation in Nairobi. Our unique blend of rigorous academics, vibrant co-curricular 
              programs, and values-based education prepares students not just for exams, but for life.
            </p>
            <div className="discover-more">
              <Link href="/about" className="discover-link">
                Discover Our Story →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="programs-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="section-title">Our Educational Pathway</h2>
            <p className="section-subtitle">
              A seamless transition through all levels of basic education with personalized attention
            </p>
          </motion.div>
          
          <motion.div 
            className="grid-three"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="program-card" variants={scaleUp}>
              <div className="program-badge">Ages 2-5</div>
              <div className="icon-box">
                <FaChild className="program-icon" />
              </div>
              <h3>Early Years</h3>
              <ul className="program-features">
                <li>Play-based learning</li>
                <li>Language immersion</li>
                <li>Social development</li>
              </ul>
              <Link href="/programs/preschool" className="program-cta">
                Learn More
              </Link>
            </motion.div>
            
            <motion.div className="program-card" variants={scaleUp}>
              <div className="program-badge">Grades 1-6</div>
              <div className="icon-box">
                <FaBookOpen className="program-icon" />
              </div>
              <h3>Primary School</h3>
              <ul className="program-features">
                <li>CBC curriculum</li>
                <li>STEAM integration</li>
                <li>Project-based learning</li>
              </ul>
              <Link href="/programs/primary" className="program-cta">
                Learn More
              </Link>
            </motion.div>
            
            <motion.div className="program-card" variants={scaleUp}>
              <div className="program-badge">Grades 7-9</div>
              <div className="icon-box">
                <FaGraduationCap className="program-icon" />
              </div>
              <h3>Junior Secondary</h3>
              <ul className="program-features">
                <li>Specialized pathways</li>
                <li>Career guidance</li>
                <li>Leadership development</li>
              </ul>
              <Link href="/programs/junior-secondary" className="program-cta">
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="section-title">Why Parents Choose Damacrest</h2>
          </motion.div>
          
          <div className="benefits-grid">
            <motion.div 
              className="benefit-card"
              whileHover={{ scale: 1.03 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleUp}
            >
              <div className="benefit-icon academic"></div>
              <h3>Academic Excellence</h3>
              <p>
                Consistently top KCPE results with 85% of our students joining national schools
              </p>
            </motion.div>
            
            <motion.div 
              className="benefit-card"
              whileHover={{ scale: 1.03 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              variants={scaleUp}
            >
              <div className="benefit-icon facilities"></div>
              <h3>World-Class Facilities</h3>
              <p>
                Modern classrooms, science labs, sports fields, and creative arts studios
              </p>
            </motion.div>
            
            <motion.div 
              className="benefit-card"
              whileHover={{ scale: 1.03 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              variants={scaleUp}
            >
              <div className="benefit-icon holistic"></div>
              <h3>Holistic Development</h3>
              <p>
                Over 30 clubs and societies to nurture diverse talents and interests
              </p>
            </motion.div>
            
            <motion.div 
              className="benefit-card"
              whileHover={{ scale: 1.03 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              variants={scaleUp}
            >
              <div className="benefit-icon community"></div>
              <h3>Supportive Community</h3>
              <p>
                Active parent engagement through regular workshops and events
              </p>
            </motion.div>
          </div>
          
          <div className="cta-center">
            <Link href="/why-choose-us" className="btn">
              Explore More Benefits
            </Link>
          </div>
        </div>
      </section>

      {/* Co-curricular Section */}
      <section className="cocurricular-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="section-title">Beyond the Classroom</h2>
            <p className="section-subtitle">
              Developing well-rounded individuals through diverse co-curricular activities
            </p>
          </motion.div>
          
          <div className="activity-tabs">
            <div className="tab-nav">
              <button className="tab-btn active">Sports</button>
              <button className="tab-btn">Arts</button>
              <button className="tab-btn">Clubs</button>
              <button className="tab-btn">Leadership</button>
            </div>
            
            <div className="tab-content">
              <motion.div 
                className="activity-grid"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.div className="activity-card" variants={fadeIn}>
                  <FaFutbol className="activity-icon" />
                  <h4>Football Academy</h4>
                  <p>Competitive teams with professional coaching</p>
                </motion.div>
                
                <motion.div className="activity-card" variants={fadeIn}>
                  <FaMusic className="activity-icon" />
                  <h4>Music Program</h4>
                  <p>Choir, band, and individual instrument training</p>
                </motion.div>
                
                <motion.div className="activity-card" variants={fadeIn}>
                  <FaFlask className="activity-icon" />
                  <h4>Science Club</h4>
                  <p>Annual science fairs and innovation challenges</p>
                </motion.div>
                
                <motion.div className="activity-card" variants={fadeIn}>
                  <FaUsers className="activity-icon" />
                  <h4>Student Council</h4>
                  <p>Leadership training and governance experience</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
          
          <div className="cta-center">
            <Link href="/co-curricular" className="btn btn-outline">
              View All Activities
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="section-title">Hear From Our Community</h2>
          </motion.div>
          
          <div className="testimonial-slider">
            {/* Testimonial slides would go here */}
            <div className="testimonial-cta">
              <p>Ready to experience the Damacrest difference?</p>
              <Link href="/contact" className="btn">
                Schedule a Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions CTA */}
      <section className="admissions-cta">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleUp}
          >
            <h2>Limited Spaces Available for 2024 Intake</h2>
            <p>
              Join our waiting list today to secure your child's place in Nairobi's premier 
              holistic education institution
            </p>
            <div className="cta-group">
              <Link href="/admissions" className="btn">
                Apply Now
              </Link>
              <Link href="/fees" className="btn btn-outline">
                Fee Structure
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}