import React from 'react';
import PropTypes from "prop-types";

const Menu = () => (
    <div className="Menu sticky">
        <nav id="non-mob-menu" className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-menubuilder">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse navbar-menubuilder">
                    <ul className="nav navbar-nav navbar-left">
                        <li><a href="/">星島廣告首頁</a>
                        </li>
                        <li><a href="/classifiedAds">星島分類廣告</a>
                        </li>
                        <li><a href="/commercialAds">星島商業廣告</a>
                        </li>
                        <li><a href="https://www.singtaousa.com/la/">星島新聞首頁</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
);

export default Menu;