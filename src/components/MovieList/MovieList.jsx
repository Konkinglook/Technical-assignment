import React from "react";
import "./MovieList.css";
import { Link } from "react-router-dom";

import { IoIosHeart } from "react-icons/io";

const MovieList = (props) => {
  const FavoriteOrRemove = props.componentType;
  return (
    <div className="container-list">
      {props.movies.map((movie, index) => (
        <div key={index}>
          <div className="card-image">
            <Link to={`/movie/${movie.imdbID}`}>
              <img src={movie.Poster} alt={movie.Title} />
            </Link>
            <div className="overlay" onClick={() => props.favoriteChick(movie)}>
              <Link to="/favorite"><FavoriteOrRemove/></Link>
            </div>
          </div>
          <div className="con-title">
            <span>{movie.Title}</span>
            <p>Year : {movie.Year}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
