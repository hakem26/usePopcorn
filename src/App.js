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
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>🍿 usePopcorn</h1>
      </div>
      <form>
        <input className="search" type="text" placeholder="Search Movies..." />
      </form>
      <div className="num-found">
        Found <span>X</span> result
      </div>
    </nav>
  );
}

function Main() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <main className="main">
      <Box isOpen={isOpen} onIsOpen={() => setIsOpen(!isOpen)}>
        <List>{isOpen && <MovieList />}</List>
      </Box>
      <Box>
        <List>{isOpen && <WatchList />}</List>
      </Box>
    </main>
  );
}

function Box({ children, isOpen, onIsOpen }) {
  return (
    <div className="box">
      <button className="toggle-box" onClick={onIsOpen}>
        {isOpen ? "-" : "+"}
      </button>
      {children}
    </div>
  );
}

function List({ children }) {
  return <ul>{children}</ul>;
}

function MovieList() {
  return (
    <li>
      {tempMovieData.map((movie) => (
        <Movie movie={movie} key={tempMovieData.imdbID} />
      ))}
    </li>
  );
}

function WatchList() {
  return (
    <li>
      {tempWatchedData.map((movie) => (
        <Movie movie={movie} key={tempWatchedData.imdbID} />
      ))}
    </li>
  );
}

function Movie({ movie }) {
  return (
    <div>
      <img src={movie.Poster} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <p>{movie.runtime}</p>
    </div>
  );
}
