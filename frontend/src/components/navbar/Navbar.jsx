import { Link } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {
  return (
    <>
    
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <Link className="navbar-brand fw-bolder" to="#"> TO DO</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item mx-1">
          <Link className="nav-link active"  to="/">Home</Link>
        </li>
        <li className="nav-item mx-1">
          <Link className="nav-link active"  to="/about">About</Link>
        </li>
        <li className="nav-item mx-1">
          <Link className="nav-link active"  to="/todo">To DO</Link>
        </li>
        <li className="nav-item mx-1">
          <Link className="nav-link active"  to="/weatherapp">Weather App</Link>
        </li>
        <li className="nav-item mx-1">
          <Link className="nav-link active btn-nav"  to="/signup">Sign Up</Link>
        </li>
        <li className="nav-item mx-1">
          <Link className="nav-link active btn-nav"  to="/signin">Sign In</Link>
        </li>
        <li className="nav-item mx-1">
          <Link className="nav-link active btn-nav"  to="">Log Out</Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Home</Link>
        </li> */}
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar;
