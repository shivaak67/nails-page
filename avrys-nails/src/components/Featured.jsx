import './Featured.css';

const Featured = () => {
  const featuredSets = [
    { id: 1, title: "Cherry Bomb", price: "$85", tags: ["Glossy", "Y2K"] },
    { id: 2, title: "Denim Dreams", price: "$90", tags: ["Matte", "Textured"] },
    { id: 3, title: "Gold Digger", price: "$95", tags: ["Chrome", "Metallic"] },
    { id: 4, title: "Pink Poison", price: "$80", tags: ["Glossy", "Pastel"] },
    { id: 5, title: "Black Magic", price: "$85", tags: ["Matte", "Edgy"] },
    { id: 6, title: "Cream Dream", price: "$75", tags: ["Nude", "Classic"] }
  ];

  return (
    <section className="featured">
      <h2 className="featured-title">Featured Sets</h2>
      <div className="featured-grid">
        {featuredSets.map(set => (
          <div key={set.id} className="set-card">
            <div className="nail-image"></div>
            <h3 className="set-title">{set.title}</h3>
            <p className="set-price">{set.price}</p>
            <div className="set-tags">
              {set.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Featured;
