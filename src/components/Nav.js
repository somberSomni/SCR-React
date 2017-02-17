import React from 'react'

const Nav = ({}) => {
    return (
        <nav className="navbar" role="navigation">
            <div>
                <div className="nav-header">
                    <a href="http://localhost:3000/"><img src='images/sound-control-logo.png'/></a>
                </div>

                <div className="menu-wrapper">
                    <ul className="nav-menu">
                        <li>
                            <a href="http://localhost:3000">NEWS</a>
                        </li>
                        <li>
                            <a href="http://localhost:3000/#/?_k=i0od1w/discography">DISCOGRAPHY</a>
                        </li>
                        <li>
                            <a href="http://localhost:3000/#/?_k=i0od1w/artists">ARTISTS</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Nav;
