import React from 'react';
import PropTypes from "prop-types";

const Header = ({message}) => (
    <div>
        <div className="Header container-fluid">
            <h2>{message}</h2>
            <h4>Fixed (sticky) navbar on scroll</h4>
            <p>Scroll this page to see how the navbar behaves with data-spy="affix".</p>
            <p>The navbar is attached to the top of the page after you have scrolled a specified amount of pixels.</p>
        </div>
    </div>
);

Header.propTypes = {
    headerMessage: PropTypes.string
}

export default Header;