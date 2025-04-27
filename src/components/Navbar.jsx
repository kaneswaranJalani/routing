import { Link } from "react-router-dom";
function Navbar(){
    return(
        <>
        <nav className="navbar">
      <div className="navbar-logo">
        <a href="#home">Jala</a>
      </div>
      <ul className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Services">Services</Link>
        <Link to="/Contactpage">Contact</Link>
      </ul>
    </nav>
        </>
    )
}
export default Navbar