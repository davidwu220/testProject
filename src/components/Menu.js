import React, { Component } from 'react';
import PropTypes from "prop-types";

class Menu extends Component {
    previousSelection = "";

    handleClick = (button) => {
        $(".menu-item").removeClass("is-active");
        this.props.setPicker(null);

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

        $(menuButton).addClass("active");
        if(this.previousSelection != "" && button != this.previousSelection) {
            $(this.previousSelection).removeClass("active");
        }
        this.previousSelection = menuButton;

        // let timeingOffset;
        // let marginOffset;
        
        if ( $(window).width() < 992) {
            $(".navbar-collapse").collapse('hide');
        //     timeingOffset = 1500;
        //     marginOffset = 70;
        // } else {
        //     timeingOffset = 800;
        //     marginOffset = 70;
        }
        // setTimeout(() => {
        //     $('html, body').animate({
        //         scrollTop: $(button).offset().top - marginOffset
        //     }, timeingOffset);
        // }, 300);
    }

    render() {
        return (
            <div className="Menu sticky-top">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">星島日報</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" id="home-btn" onClick={() => this.handleClick("body")}>星島廣告首頁 <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="classified-ad-btn" onClick={() => this.handleClick("#classified-ad")}>星島分類廣告</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="commercial-ad-btn" onClick={() => this.handleClick("#commercial-ad")}>星島商業廣告</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.singtaousa.com/la/" target="_blank">星島新聞首頁</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={this.props.onSearchChange}/>
                        <button className="btn btn-outline-success my-2 my-sm-0 d-none" type="submit" onSubmit={this.props.onSearch}>Search</button>
                    </form>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Menu;