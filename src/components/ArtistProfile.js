import React from 'react';
import Nav from '../components/Nav';
import Axios from 'axios';

class ArtistProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            artists: []
        }
    }

    componentDidMount() {
        Axios.get("http://localhost:3000/data.json")
            .then((result) => {
                const len = Object.keys(result).length;
                for (var i = 0; i < len; i++) {
                    if (this.props.params.username === result.data.artists[i].id) {
                        this.setState({
                            artists: result.data.artists[i]
                        });
                    }
                }
            })
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
                    <img src={this.state.artists.header} alt=""/>
                    <div className="col-md-9">
                        <h2>About</h2>
                        <div className="well">
                            {this.state.artists.name}
                        </div>
                    </div>

                    <div className="col-md-3">
                        <h2>Product</h2>
                        <div className="well">
                            Product Component
                        </div>
                        <br />
                        <h2>Links</h2>
                        <div className="well">
                            Links Component
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
;

export default ArtistProfile
