import Navbar from '../components/Navbar';

const Contact = () => {
  return (
    <div className="contact-page">
      <Navbar />
      <main className="contact-main">
        <div className="contact-content">
          <h1 className="page-title">Get in Touch</h1>
          <div className="contact-info">
            <div className="contact-item">
              <h3>Instagram</h3>
              <a href="https://instagram.com/avrysnails" target="_blank" rel="noopener noreferrer" className="contact-link">
                @avrysnails
              </a>
            </div>
            <div className="contact-item">
              <h3>Email</h3>
              <a href="mailto:avrysnails@example.com" className="contact-link">
                avrysnails@example.com
              </a>
            </div>
            <div className="contact-item">
              <h3>Book Your Appointment</h3>
              <button className="booking-button">
                Schedule Now
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
