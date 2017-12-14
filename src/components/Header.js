import React from 'react';
import PropTypes from "prop-types";

const Header = () => (
    <header className="Header page-header d-none d-sm-block pt-md-3 pt-lg-5 pb-3 clearfix">
        <a className="float-left" href="/">
            <img id="singtao-logo" src="/images/page_icons/ST_logo.png" alt="Singtao Logo"/><br/>
            <img id="singtao-life" src="/images/page_icons/Singtao_Life.jpg" alt="Singtao life logo"/>
        </a>
        <a href="http://classified.singtaola.com/advertising_info/%E5%88%86%E9%A1%9E%E5%BB%A3%E5%91%8A/?variant=zh-cn">
            <img id="postAd" className="d-none d-lg-block ad-posting-link float-right" src="/images/page_icons/ad_posting_icon.jpg" alt="Ad posting link"/>
        </a>
    </header>
);

Header.propTypes = {
    headerMessage: PropTypes.string
}

export default Header;