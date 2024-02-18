import { useState } from "react";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

export default function App() {
  return (
    <div>
      <Nav />
      <Main />
    </div>
  );
}

function Nav() {
  const [searchResult, setSearchResult] = useState(0);
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>🍿 usePopcorn</h1>
      </div>
      <form>
        <input className="search" type="text" placeholder="Search Movies..." />
      </form>
      <div className="num-found">
        Found <span>{searchResult}</span> result
      </div>
    </nav>
  );
}

function Main() {
  const [watched, setWatched] = useState(tempWatchedData);
  const [movies, setMovies] = useState(tempMovieData);
  return (
    <main className="main">
      <Box>
        <MovieList movies={movies} />
      </Box>
      <Box>
        <WatchSummary watched={watched} />
        <WatchList watched={watched} />
      </Box>
    </main>
  );
}

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="box">
      <button className="toggle-box" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "-" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
}

function MovieList({ movies }) {
  return (
    <ul className="movie-list">
      <li>
        {movies.map((movie) => (
          <Movie movie={movie} key={movies.imdbID} />
        ))}
      </li>
    </ul>
  );
}

function WatchList({ watched }) {
  return (
    <ul className="movie-list">
      <li>
        {watched.map((watch) => (
          <Watch watch={watch} key={watched.imdbID} />
        ))}
      </li>
    </ul>
  );
}

function WatchSummary({ watched }) {
  const average = (arr) => arr.reduce((acc, cur) => acc + cur / arr.length, 0);
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <ul className="movie-list">
      <li>
        <div className="card-summary">
          <h3>Movies You Watched</h3>
          <div className="summary">
            <p>#️⃣ {watched.length} Movies</p>
            <p>⭐ {avgImdbRating}</p>
            <p>🌟 {avgUserRating}</p>
            <p>⏳ {avgRuntime}</p>
          </div>
        </div>
      </li>
    </ul>
  );
}

function Movie({ movie }) {
  return (
    <div className="card">
      <img src={movie.Poster} alt={movie.Title} />
      <div className="description">
        <h3>{movie.Title}</h3>
        <div className="movie-info">
          <span>📅</span>
          <p>{movie.Year}</p>
        </div>
      </div>
    </div>
  );
}

function Watch({ watch }) {
  return (
    <div className="card">
      <img src={watch.Poster} alt={watch.Title} />
      <div className="description">
        <h3>{watch.Title}</h3>
        <div className="watch-info">
          <p>⭐{watch.imdbRating}</p>
          <p>🌟 {watch.userRating}</p>
          <p>⏳ {watch.runtime}</p>
          <buttun className="btn-del">x</buttun>
        </div>
      </div>
    </div>
  );
}
