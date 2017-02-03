import React from 'react'

const ArtistSummary = ({data}) => {
    return (
        <div>
            {data.map((artist, index) => {
                return (
                    <div className="col-md-4">
                        <a href={artist.path}><img src={artist.photo} className="artist-photo"/></a>
                        <h3><a href={artist.path}>{artist.name}</a></h3>
                    </div>
                )
            })}
        </div>
    )
};

export default ArtistSummary;
