export function NavBar() {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <span role="img">🍿</span>
        <h1>usePopcorn</h1>
      </div>
      <input type="text" className="search" placeholder="Search movies..." />
      <p className="num-results">
        Found <strong>X</strong> results
      </p>
    </nav>
  );
}
