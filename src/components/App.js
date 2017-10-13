import React, { Component } from 'react';

import Footer from "./Footer"
import Header from "./Header";
import Home from "./Home/Home";
import RightSide from './RightSide';
import Menu from './Menu';
import ClassifiedList from './AdPage/ClassifiedList';
import ClassifiedMenu from './AdPage/ClassifiedMenu';

class App extends Component {
    state = { 
        pageHeader: "Sing Tao Daily icon here",
        classifiedAds: this.props.initialData
    };

    componentDidMount() {
        // timers, listeners
    }

    componentWillUnmount() {
        // clean timers, listeners
    }

    render() {
        return (
            <div className="App wrapper">
                <Header message={ this.state.pageHeader } />
                <Menu />
                <ClassifiedList classifiedAds={ this.state.classifiedAds } />
                <Home classifiedAds={ this.state.classifiedAds }/>
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