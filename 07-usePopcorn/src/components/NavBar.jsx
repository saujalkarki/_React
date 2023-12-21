import { useRef } from "react";
import { useKey } from "./index";

export function NavBar({ query, setQuery, children }) {
  // useEffect(
  //   function () {
  //     const el = document.querySelector(".search");
  //     el.focus();
  //   },
  //   [query]
  // );

  const inputEl = useRef(null);

  useKey("Enter", function () {
    if (document.activeElement === inputEl.current) return;

    inputEl.current.focus();
    setQuery("");
  });

  return (
    <nav className="nav-bar">
      <div className="logo">
        <span role="img">🍿</span>
        <h1>usePopcorn</h1>
      </div>
      <input
        type="text"
        className="search"
        id="search"
        placeholder="Search movies.. ."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        ref={inputEl}
      />
      {children}
    </nav>
  );
}
