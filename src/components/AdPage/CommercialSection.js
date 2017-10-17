import React from 'react';

import CommercialMenu from '../AdPage/CommercialMenu';

const CommercialSection = () => {
    return (
        <div>
            <div id="commercial-ad" className="commercial-ad-bar">
                <img src="/images/page_icons/commercial_ad_bar.jpg" alt="Commercial AD Menu Bar"/>
            </div>
    
            <CommercialMenu />
        </div>
    );
};

export default CommercialSection;