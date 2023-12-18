export function Movie({ movie, onSlectedMovie }) {
  return (
    <li onClick={() => onSlectedMovie(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.Title} Poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓 </span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}
