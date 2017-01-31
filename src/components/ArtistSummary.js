import React from 'react'

const ArtistSummary = ({data}) => {
    return (
        <div>
            {data.map((artist, index) => {
                return (
                    <div className="col-md-4">
                        <img src={artist.photo} className="artist-photo"/>
                        <h3>{artist.name}</h3>
                    </div>
                )
            })}
        </div>

    )
};

export default ArtistSummary;
