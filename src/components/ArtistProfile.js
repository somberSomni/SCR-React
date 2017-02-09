import React from 'react';
import Nav from '../components/Nav';
import Axios from 'axios';
import About from '../components/About';
import Links from '../components/Links';
import Releases from '../components/Releases';
import SC from 'soundcloud';

class ArtistProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clientId: 'qar87rq7vEGGfgjM0PqrmTBUYhSzUcQ5',
            artists: [],
            stream: ''
        }
    }

    componentDidMount() {
        Axios.get("http://localhost:3000/data.json")
            .then((result) => {
                const len = Object.keys(result).length - 2;
                for (var i = 0; i < len; i++) {
                    if (this.props.params.username === result.data.artists[i].id) {
                        this.setState({
                            artists: result.data.artists[i]
                        });
                    }
                }
            });

        SC.initialize({
            client_id: this.state.clientId
        });

        SC.get('/tracks/293434916')
            .then((track) => {
                console.log(track);
                this.setState({
                    stream: track.stream_url
                });
            });
    }

    render() {
        return (
            <div className="main-container">
                <br />
                <div className="container">
                    <Nav />
                </div>

                <div className="container">
                    <h1 className="page-header">{this.state.artists.name}</h1>
                    <img src={this.state.artists.header} className="img-responsive"/>
                    <div className="col-md-9">
                        <h2>About</h2>
                        <div className="well">
                            <About artists={this.state.artists}/>
                            <audio controls src={`${this.state.stream}?client_id=${this.state.clientId}`} />
                        </div>
                    </div>

                    <div className="col-md-3">

                        <h2>Product</h2>
                        <hr />
                        <Releases releases={this.state.artists.releases}/>


                        <h2>Links</h2>
                        <hr />
                        <Links links={this.state.artists.links} />

                    </div>
                </div>
            </div>
        )
    }
};

export default ArtistProfile
