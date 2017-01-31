import React from 'react';

const FeatureRelease = () => {
    return (
        <div className="row">
            <div className="col-md-8">
                <img className="img-responsive img-rounded" src="images/rf.jpg" alt=""></img>
            </div>
            <div className="col-md-4">
                <h1>LATEST RELEASE</h1>
                <p className="feature-text">Night Drive's first single from their upcoming self-titled album, out
                    Mid-2017. True to the Night Drive ethos, the song boasts exactly the kind of glossy, echoed
                    Interpol and Lower Dens vibes that are ideal to put on while rocketing down the interstate at 90mph
                    in
                    the dead of night.</p>

                <audio controls preload="none">
                    <source src="audio/Night%20Drive%20-%20Rise%20and%20Fall.wav" type="audio/wav"></source>
                </audio>
                <br />
                <br />
                <a className="btn btn-primary btn-md btn-spotify"
                   href="https://open.spotify.com/track/5hl22gaWiQVhI6rYFmfJvq">Spotify</a>

                <a className="btn btn-primary btn-md btn-artist" href="http://www.nightdrivemusic.com/">Night Drive</a>

                <a className="btn btn-primary btn-md btn-buy" href="#">Buy</a>
            </div>
        </div>
    )
};

export default FeatureRelease;


