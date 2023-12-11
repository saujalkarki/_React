import { ListBox, WatchedBox } from "./index";

export function Main({ tempMovieData, tempWatchedData }) {
  return (
    <div className="main">
      <ListBox tempMovieData={tempMovieData} />
      <WatchedBox tempWatchedData={tempWatchedData} />
    </div>
  );
}
