import React from 'react';
import Nav from '../components/Nav';
import ArtistSummary from '../components/ArtistSummary';

const Artists = ({}) => {
    return (
        <div className="main-container">
            <br />
            <div className="container">
                <Nav />
            </div>

            <div className="container">
                <h1 className="page-header">Artists</h1>
            </div>

            <div className="container">
                <ArtistSummary />
            </div>
        </div>
    )
};

export default Artists