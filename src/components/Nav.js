import React from 'react'

const Nav = ({}) => {
    return (
        <nav className="navbar" role="navigation">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                            data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="http://localhost:3000/">SOUND CONTROL RECORDS</a>
                </div>

                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="nav navbar-nav">
                        <li>
                            <a href="#">NEWS</a>
                        </li>
                        <li>
                            <a href="#">DISCOGRAPHY</a>
                        </li>
                        <li>
                            <a href="http://localhost:3000/#/?_k=dzkgj6/Artists">ARTISTS</a>
                        </li>
                        <li>
                            <a href="#">STORE</a>
                        </li>
                    </ul>
                    <hr />
                </div>
            </div>
        </nav>
    )
};

export default Nav;