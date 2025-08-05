export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <h3>Contact Information</h3>
            <div className="contact-info">
              <p>
                <strong>Address:</strong>
                <br />
                123 Education Avenue
                <br />
                Mirema Drive, Nairobi
                <br />
                Kenya
              </p>
              <p>
                <strong>Phone:</strong> +254 700 123 456
              </p>
              <p>
                <strong>Email:</strong> info@miremaschool.ac.ke
              </p>
            </div>
          </div>

          <div className="footer-col">
            <h3>Office Hours</h3>
            <div className="office-hours">
              <p>
                <strong>Monday – Friday:</strong>
                <br />
                8:00 AM – 5:00 PM
              </p>
              <p>
                <strong>Saturday:</strong>
                <br />
                8:00 AM – 1:00 PM
              </p>
              <p>
                <strong>Sunday:</strong>
                <br />
                Closed
              </p>
            </div>
          </div>

          <div className="footer-col">
            <h3>Follow Us</h3>
            <div className="social-media">
              <a href="#" className="social-link" aria-label="Facebook">
                <img src="/facebook-icon.png" alt="Facebook" width="24" height="24" />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <img src="/twitter-icon.png" alt="Twitter" width="24" height="24" />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <img src="/linkedin-icon.png" alt="LinkedIn" width="24" height="24" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Mirema School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
