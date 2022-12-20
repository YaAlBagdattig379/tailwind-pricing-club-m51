
import React from 'react';

const Link = (props) => {
    const {name, link} = props.route;
    console.log(name,link)
    return (
            <li> 
                <a href={link}>{name}</a>
            </li>
    );
};

export default Link;