import './MoodBoard.css';

const MoodBoard = () => {
  const moodItems = [
    { id: 1, size: 'large', rotation: 2 },
    { id: 2, size: 'small', rotation: -3 },
    { id: 3, size: 'medium', rotation: 1 },
    { id: 4, size: 'small', rotation: -2 },
    { id: 5, size: 'large', rotation: 3 },
    { id: 6, size: 'medium', rotation: -1 },
    { id: 7, size: 'small', rotation: 2 },
    { id: 8, size: 'medium', rotation: -3 },
    { id: 9, size: 'large', rotation: 1 }
  ];

  return (
    <section className="mood-board">
      <h2 className="mood-title">The Mood</h2>
      <div className="mood-grid">
        {moodItems.map(item => (
          <div 
            key={item.id} 
            className={`mood-item mood-${item.size}`}
            style={{ transform: `rotate(${item.rotation}deg)` }}
          >
            <div className="mood-image"></div>
            <div className="mood-overlay"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MoodBoard;
