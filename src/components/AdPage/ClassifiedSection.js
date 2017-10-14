import React, { Component } from 'react';

import ClassifiedAd from './ClassifiedAd';
import ClassifiedMenu from './ClassifiedMenu';

class ClassifiedSection extends Component {
    // TODO: create chare button for each ad

    PrintList = () => {
        if (this.props.adList) {
            return (
                <div>
                    {this.props.adList.map((ad) => 
                        <ClassifiedAd key={ad.id} data={ad}/>
                    )}
                </div>
            );
            
        } else {
            return <div>
            </div>;
        }
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
                    onMenuClick={ this.props.onMenuClick }
                    classifiedAds={ this.props.classifiedAds }/>

                <this.PrintList />

            </div>
        );
    }
}

export default ClassifiedSection;