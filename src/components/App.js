import React, { Component } from 'react';

import * as api from '../api';
import Footer from "./Footer"
import Header from "./Header";
import Home from "./Home/Home";
import RightSide from './RightSide';
import Menu from './Menu';
import ClassifiedList from './AdPage/ClassifiedList';
import ClassifiedMenu from './AdPage/ClassifiedMenu';

const pushState = (obj, url) => 
    window.history.pushState(obj, '', url);

class App extends Component {
    state = { 
        pageHeader: "Sing Tao Daily icon here",
        classifiedAds: this.props.initialData,
        view: "home",
        currentClass: "",
        adsInClass: []
    };

    componentDidMount() {
        // timers, listeners
    }

    componentWillUnmount() {
        // clean timers, listeners
    }

    fetchAds = (adClass) => {
        pushState(
            { currentClass: adClass },
            `/classifiedAds/${adClass}`
        );

        api.fetchClasAdByClass(adClass)
            .then(adsInClass => {
                this.setState({
                    pageHeader: adsInClass[0].className,
                    view: "classified",
                    currentClass: adClass,
                    adList: adsInClass
                });
            });
    }

    render() {
        return (
            <div className="App wrapper">
                <Header message={ this.state.pageHeader } />
                <Menu />
                <Home 
                    view={ this.state.view }
                    onMenuClick={ this.fetchAds }
                    classifiedAds={ this.state.classifiedAds }
                    adList={ this.state.adList }
                />
                <RightSide />
                <Footer />
            </div>
        );
    }
};

// App.defaultProps = {
//     headerMessage: 'Default message here!'
// }

export default App;