import React from "react";

function Nav() {
    return (
        <nav className="navbar">
            <a className="navbar-brand nav-link" href="/">
                <h2 className="nav-link">(React) Google Book Search</h2>
            </a>
            <div id="navbarNav">
                <a className="nav-link" id="home" href="/">Search Books</a>
                <a className="nav-link" id="savedBooks" href="/saved">Saved Books</a>
             
            </div>
        </nav>
    );
}

export default Nav;