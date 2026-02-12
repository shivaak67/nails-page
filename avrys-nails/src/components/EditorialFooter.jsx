import './EditorialFooter.css';

const EditorialFooter = () => {
  return (
    <footer className="editorial-footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="https://instagram.com/avrysnails" target="_blank" rel="noopener noreferrer" className="footer-link">
            Instagram
          </a>
          <a href="https://tiktok.com/@avrysnails" target="_blank" rel="noopener noreferrer" className="footer-link">
            TikTok
          </a>
          <a href="mailto:avrysnails@example.com" className="footer-link">
            Email
          </a>
        </div>
        <div className="footer-copyright">
          <p>© Avry's Nails</p>
        </div>
      </div>
    </footer>
  );
};

export default EditorialFooter;
