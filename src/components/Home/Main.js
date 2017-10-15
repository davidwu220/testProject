import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as api from '../../api';
import ClassifiedSection from '../AdPage/ClassifiedSection';
import CommercialSection from '../AdPage/CommercialSection';

const pushState = (obj, url) => 
window.history.pushState(obj, '', url);

class Main extends Component {
    state = {
        adList: this.props.initialData,
        currentClass: "",
        view: window.initialView
    }

    fetchClasAds = (adClass) => {
        pushState(
            { currentClass: adClass },
            `/classifiedAds/${adClass}`
        );

        api.fetchClasAdByClass(adClass)
            .then(adsInClass => {
                this.setState({
                    view: "classifiedAds",
                    currentClass: adClass,
                    adList: adsInClass
                });
            });
    }

    fetchComAds = (adClass) => {
        pushState(
            { currentClass: adClass },
            `/commercialAds/${adClass}`
        );

        api.fetchClasAdByClass(adClass)
            .then(adsInClass => {
                this.setState({
                    view: "commercialAds",
                    currentClass: adClass,
                    adList: adsInClass
                });
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