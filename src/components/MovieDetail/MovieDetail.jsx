import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { APIKey } from "../../api/apikey";
import { useParams } from "react-router-dom";
import "./MovieDetail.css";

const MovieDetail = () => {
  const [movieD, setMovieD] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const getMovieD = async () => {
    const urlD = `https://www.omdbapi.com/?apikey=${APIKey}&i=${id}&Plot=full`;
    const res = await fetch(urlD);
    const resJson = await res.json();

    if (res.ok) {
      setMovieD(resJson);
      setLoading(true);
    }
  };
  useEffect(() => {
    getMovieD();
  }, []);
  return (
    <>
      {loading ? (
        <div className="movie-detail-con">
          <div className="move-detail-img">
            <img src={movieD.Poster} alt={movieD.Title} />
          </div>

          <div className="movie-detail-info">
            <h2>{movieD.Title}</h2>
            <p>{movieD.Plot}</p>
            <div>
              <strong>Released : {movieD.Released}</strong>
            </div>

            <button>
              <Link to="/">Home</Link>
            </button>
          </div>
        </div>
      ) : (
        <h1 style={{ margin: "1rem 0" }}>Loading.....</h1>
      )}
    </>
  );
};

export default MovieDetail;
