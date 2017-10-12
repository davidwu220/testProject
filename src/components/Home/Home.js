import React from 'react';

const Home = () => (
    <div className="Main" style={{width: 1 + "px"}}>
        <div id="classified-ad" style={{overflow:"hidden", marginBottom: 20 + "px"}}>
            <img src="./image/page_icons/classified_ad_bar.jpg" alt="Classified AD Menu Bar"/>
        </div>
        <div className="classified-ad-menu">
            <div className="media">
                <div className="media-left">
                    <img src="./image/page_icons/class1.png" alt="Classified AD Menu Icon"/>
                </div>
                <div className="media-body">
                    <span> // </span>
                    <span><a href="">公司</a> // </span>
                    <span><a href="">餐館</a> // </span>
                    <span><a href="">衣廠</a> // </span>
                    <span><a href="">管家保母托兒</a> // </span>
                </div>
            </div>
            <div className="media">
                <div className="media-left">
                    <img src="./image/page_icons/class2.png" alt="Classified AD Menu Icon"/>
                </div>
                <div className="media-body">
                    <span> // </span>
                    <span><a href="">住宅出租</a> // </span>
                    <span><a href="">住宅出售</a> // </span>
                </div>
            </div>
            <div className="media">
                <div className="media-left">
                    <img src="./image/page_icons/class3.png" alt="Classified AD Menu Icon"/>
                </div>
                <div className="media-body">
                    <span> // </span>
                    <span><a href="">商業招租</a> // </span>
                    <span><a href="">商業出讓</a> // </span>
                </div>
            </div>
            <div className="media">
                <div className="media-left">
                    <img src="./image/page_icons/class4.png" alt="Classified AD Menu Icon"/>
                </div>
                <div className="media-body">
                    <span> // </span>
                    <span><a href="">地產</a> // </span>
                    <span><a href="">貸款</a> // </span>
                    <span><a href="">保險</a> // </span>
                    <span><a href="">福地</a> // </span>
                </div>
            </div>
            <div className="media">
                <div className="media-left">
                    <img src="./image/page_icons/class5.png" alt="Classified AD Menu Icon"/>
                </div>
                <div className="media-body">
                    <span> // </span>
                    <span><a href="">水電</a> // </span>
                    <span><a href="">裝修油漆</a> // </span>
                    <span><a href="">清潔殺蟲</a> // </span>
                </div>
            </div>
            <div className="media">
                <div className="media-left">
                    <img src="./image/page_icons/class6.png" alt="Classified AD Menu Icon"/>
                </div>
                <div className="media-body">
                    <span> // </span>
                    <span><a href="">商業</a> // </span>
                    <span><a href="">法律</a> // </span>
                    <span><a href="">會計稅務</a> // </span>
                    <span><a href="">電腦監控</a> // </span>
                    <span><a href="">命相</a> // </span>
                </div>
            </div>
            <div className="media">
                <div className="media-left">
                    <img src="./image/page_icons/class7.png" alt="Classified AD Menu Icon"/>
                </div>
                <div className="media-body">
                    <span> // </span>
                    <span><a href="">按摩推拿</a> // </span>
                    <span><a href="">醫藥</a> // </span>
                    <span><a href="">美容</a> // </span>
                </div>
            </div>
            <div className="media">
                <div className="media-left">
                    <img src="./image/page_icons/class8.png" alt="Classified AD Menu Icon"/>
                </div>
                <div className="media-body">
                    <span> // </span>
                    <span><a href="">招生</a> // </span>
                </div>
            </div>
            <div className="media">
                <div className="media-left">
                    <img src="./image/page_icons/class9.png" alt="Classified AD Menu Icon"/>
                </div>
                <div className="media-body">
                    <span> // </span>
                    <span><a href="">二手車</a> // </span>
                    <span><a href="">專車接送</a> // </span>
                    <span><a href="">搬運</a> // </span>
                </div>
            </div>
            <div className="media">
                <div className="media-left">
                    <img src="./image/page_icons/class10.png" alt="Classified AD Menu Icon"/>
                </div>
                <div className="media-body">
                    <span> // </span>
                    <span><a href="">姻緣</a> // </span>
                    <span><a href="">尋人</a> // </span>
                    <span><a href="">遺失</a> // </span>
                    <span><a href="">啟事</a> // </span>
                </div>
            </div>
        </div>
        <div id="commercial-ad" style={{overflow:"hidden", marginBottom: 20 + "px", marginTop: 25 + "px"}}>
            <img src="./image/page_icons/commercial_ad_bar.jpg" alt="Commercial AD Menu Bar"/>
        </div>
        <div className="commercial-ad-menu ad-wrapper">
            <img className="commercial-ad-item" src="./image/page_icons/webIcon_realty.jpg" alt="Commercial AD Menu Bar"/>
            <img className="commercial-ad-item" src="./image/page_icons/webIcon_home.jpg" alt="Commercial AD Menu Bar"/>
            <img className="commercial-ad-item" src="./image/page_icons/webIcon_health.jpg" alt="Commercial AD Menu Bar"/>
            <img className="commercial-ad-item" src="./image/page_icons/webIcon_restaurant.jpg" alt="Commercial AD Menu Bar"/>
            <img className="commercial-ad-item" src="./image/page_icons/webIcon_auto.jpg" alt="Commercial AD Menu Bar"/>
            <img className="commercial-ad-item" src="./image/page_icons/webIcon_finance.jpg" alt="Commercial AD Menu Bar"/>
            <img className="commercial-ad-item" src="./image/page_icons/webIcon_legal.jpg" alt="Commercial AD Menu Bar"/>
            <img className="commercial-ad-item" src="./image/page_icons/webIcon_technology.png" alt="Commercial AD Menu Bar"/>
            <img className="commercial-ad-item" src="./image/page_icons/webIcon_travel.jpg" alt="Commercial AD Menu Bar"/>
            <img className="commercial-ad-item" src="./image/page_icons/webIcon_fashion.jpg" alt="Commercial AD Menu Bar"/>
            <img className="commercial-ad-item" src="./image/page_icons/webIcon_business.jpg" alt="Commercial AD Menu Bar"/>
            <img className="commercial-ad-item" src="./image/page_icons/webIcon_others.jpg" alt="Commercial AD Menu Bar"/>
        </div>
    </div>
);

export default Home;