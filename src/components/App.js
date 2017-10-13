import React, { Component } from 'react';

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
        currentClass: ""
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
        this.setState({
            pageHeader: adClass,
            view: "classified",
            currentClass: adClass
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