export function WatchedSummary({ watched }) {
  const average = (arry) =>
    arry.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

  const avgImbdRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <>
      <div className="summary">
        <h2>Movies you Watched</h2>
        <div>
          <p>
            <span>#️⃣</span>
            <span>{watched.length} movies</span>
          </p>
          <p>
            <span>⭐️</span>
            <span>{avgImbdRating.toFixed(2)}</span>
          </p>
          <p>
            <span>🌟</span>
            <span>{avgUserRating.toFixed(2)}</span>
          </p>
          <p>
            <span>⏳</span>
            <span>{avgRuntime} min</span>
          </p>
        </div>
      </div>
    </>
  );
}
