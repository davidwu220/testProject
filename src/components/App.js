import React, { Component } from 'react';

import * as api from '../api';
import Footer from "./Footer"
import Header from "./Header";
import RightSide from './RightSide';
import Main from "./Home/Main";
import Menu from './Menu';

const pushState = (obj, url) => 
window.history.pushState(obj, '', url);

const onPopState = handler => {
window.onpopstate = handler;
}

class App extends Component {
    state = { 
        clasCat: [],
        catTitle: [],
        adList: this.props.initialData,
        category: window.initialCat || "",
        view: window.initialView
    };

    componentDidMount() {
        // timers, listeners

        // update classified menu at 5 am
        // !!!!remember to unmount timer!!!!
        api.fetchClasMenu()
        .then(({ clasCat, catTitle }) => {
            this.setState({
                clasCat,
                catTitle
            });
        });

        // push initial state when landing
        if (this.state.view == "classifiedAds") {
            pushState(
                {   category: this.state.category,
                    view: "classifiedAds",
                    adList: this.state.adList },
                `/classifiedAds/${this.state.category}`
            );
        } else if (this.state.view == "commercialAds") {
            pushState(
                {   category: this.state.category,
                    view: "commercialAds",
                    adList: this.state.adList },
                `/commercialAds/${this.state.category}`
            );
        } else {
            pushState(
                {   category: this.state.category,
                    view: "home",
                    adList: this.state.adList },
                `/`
            );
        }

        // handle browser back/forward buttons
        onPopState((event) => {
            this.setState({
                category: event.state.category,
                view: event.state.view,
                adList: (event.state || {}).adList
            });
        });
    }

    componentWillUnmount() {
        // unmount handler
        onPopState(null);

        // !!!!remember to unmount timer!!!!
    }

    fetchHome = () => {
        
        this.setState({
            view: "home",
            category: "",
            adList: []
        });
        console.log("pushing state: category:", this.state.category, "view: home", "adList", this.state.adList )
        pushState(
            {   category: this.state.category,
                view: "home",
                adList: [] },
            `/`
        );

    }

    fetchClasAds = (adClass) => {
        
        api.fetchClasAdByClass(adClass)
            .then(adsInClass => {
                this.setState({
                    view: "classifiedAds",
                    category: adClass,
                    adList: adsInClass
                });
                console.log("pushing state: category:", adClass, "view: classifiedAds", "adList", this.state.adList )
                pushState(
                    {   category: adClass,
                        view: "classifiedAds",
                        adList: this.state.adList },
                    `/classifiedAds/${adClass}`
                );
            });
    }

    fetchComAds = (adClass) => {
        api.fetchComAdByClass(adClass)
            .then(adsInClass => {
                this.setState({
                    view: "commercialAds",
                    category: adClass,
                    adList: adsInClass
                });
                pushState(
                    {   category: adClass,
                        view: "commercialAds",
                        adList: this.state.adList },
                    `/commercialAds/${adClass}`
                );
            });
    }

    render() {
        return (
            <div className="App wrapper">
                <Header />
                <Menu
                    onHomeMenuClick={this.fetchHome}
                    onClasMenuClick={this.fetchClasAds}
                    onComMenuClick={this.fetchComAds} />
                <Main 
                    clasCat={this.state.clasCat}
                    catTitle={this.state.catTitle}
                    initialData={this.props.initialData}
                    viewState={this.state.view}
                    onClasMenuClick={this.fetchClasAds}
                    onComMenuClick={this.fetchComAds}
                    adList={this.state.adList} />
                <RightSide />
                <Footer />
            </div>
        );
    }
};

export default App;