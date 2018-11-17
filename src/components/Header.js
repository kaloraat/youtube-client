import React from "react";

const Header = ({ children }) => {
    return (
        <div className="jumbotron">
            <h1 className="display-2">Search youtube videos</h1>
            <p className="lead">A youtube client built with React JS</p>
            {children}
        </div>
    );
};

export default Header;
