import {
  NavBar,
  Main,
  Box,
  MovieList,
  WatchedMovieList,
  WatchedSummary,
  Loader,
  Error,
  SelectedMovie,
} from "./components/index";
import { useState, useEffect } from "react";

const KEY = "b0ae0fd8";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  // const [watched, setWatched] = useState([]);
  const [watched, setWatched] = useState(function () {
    const storedValue = localStorage.getItem("watched");
    return JSON.parse(storedValue);
  });

  // useEffect(function () {
  //   console.log("Only After the initial render");
  // }, []);

  // useEffect(function () {
  //   console.log("After every changes in the UI");
  // });

  // console.log("During render");

  // useEffect(
  //   function () {
  //     console.log("Only after the query changes");
  //   },
  //   [query]
  // );

  function handleSelectedMovie(id) {
    setSelectedId((a) => (a === id ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatchMoive(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  function handleDeleteWatchedMovie(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  useEffect(
    function () {
      localStorage.setItem("watched", JSON.stringify(watched));
    },
    [watched]
  );

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");

          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");

          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not Found");

          setMovies(data.Search);
          setError("");
        } catch (err) {
          if (err.name !== "AbortError") {
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
      if (!query.length) {
        setMovies([]);
        setError("");
        return;
      }
      handleCloseMovie();
      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return (
    <>
      <NavBar query={query} setQuery={setQuery}>
        <p className="num-results">
          Found <strong>{0}</strong> results
        </p>
      </NavBar>

      <Main>
        <Box>
          {/* {isLoading ? <Loader error={error} /> : <MovieList movies={movies} />} */}
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSlectedMovie={handleSelectedMovie} />
          )}
          {error && <Error message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <SelectedMovie
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatchedMovie={handleAddWatchMoive}
              watched={watched}
              KEY={KEY}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMovieList
                watched={watched}
                onDeleteWatchedMovie={handleDeleteWatchedMovie}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}

export default App;
