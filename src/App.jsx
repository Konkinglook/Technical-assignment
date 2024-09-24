import React, { useEffect, useState } from "react";
import "./App.css";
import { APIKey } from "./api/apikey";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import MovieList from "./components/MovieList/MovieList";
import Header from "./components/Header/Header";
import SearchBox from "./components/SearchBox/SearchBox";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PangNotFound from "./components/PangNotFound/PangNotFound";
import AddFavorite from "./components/AddFavorite/AddFavorite";
import RemoveFavorites from "./components/RemoveFavorites/RemoveFavorites";
import FavoriteDetail from "./components/FavoriteDetail//FavoriteDetail";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [fav, setFav] = useState([]);
  const [search, setSearch] = useState("thor");

  const getMovie = async (search) => {
    const url = `https://www.omdbapi.com/?apikey=${APIKey}&s=${search}`;
    const res = await fetch(url);
    const resJson = await res.json();

    if (resJson.Search) {
      setMovies(resJson.Search);
    }
  };
  useEffect(() => {
    getMovie(search);
  }, [search]);

  useEffect(() => {
    const movieFavorite = JSON.parse(
      localStorage.getItem("movie-app-favorite")
    );

    setFav(movieFavorite);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("movie-app-favorite", JSON.stringify(items));
  };

  const addFavMovie = (movie) => {
    const newFav = [...fav, movie];
    setFav(newFav);
    saveToLocalStorage(newFav);
  };

  const removeFavMovie = (movie) => {
    const newFavList = fav.filter((fav) => fav.imdbID !== movie.imdbID);
    setFav(newFavList);
    saveToLocalStorage(newFavList);
  };

  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="container">
          <SearchBox search={search} setSearch={setSearch} />
          <Routes>
            <Route
              path="/"
              element={
                <MovieList
                  movies={movies}
                  favoriteChick={addFavMovie}
                  componentType={AddFavorite}
                />
              }
            />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="/favorite" element={<FavoriteDetail />} />
            <Route path="*" element={<PangNotFound />} />
          </Routes>

          {/* Favorite */}
          <div className="content-fav">
            <h2>Favorite</h2>
            <MovieList
              movies={fav}
              favoriteChick={removeFavMovie}
              componentType={RemoveFavorites}
            />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
