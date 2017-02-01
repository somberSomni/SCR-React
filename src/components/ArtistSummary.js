import React from 'react'

const ArtistSummary = ({}) => {

    const data = [
        {
            name: 'Night Drive',
            path: 'http://localhost:3000/#/?_k=dzkgj6/artists/Night-Drive',
            photo: 'images/artist-summary.jpg'
        },
        {
            name: 'MNYNMS',
            path: 'http://localhost:3000/#/?_k=dzkgj6/artists/MNYNMS',
            photo: 'images/artist-summary.jpg'
        },
        {
            name: 'NIGHT DRIVE',
            path: 'http://localhost:3000/#/?_k=dzkgj6/artists/Night-Drive',
            photo: 'images/artist-summary.jpg'
        }
    ];

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
