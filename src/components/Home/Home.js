import React from 'react';

import ClassifiedMenu from '../AdPage/ClassifiedMenu';

const Home = (props) => (
    <div className="Main" style={{width: 1 + "px"}}>
        <div id="classified-ad" style={{overflow:"hidden", marginBottom: 20 + "px"}}>
            <img src="./images/page_icons/classified_ad_bar.jpg" alt="Classified AD Menu Bar"/>
        </div>

        <ClassifiedMenu classifiedAds={ props.classifiedAds }/>
        
        <div id="commercial-ad" style={{overflow:"hidden", marginBottom: 20 + "px", marginTop: 25 + "px"}}>
            <img src="./images/page_icons/commercial_ad_bar.jpg" alt="Commercial AD Menu Bar"/>
        </div>
        <div className="commercial-ad-menu ad-wrapper">
            <img className="commercial-ad-item" src="./images/page_icons/webIcon_realty.jpg" alt="Commercial AD Menu Bar"/>
            <img className="commercial-ad-item" src="./images/page_icons/webIcon_home.jpg" alt="Commercial AD Menu Bar"/>
            <img className="commercial-ad-item" src="./images/page_icons/webIcon_health.jpg" alt="Commercial AD Menu Bar"/>
            <img className="commercial-ad-item" src="./images/page_icons/webIcon_restaurant.jpg" alt="Commercial AD Menu Bar"/>
            <img className="commercial-ad-item" src="./images/page_icons/webIcon_auto.jpg" alt="Commercial AD Menu Bar"/>
            <img className="commercial-ad-item" src="./images/page_icons/webIcon_finance.jpg" alt="Commercial AD Menu Bar"/>
            <img className="commercial-ad-item" src="./images/page_icons/webIcon_legal.jpg" alt="Commercial AD Menu Bar"/>
            <img className="commercial-ad-item" src="./images/page_icons/webIcon_technology.png" alt="Commercial AD Menu Bar"/>
            <img className="commercial-ad-item" src="./images/page_icons/webIcon_travel.jpg" alt="Commercial AD Menu Bar"/>
            <img className="commercial-ad-item" src="./images/page_icons/webIcon_fashion.jpg" alt="Commercial AD Menu Bar"/>
            <img className="commercial-ad-item" src="./images/page_icons/webIcon_business.jpg" alt="Commercial AD Menu Bar"/>
            <img className="commercial-ad-item" src="./images/page_icons/webIcon_others.jpg" alt="Commercial AD Menu Bar"/>
        </div>
    </div>
);

export default Home;