import { useEffect } from "react";

export function NavBar({ query, setQuery, children }) {
  useEffect(
    function () {
      const el = document.querySelector(".search");
      console.log(el);
      el.focus();
    },
    [query]
  );

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
      />
      {children}
    </nav>
  );
}
