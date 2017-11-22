import React from 'react';
import PropTypes from "prop-types";

const Header = () => (
    <header className="Header page-header d-none d-sm-block pt-md-3 pt-lg-5 pb-3 clearfix">
        <a className="float-left" href="/">
            <img id="singtao-logo" src="/images/page_icons/ST_logo.png" alt="Singtao Logo"/><br/>
            <img id="singtao-life" src="/images/page_icons/Singtao_Life.jpg" alt="Singtao life logo"/>
        </a>
        <img id="postAd" className="d-none d-lg-block ad-posting-link float-right" src="/images/page_icons/ad_posting_icon.jpg" alt="Ad posting link"/>

    </header>
);

Header.propTypes = {
    headerMessage: PropTypes.string
}

export default Header;