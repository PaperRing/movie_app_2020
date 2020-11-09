import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Moive( {id, title, year, summary, poster}){
    return (
      <div class="movies__movie">
        <img src={poster} alt={title} title={title}/>
        <div class="movies__data">
          <h3 class="movie__title">{title}</h3>
          <h5 class="movice__year">{year}</h5>
          <p class="movie__summary">{summary}</p> 
        </div>
      </div>
    );
}

Moive.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Moive;