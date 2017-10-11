import React, { Component } from 'react';

import Header from "./Header";
import Home from "./Home/Home";
import RightSide from './RightSide';
import Menu from './Menu';

class App extends Component {
    state = { 
        pageHeader: "Sing Tao Daily icon here"
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
                <Home />
                <RightSide />
            </div>
        );
    }
};

// App.defaultProps = {
//     headerMessage: 'Default message here!'
// }

export default App;