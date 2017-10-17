import React, { Component } from 'react';

import ClassifiedAd from './ClassifiedAd';
import ClassifiedMenu from './ClassifiedMenu';

class ClassifiedSection extends Component {
    // TODO: create share button for each ad
    RenderList = () => {
        let list = null;

        console.log(this.props.adList);

        if (Array.isArray(this.props.adList)) {
            list = this.props.adList.map((ad) => 
                <ClassifiedAd key={ad.id} data={ad}/>
            );
        } else if (this.props.adList.hasOwnProperty("classifiedAds")) {
            list = this.props.adList.classifiedAds.map((ad) => 
            <ClassifiedAd key={ad.id} data={ad}/>
        );
        } else {
            list = <ClassifiedAd data={this.props.adList}/>
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
                <div id="classified-ad" style={{overflow:"hidden", marginBottom: 20 + "px"}}>
                    <img src="/images/page_icons/classified_ad_bar.jpg" alt="Classified AD Menu Bar"/>
                </div>
        
                <ClassifiedMenu 
                    clasCat={ this.props.clasCat }
                    catTitle={ this.props.catTitle }
                    onMenuClick={ this.props.onMenuClick } />


                <this.RenderList />
            </div>
        );
    }
}

export default ClassifiedSection;