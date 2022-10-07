// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-bar">
    <ul className="nav-menu">
      <li className="nav-menu-item">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>

      <li className="nav-menu-item">
        <Link to="/about" className="nav-link">
          About
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
