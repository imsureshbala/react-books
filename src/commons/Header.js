import React from 'react';

const Header = (props) =>{
    return (
        <header className="container-fluide text-center p-4 bg-dark text-light">
            <h2>{props.title}</h2>
        </header>
    );
};

export default Header;