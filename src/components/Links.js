import React from 'react';

const Links = ({links}) => {
        if(links){
            return (
                <div>
                    <a className="btn btn-social-icon btn-facebook">
                        <span className="fa fa-facebook"><a href={links.facebook} /></span> Facebook
                    </a><br />
                    <a className="btn btn-social-icon btn-twitter">
                        <span className="fa fa-twitter"><a href={links.twitter} /></span> Twitter
                    </a><br />
                    <a className="btn btn-social-icon btn-facebook">
                        <span className="fa fa-soundcloud"><a href={links.soundcloud} /></span> Soundcloud
                    </a>
                </div>
            )
        }
        return <div>loading...</div>
};

export default Links;
