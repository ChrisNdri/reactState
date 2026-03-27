import React, { useState, useEffect } from 'react';

function App() {
  const [personne] = useState({
    fullName: 'Paul Parker',
    bio: 'A software developer from New York.',
    imgSrc: '/img/PaulParker.jpg',
    profession: 'Software Developer'
  });

  const [montre, setMontre] = useState(true);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <button onClick={() => setMontre(!montre)}>
        {montre ? 'Hide' : 'Show'} Personne
      </button>

      {montre && (
        <div>
          <h2>{personne.fullName}</h2>
          <p>{personne.bio}</p>
          <img src={personne.imgSrc} alt={personne.fullName} />
          <h4>{personne.profession}</h4>
          <p>Temps ecoule: {timer} secondes</p>
        </div>
      )}
    </div>
  );
}

export default App;
