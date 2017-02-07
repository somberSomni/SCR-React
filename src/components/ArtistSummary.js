import React from 'react';

const ArtistSummary = ({artists}) => {
    return (
        <div>
            {artists.map((artist, index) => {
                return (
                    <div className="col-md-4" key={index}>
                        <a href={artist.path} ><img src={artist.photo} className="artist-photo img-responsive"/></a>
                        <h3><a href={artist.path}>{artist.name}</a></h3>
                    </div>
                )
            })}
        </div>
    )
};

export default ArtistSummary;
