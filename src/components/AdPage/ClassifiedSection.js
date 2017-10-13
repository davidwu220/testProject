import React from 'react';

import ClassifiedMenu from '../AdPage/ClassifiedMenu';

const ClassifiedSection = (props) => {
    return (
        <div>
            <div id="classified-ad" style={{overflow:"hidden", marginBottom: 20 + "px"}}>
                <img src="/images/page_icons/classified_ad_bar.jpg" alt="Classified AD Menu Bar"/>
            </div>
    
            <ClassifiedMenu onMenuClick={ props.onMenuClick } classifiedAds={ props.classifiedAds }/>
        </div>
    );
};

export default ClassifiedSection;