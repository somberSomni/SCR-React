import React from 'react';

const Releases = ({releases}) => {

    const myReleases = releases;

    const releaseList = Object.keys(myReleases).map(function(key) {
        return (
            <div key={key}>
                <img src={myReleases[key]["art"]} className="img-responsive" />
                <button className="myButton">Buy</button>
                <hr />
            </div>
        )
    });

    return(
        <div>
            {releaseList}
        </div>
    )
};

Releases.defaultProps = {
    releases: {}
};

export default Releases;
