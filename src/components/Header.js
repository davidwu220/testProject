import React from 'react';
import PropTypes from "prop-types";

const Header = () => (
    <header className="Header page-header d-none d-sm-block pt-5 pb-3">
        <div className="float-left">
            <img className="singtao-logo" src="/images/page_icons/ST_logo.png" alt="Singtao Logo"/><br/>
            <img className="singtao-life" src="/images/page_icons/Singtao_Life.jpg" alt="Singtao life logo"/>
        </div>
        <img className="d-none d-md-block ad-posting-link float-right mt-3" src="/images/page_icons/ad_posting_icon.jpg" alt="Ad posting link"/>
        <div style={{clear: "both"}}></div>
    </header>
);

Header.propTypes = {
    headerMessage: PropTypes.string
}

export default Header;