import React from 'react';

const Links = ({artists}) => {
    return (
        <div>
            <ul id="social">
                <li>
                    <a className="btn btn-social-icon btn-facebook">
                        <i className="fa fa-facebook"><a href={artists.facebook}> Facebook</a></i>
                    </a>
                </li>

                <li>
                    <a className="btn btn-social-icon btn-twitter">
                        <i className="fa fa-twitter"><a href={artists.twitter}> Twitter</a></i>
                    </a>
                </li>

                <li>
                    <a className="btn btn-social-icon btn-soundcloud">
                        <i className="fa fa-soundcloud"><a href={artists.soundcloud}> Soundcloud</a></i>
                    </a>
                </li>
            </ul>
        </div>
    )
};

export default Links;
