import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Personajes.css';

const Personajes = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const getCharacters = async () => {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${currentPage}`);
      setCharacters(response.data.results);
      setTotalPages(response.data.info.pages);
    };
    getCharacters();
  }, [currentPage]);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
        <div className="container">
          <h1 class="heading">Cromos</h1>
      {characters.map((character) => (
        <div key={character.id}>
          <img src={character.image} alt={character.name} />
          <h2>{character.name}</h2>
        </div>
      ))}
      <div className="pagination">
        <button onClick={handlePrev} disabled={currentPage === 1}>Anterior</button>
        <button onClick={handleNext} disabled={currentPage === totalPages}>Siguiente</button>
      </div>
    </div>
  );
};



export default Personajes;