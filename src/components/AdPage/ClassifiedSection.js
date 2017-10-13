import React, { Component } from 'react';

import ClassifiedMenu from '../AdPage/ClassifiedMenu';

class ClassifiedSection extends Component {
    // TODO: create chare button for each ad

    PrintList = () => {
        if (this.props.adList) {
            for (let ad of this.props.adList) {
                console.log(ad.id);
                return (<div>{ad.id}</div>);
            }
            
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
        
                <ClassifiedMenu onMenuClick={ this.props.onMenuClick } classifiedAds={ this.props.classifiedAds }/>

                    <this.PrintList />

            </div>
        );
    }
}

export default ClassifiedSection;