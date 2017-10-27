import React, { Component } from 'react';

import ClassifiedAd_card from './ClassifiedAd-card';
import ClassifiedAd_norm from './ClassifiedAd-norm';
import ClassifiedMenu from './ClassifiedMenu';

class ClassifiedSection extends Component {
    // TODO: create share button for each ad
    RenderList = () => {
        let list = null;

        if ($(window).width() < 992) {
            if (Array.isArray(this.props.adList)) {
                list = this.props.adList.map((ad) => 
                    <ClassifiedAd_card key={ad.id} data={ad} />
                );
            } else if (this.props.adList.hasOwnProperty("classifiedAds")) {
                list = this.props.adList.classifiedAds.map((ad) => 
                    <ClassifiedAd_card key={ad._id} data={ad} />
                );
            } else {
                list = <ClassifiedAd_card data={this.props.adList} />
            }
        } else {
            if (Array.isArray(this.props.adList)) {
                list = this.props.adList.map((ad) => 
                    <ClassifiedAd_norm key={ad.id} data={ad} />
                );
            } else if (this.props.adList.hasOwnProperty("classifiedAds")) {
                list = this.props.adList.classifiedAds.map((ad) => 
                    <ClassifiedAd_norm key={ad._id} data={ad} />
                );
            } else {
                list = <ClassifiedAd_norm data={this.props.adList} />
            }
        }

        
        return (
            <div className="adList">
                {list}
            </div>
        );
    }

    render() {
        return (
            <div>
                <div id="classified-ad" className="classified-ad-bar">
                    <img src="/images/page_icons/classified_ad_bar.jpg" alt="Classified AD Menu Bar"/>
                </div>
        
                <ClassifiedMenu 
                    setPicker={this.props.setPicker}
                    show300Picker={this.props.show300Picker}
                    show500Picker={this.props.show500Picker}
                    currentCat={this.props.currentCat}
                    clasCat={ this.props.clasCat }
                    catTitle={ this.props.catTitle }
                    onClasMenuClick={ this.props.onClasMenuClick } />

                <this.RenderList />
            </div>
        );
    }
}

export default ClassifiedSection;