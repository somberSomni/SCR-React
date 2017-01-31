import React from 'react';
import Nav from '../components/Nav';
import ArtistSummary from '../components/ArtistSummary';

class Artists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
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
            ]
        }
    }

    render() {
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
                    <ArtistSummary data={this.state.data}/>
                </div>
            </div>
        )
    }
}

export default Artists