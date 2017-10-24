import React, { Component } from 'react';
import PropTypes from "prop-types";

class Menu extends Component {
    previousSelection = "";

    handleClick = (button) => {
        $(".menu-item").removeClass("is-active");

        let menuButton = "";
        
        if (button == "#classified-ad") {
            menuButton = button+"-btn";
            this.props.onClasMenuClick("");
        } else if (button == "#commercial-ad") {
            menuButton = button+"-btn";
            this.props.onComMenuClick("");
        } else {
            menuButton = "#home-btn";
            this.props.onHomeMenuClick("");
        }

        $(menuButton).addClass("is-active");
        if(this.previousSelection != "" && button != this.previousSelection) {
            $(this.previousSelection).removeClass("is-active");
        }
        this.previousSelection = menuButton;

        let timeingOffset;
        let marginOffset;
        
        if ( $(window).width() < 768) {
            $(".navbar-collapse").collapse('hide');
            timeingOffset = 1500;
            marginOffset = 65;
        } else {
            timeingOffset = 800;
            marginOffset = 50;
        }
        setTimeout(() => {
            $('html, body').animate({
                scrollTop: $(button).offset().top - marginOffset
            }, timeingOffset);
        }, 300);
    }

    render() {
        return (
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
                                <li><a id="home-btn" onClick={() => this.handleClick("body")}>星島廣告首頁</a>
                                </li>
                                <li><a id="classified-ad-btn" onClick={() => this.handleClick("#classified-ad")}>星島分類廣告</a>
                                </li>
                                <li><a id="commercial-ad-btn" onClick={() => this.handleClick("#commercial-ad")}>星島商業廣告</a>
                                </li>
                                <li><a href="https://www.singtaousa.com/la/" target="_blank">星島新聞首頁</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Menu;