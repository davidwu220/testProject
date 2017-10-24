import React from 'react';
import PropTypes from "prop-types";

const Header = () => (
    <header className="Header page-header hidden-xs">
        <div>
            <img className="singtao-logo" src="/images/page_icons/ST_logo.png" alt="Singtao Logo"/>
            <img className="ad-posting-link" src="/images/page_icons/ad_posting_icon.jpg" alt="Ad posting link"/>
        </div>
        <div><img className="singtao-life" src="/images/page_icons/Singtao_Life.jpg" alt="Singtao life logo"/></div>
        
    </header>
);

Header.propTypes = {
    headerMessage: PropTypes.string
}

export default Header;