import React, { Component } from 'react';

import * as api from '../api';
import Footer from "./Footer"
import Header from "./Header";
import RightSide from './RightSide';
import Main from "./Home/Main";
import Menu from './Menu';

class App extends Component {
    state = { 
        clasCat: [],
        catTitle: []
    };

    componentDidMount() {
        // timers, listeners
        
        // update classified menu at 5 am
        api.fetchClasMenu()
            .then(({ clasCat, catTitle }) => {
                this.setState({
                    clasCat,
                    catTitle
                });
            });
    }

    componentWillUnmount() {
        // clean timers, listeners
    }

    render() {
        return (
            <div className="App wrapper">
                <Header />
                <Menu />
                <Main clasCat={this.state.clasCat}
                    catTitle={this.state.catTitle}
                    initialData={this.props.initialData} />
                <RightSide />
                <Footer />
            </div>
        );
    }
};

export default App;