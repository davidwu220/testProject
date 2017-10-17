import React, { Component } from 'react';
import PropTypes from "prop-types";

class Menu extends Component {
    handleClick = (button) => {
        if (button == "#classified-ad") {
            this.props.onClasMenuClick("");
        } else if (button == "#commercial-ad") {
            this.props.onComMenuClick("");
        } else {
            this.props.onHomeMenuClick("");
        }
        setTimeout(() => {
            $('html, body').animate({
                scrollTop: $(button).offset().top - 65
            }, 800);
        }, 100);
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
                                <li><a onClick={() => this.handleClick("body")}>星島廣告首頁</a>
                                </li>
                                <li><a onClick={() => this.handleClick("#classified-ad")}>星島分類廣告</a>
                                </li>
                                <li><a onClick={() => this.handleClick("#commercial-ad")}>星島商業廣告</a>
                                </li>
                                <li><a href="https://www.singtaousa.com/la/">星島新聞首頁</a>
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

// const Menu = (props) => (
//     <div className="Menu sticky">
//         <nav id="non-mob-menu" className="navbar navbar-default">
//             <div className="container-fluid">
//                 <div className="navbar-header">
//                     <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-menubuilder">
//                         <span className="sr-only">Toggle navigation</span>
//                         <span className="icon-bar"></span>
//                         <span className="icon-bar"></span>
//                         <span className="icon-bar"></span>
//                     </button>
//                 </div>
//                 <div className="collapse navbar-collapse navbar-menubuilder">
//                     <ul className="nav navbar-nav navbar-left">
//                         <li><a onClick={() => props.onHomeMenuClick("")}>星島廣告首頁</a>
//                         </li>
//                         <li><a onClick={() => props.onClasMenuClick("")}>星島分類廣告</a>
//                         </li>
//                         <li><a onClick={() => props.onComMenuClick("")}>星島商業廣告</a>
//                         </li>
//                         <li><a href="https://www.singtaousa.com/la/">星島新聞首頁</a>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     </div>
// );

// export default Menu;