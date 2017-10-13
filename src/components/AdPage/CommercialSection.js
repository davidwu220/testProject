import React from 'react';

import CommercialMenu from '../AdPage/CommercialMenu';

const CommercialSection = () => {
    return (
        <div>
            <div id="commercial-ad" style={{overflow:"hidden", marginBottom: 20 + "px", marginTop: 25 + "px"}}>
                <img src="/images/page_icons/commercial_ad_bar.jpg" alt="Commercial AD Menu Bar"/>
            </div>
    
            <CommercialMenu />
        </div>
    );
};

export default CommercialSection;