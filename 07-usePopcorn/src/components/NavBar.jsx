import { useState } from "react";

export function NavBar({ children }) {
  const [query, setQuery] = useState("");

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
