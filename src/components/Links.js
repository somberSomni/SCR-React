import React from 'react';

const Links = ({links}) => {
        if(links){

            const myLinks = links;

            const socialIcons = Object.keys(myLinks).map(function(key) {
                const btn = `btn btn-social-icon btn-${key}`;
                const fa = `fa fa-${key}`;

                    return (
                        <div>
                            <a className={btn} href={myLinks[key]}>
                                <span className={fa}> {key}</span>
                            </a>
                        </div>
                    )
                });

            return (
                <div>{socialIcons}</div>
            )
        }
        return <div>loading...</div>
};

export default Links;
