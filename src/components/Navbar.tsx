import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-transparent" data-bs-theme="dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/projects" className="nav-link">
                                Projects
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/tributes" className="nav-link">
                                Tributes
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/fanarts" className="nav-link">
                                Fanarts
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/stickers" className="nav-link">
                                Stickers
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/fursona" className="nav-link">
                                Fursona
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;