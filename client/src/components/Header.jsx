import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Header.css';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg text-light">
            <div className="container">
                <Link className="navbar-brand" to="/"><i class="fas fa-book-open book"></i></Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            to="/search"
                            className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
                        > Search Book</Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/saved"
                            className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                        >Saved Books</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Header;