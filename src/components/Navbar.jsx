import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a  className="navbar-brand fw-bold" href="#">Courses</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/"  className="nav-link active">ALL</Link>
        </li>
        <li className="nav-item">
          <Link to="/fullstackdevelopment"  className="nav-link" href="#">FULL STACK DEVELOPMENT</Link>
        </li>
        <li className="nav-item">
          <Link to="/datascience"  className="nav-link" href="#">Data Science</Link>
        </li>
        <li className="nav-item">
          <Link to="/cybersecurity"  className="nav-link">Cyber Security</Link>
        </li>
        <li className="nav-item">
          <Link to="/career"  className="nav-link">Career</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar