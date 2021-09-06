import './main.css';
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function NavBar(){
  return (
    <nav>
      <ul className="navbar">
        <Router>
          <li className="navbar-item"><Link to="/">Home</Link></li>
        </Router>
      </ul>
    </nav>
  )
}