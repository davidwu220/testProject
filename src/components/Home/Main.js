import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as api from '../../api';
import ClassifiedSection from '../AdPage/ClassifiedSection';
import CommercialSection from '../AdPage/CommercialSection';

const pushState = (obj, url) => 
    window.history.pushState(obj, '', url);

const onPopState = handler => {
    window.onpopstate = handler;
}

class Main extends Component {
    state = {
        adList: this.props.initialData,
        currentClass: "",
        view: window.initialView
    }

    componentDidMount() {
        // timers, listeners
        if (this.state.view == "classifiedAds") {
            console.log("CDM pushing state: currentClass:", this.state.currentClass, "view: classifiedAds", "adList", this.state.adList )
            pushState(
                {   currentClass: this.state.currentClass,
                    view: "classifiedAds",
                    adList: this.state.adList },
                `/classifiedAds/${this.state.currentClass}`
            );
        } else if (this.state.view == "commercialAds") {
            console.log("CDM pushing state: currentClass:", this.state.currentClass, "view: commercialAds", "adList", this.state.adList )
            pushState(
                {   currentClass: this.state.currentClass,
                    view: "commercialAds",
                    adList: this.state.adList },
                `/commercialAds/${this.state.currentClass}`
            );
        } else {
            console.log("CDM pushing state: currentClass:", this.state.currentClass, "view: home", "adList", this.state.adList )
            pushState(
                {   currentClass: this.state.currentClass,
                    view: "home",
                    adList: this.state.adList },
                `/`
            );
        }

        onPopState((event) => {
            console.log("onPopState event triggered");
            console.log("event.state || {} is:", event.state || {});
            this.setState({
                currentClass: event.state.currentClass,
                view: event.state.view,
                adList: (event.state || {}).adList
            });
        });
    }

    fetchClasAds = (adClass) => {
        
        api.fetchClasAdByClass(adClass)
            .then(adsInClass => {
                this.setState({
                    view: "classifiedAds",
                    currentClass: adClass,
                    adList: adsInClass
                });
                console.log("pushing state: currentClass:", adClass, "view: classifiedAds", "adList", this.state.adList )
                pushState(
                    {   currentClass: adClass,
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
                    currentClass: adClass,
                    adList: adsInClass
                });
                pushState(
                    {   currentClass: adClass,
                        view: "commercialAds",
                        adList: this.state.adList },
                    `/commercialAds/${adClass}`
                );
            });
    }

    checkView = () => {
        if (this.state.view == "classifiedAds") {
            return (
                <div className="Main" style={{width: 1 + "px"}}>
                    <ClassifiedSection 
                        clasCat={ this.props.clasCat }
                        catTitle={ this.props.catTitle }
                        viewState={ this.state.view }
                        onMenuClick={ this.fetchClasAds }
                        adList={ this.state.adList }/>
                </div>
            );
        } else if (this.state.view == "commercialAds") {
            return (
                <div className="Main" style={{width: 1 + "px"}}>
                    <CommercialSection
                        viewState={ this.props.view } 
                        onMenuClick={ this.fetchComAds }
                        adList={ this.state.adList }/>
                </div>
            );
        } else {
            return (
                <div className="Main" style={{width: 1 + "px"}}>
                    <ClassifiedSection 
                        clasCat={ this.props.clasCat }
                        catTitle={ this.props.catTitle }
                        viewState={ this.state.view }
                        onMenuClick={ this.fetchClasAds }
                        adList={ this.state.adList }/>
                    <CommercialSection
                        viewState={ this.props.view } 
                        onMenuClick={ this.fetchComAds }
                        adList={ this.state.adList }/>
                </div>
            );
        }
    }

    
    render() {
        return (
            <this.checkView />
        );
    }
}

Main.propTypes = {

};

export default Main;