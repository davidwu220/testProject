import React from 'react';
import PropTypes from "prop-types";

const Menu = () => (
    <div className="Menu">
        <nav id="non-mob-menu" className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button 
                        type="button" 
                        className="navbar-toggle collapsed" 
                        data-toggle="collapse" 
                        data-target=".navbar-menubuilder">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse navbar-menubuilder">
                    <ul className="nav navbar-nav navbar-left">
                        <li><a href="/">Home</a>
                        </li>
                        <li><a href="/products">Products</a>
                        </li>
                        <li><a href="/about-us">About Us</a>
                        </li>
                        <li><a href="/contact">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
    </div>
);

export default Menu;