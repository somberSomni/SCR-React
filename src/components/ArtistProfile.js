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
            artists: [],
            feature: ""
        }
    }

    componentDidMount() {
        Axios.get("http://localhost:3000/data.json")
            .then((result) => {
                const len = Object.keys(result).length - 2;
                for (let i = 0; i < len; i++) {
                    if (this.props.params.username === result.data.artists[i].id) {
                        this.setState({
                            artists: result.data.artists[i],
                            feature: result.data.artists[i].feature
                        });
                    }
                }
            });
    }

    render() {

        SC.initialize({
            client_id: 'qar87rq7vEGGfgjM0PqrmTBUYhSzUcQ5'
        });

        SC.oEmbed(this.state.feature, {
            element: document.getElementById('widget')
        });


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
                        <h2>ABOUT</h2>
                        <hr />

                        <div id="widget"></div>
                        <br />
                        <About artists={this.state.artists}/>

                    </div>

                    <div className="col-md-3">
                        <h2>RELEASES</h2>
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
}

ArtistProfile.defaultProps = {
    artists: [],
    feature: ""
};

export default ArtistProfile
