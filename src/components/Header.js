import React from 'react';
import PropTypes from "prop-types";

const Header = () => (
    <header className="Header page-header hidden-xs">
        <h1>Sing Tao Daily icon here</h1>
        <h2>
            Fixed (sticky) navbar on scroll <br />
            <small>Scroll this page to see how the navbar behaves. The navbar is attached to the top of the page after you have scrolled a specified amount of pixels.</small>
        </h2>
        
    </header>
);

Header.propTypes = {
    headerMessage: PropTypes.string
}

export default Header;