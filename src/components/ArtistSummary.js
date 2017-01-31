import React from 'react'

const ArtistSummary = ({}) => {

    const data = [
        {
            name: 'Night Drive',
            photo: 'images/ND.jpg'
        },
        {
            name: 'MNYNMS',
            photo: 'images/MNYNMS.jpg'
        },
        {
            name: 'Night Drive',
            photo: 'images/ND.jpg'
        },
        {
            name: 'MNYNMS',
            photo: 'images/MNYNMS.jpg'
        },
        {
            name: 'Night Drive',
            photo: 'images/ND.jpg'
        },
        {
            name: 'MNYNMS',
            photo: 'images/MNYNMS.jpg'
        },
        {
            name: 'Night Drive',
            photo: 'images/ND.jpg'
        },
        {
            name: 'MNYNMS',
            photo: 'images/MNYNMS.jpg'
        },
        {
            name: 'Night Drive',
            photo: 'images/ND.jpg'
        },
        {
            name: 'MNYNMS',
            photo: 'images/MNYNMS.jpg'
        }
    ];

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
