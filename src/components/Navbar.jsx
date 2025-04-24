import { Link } from "react-router-dom";
function Navbar(){
    return(
        <>
        <nav>
          <div className="container">
            <div>
                <p className="logo">jala</p>
                <ul className="nav">
                        
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/Services">Services</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                    </ul> 
                 
            </div>
          </div>
           
        </nav>
        </>
    )
}
export default Navbar