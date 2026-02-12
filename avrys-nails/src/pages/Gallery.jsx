import Navbar from '../components/Navbar';

const Gallery = () => {
  return (
    <div className="gallery-page">
      <Navbar />
      <main className="gallery-main">
        <h1 className="page-title">Gallery</h1>
        <div className="gallery-grid">
          {/* Images will be manually inserted here */}
        </div>
      </main>
    </div>
  );
};

export default Gallery;
