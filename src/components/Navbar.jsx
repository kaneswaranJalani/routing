import { Link } from "react-router-dom";
function Navbar(){
    return(
        <>
        <nav className="navbar">
      <div className="navbar-logo">
        <a href="#home">MyLogo</a>
      </div>
      <ul className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Services">Services</Link>
        <Link to="/Contact">Contact</Link>
      </ul>
    </nav>
        </>
    )
}
export default Navbar