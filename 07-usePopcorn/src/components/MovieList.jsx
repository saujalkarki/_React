import { useState } from "react";
import { Movie } from "./index";

export function MovieList({ tempMovieData }) {
  const [movies, setMovies] = useState(tempMovieData);
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}
