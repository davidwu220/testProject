import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ClassifiedSection from '../AdPage/ClassifiedSection';
import CommercialSection from '../AdPage/CommercialSection';

class Main extends Component {

    checkView = () => {
        if (this.props.viewState == "classifiedAds") {
            return (
                <div className="Main" style={{width: 1 + "px"}}>
                    <ClassifiedSection 
                        currentCat={this.props.currentCat}
                        clasCat={ this.props.clasCat }
                        catTitle={ this.props.catTitle }
                        viewState={ this.props.viewState }
                        onClasMenuClick={ this.props.onClasMenuClick }
                        adList={ this.props.adList }/>
                </div>
            );
        } else if (this.props.viewState == "commercialAds") {
            return (
                <div className="Main" style={{width: 1 + "px"}}>
                    <CommercialSection
                        viewState={ this.props.viewState } 
                        onComMenuClick={ this.props.onComMenuClick }
                        adList={ this.props.adList }/>
                </div>
            );
        } else {
            return (
                <div className="Main" style={{width: 1 + "px"}}>
                    <ClassifiedSection 
                        currentCat={this.props.currentCat}
                        clasCat={ this.props.clasCat }
                        catTitle={ this.props.catTitle }
                        viewState={ this.props.viewState }
                        onClasMenuClick={ this.props.onClasMenuClick }
                        adList={ this.props.adList }/>
                    <CommercialSection
                        viewState={ this.props.viewState } 
                        onComMenuClick={ this.props.onComMenuClick }
                        adList={ this.props.adList }/>
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