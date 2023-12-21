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
  useMovies,
  useLocalStorageState,
} from "./components/index";
import { useState, useEffect } from "react";

const KEY = "b0ae0fd8";

function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const { movies, error, isLoading } = useMovies(query);

  const [watched, setWatched] = useLocalStorageState([], "watched");

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
