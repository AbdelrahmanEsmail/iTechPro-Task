import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">RAHAL</Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/">Home</Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;