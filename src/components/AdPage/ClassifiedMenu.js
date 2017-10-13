import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClassifiedMenu extends Component {
    constructor(props) {
        super(props);
        
        this.tempCatList = [];
        this.categories = [];
        this.catTitle = [];

        // put all categories in temp
        props.classifiedAds.map(classifiedAd => {

            this.tempCatList.push(classifiedAd.class);
        });

        // trim duplicate categories
        for (let uniqCat of this.tempCatList) {
            if (this.categories.includes(uniqCat) == false) {
                // WIll do this when importing the data
                // if (uniqCat == "103" || uniqCat == "104") {
                //     uniqCat = "103_104";
                // } else if (uniqCat == "802" || uniqCat == "803") {
                //     uniqCat = "802_803";
                // }
                switch (uniqCat) {
                    case "101": case "106": case "103_104": case "105":
                        this.catTitle.push(1);
                        break;

                    case "300": case "500":
                        this.catTitle.push(2);
                        break;

                    case "200": case "700":
                        this.catTitle.push(3);
                        break;

                    case "400": case "600": case "818": case "801":
                        this.catTitle.push(4);
                        break;

                    case "804": case "805": case "802_803":
                        this.catTitle.push(5);
                        break;

                    case "810": case "808": case "816": case "809": case "814":
                        this.catTitle.push(6);
                        break;

                    case "813": case "812": case "817": case "815":
                        this.catTitle.push(7);
                        break;

                    case "811":
                        this.catTitle.push(8);
                        break;

                    case "900": case "807": case "806":
                        this.catTitle.push(9);
                        break;

                    case "1000": case "1201": case "1200": case "1300":
                        this.catTitle.push(10);
                        break;
                
                    default:
                        console.error("Class not matched when creating Menu, class: " + uniqCat);
                        break;
                }

                this.categories.push(uniqCat);
            }
        }

        this.findAdsByClass = function(ad) {
            return ad.class === this;
        }

        this.handleClick = (cls) => {
            // need to search for specific content
            if (cls == "103_104") {
                //return 103 and 104 ads
                props.onMenuClick(cls);
                console.log(props.classifiedAds.filter(this.findAdsByClass, cls));

            } else if (cls == "802_803") {
                // return 802 and 803 ads

            } else {
                // just search for class match
                props.onMenuClick(cls);
                console.log(props.classifiedAds.filter(this.findAdsByClass, cls));
            }

        }
    }

    render() {
        return (
            <div className="classified-ad-menu">
                {this.catTitle.includes(1) && <div className="media">
                    <div className="media-left">
                        <img src="/images/page_icons/class1.png" alt="Classified AD Menu Icon"/>
                    </div>
                    <div className="media-body">
                        <span> // </span>
                        {this.categories.includes("101") &&
                            <span className="menu-item" onClick={() => this.handleClick("101")}>公司  // </span>}
                        {this.categories.includes("106") &&
                        <span className="menu-item" onClick={this.handleClick}>餐館  // </span>}
                        {this.categories.includes("103_104") &&
                        <span className="menu-item" onClick={() => this.handleClick("103_104")}>管家保母托兒  // </span>}
                        {this.categories.includes("105") &&
                        <span className="menu-item" onClick={this.handleClick}>衣廠  // </span>}
                    </div>
                </div>}
                {this.catTitle.includes(2) && <div className="media">
                    <div className="media-left">
                        <img src="/images/page_icons/class2.png" alt="Classified AD Menu Icon"/>
                    </div>
                    <div className="media-body">
                        <span> // </span>
                        {this.categories.includes("300") &&
                            <span className="menu-item" onClick={() => this.handleClick("300")}>住宅出租  // </span>}
                        {this.categories.includes("500") &&
                            <span className="menu-item" onClick={() => this.handleClick("500")}>住宅出售  // </span>}
                    </div>
                </div>}
                {this.catTitle.includes(3) && <div className="media">
                    <div className="media-left">
                        <img src="/images/page_icons/class3.png" alt="Classified AD Menu Icon"/>
                    </div>
                    <div className="media-body">
                        <span> // </span>
                        {this.categories.includes("200") &&
                            <span className="menu-item" onClick={this.handleClick}>商業招租  // </span>}
                        {this.categories.includes("700") &&
                            <span className="menu-item" onClick={this.handleClick}>商業出讓 // </span>}
                    </div>
                </div>}
                {this.catTitle.includes(4) && <div className="media">
                    <div className="media-left">
                        <img src="/images/page_icons/class4.png" alt="Classified AD Menu Icon"/>
                    </div>
                    <div className="media-body">
                        <span> // </span>
                        {this.categories.includes("400") &&
                        <span className="menu-item" onClick={this.handleClick}>地產  // </span>}
                        {this.categories.includes("600") &&
                        <span className="menu-item" onClick={this.handleClick}>貸款  // </span>}
                        {this.categories.includes("818") &&
                        <span className="menu-item" onClick={this.handleClick}>保險  // </span>}
                        {this.categories.includes("801") &&
                        <span className="menu-item" onClick={this.handleClick}>福地  // </span>}
                    </div>
                </div>}
                {this.catTitle.includes(5) && <div className="media">
                    <div className="media-left">
                        <img src="/images/page_icons/class5.png" alt="Classified AD Menu Icon"/>
                    </div>
                    <div className="media-body">
                        <span> // </span>
                        {this.categories.includes("804") &&
                            <span className="menu-item" onClick={this.handleClick}>水電  // </span>}
                        {this.categories.includes("805") &&
                            <span className="menu-item" onClick={this.handleClick}>裝修油漆  // </span>}
                        {this.categories.includes("802_803") &&
                            <span className="menu-item" onClick={this.handleClick}>清潔殺蟲  // </span>}
                    </div>
                </div>}
               {this.catTitle.includes(6) && <div className="media">
                    <div className="media-left">
                        <img src="/images/page_icons/class6.png" alt="Classified AD Menu Icon"/>
                    </div>
                    <div className="media-body">
                        <span> // </span>
                        {this.categories.includes("810") &&
                            <span className="menu-item" onClick={this.handleClick}>商業  // </span>}
                        {this.categories.includes("808") &&
                            <span className="menu-item" onClick={this.handleClick}>法律  // </span>}
                        {this.categories.includes("816") &&
                            <span className="menu-item" onClick={this.handleClick}>會計稅務  // </span>}
                        {this.categories.includes("809") &&
                            <span className="menu-item" onClick={this.handleClick}>電腦監控  // </span>}
                        {this.categories.includes("814") &&
                            <span className="menu-item" onClick={this.handleClick}>命相  // </span>}
                    </div>
                </div>}
                {this.catTitle.includes(7) && <div className="media">
                    <div className="media-left">
                        <img src="/images/page_icons/class7.png" alt="Classified AD Menu Icon"/>
                    </div>
                    <div className="media-body">
                        <span> // </span>
                        {this.categories.includes("813") &&
                            <span className="menu-item" onClick={this.handleClick}>按摩推拿  // </span>}
                        {this.categories.includes("812") &&
                            <span className="menu-item" onClick={this.handleClick}>醫藥  // </span>}
                        {this.categories.includes("817") &&
                            <span className="menu-item" onClick={this.handleClick}>醫生  // </span>}
                        {this.categories.includes("815") &&
                            <span className="menu-item" onClick={this.handleClick}>美容  // </span>}
                    </div>
                </div>}
                {this.catTitle.includes(8) && <div className="media">
                    <div className="media-left">
                        <img src="/images/page_icons/class8.png" alt="Classified AD Menu Icon"/>
                    </div>
                    <div className="media-body">
                        <span> // </span>
                        {this.categories.includes("811") &&
                            <span className="menu-item" onClick={this.handleClick}>招生  // </span>}
                    </div>
                </div>}
                {this.catTitle.includes(9) && <div className="media">
                    <div className="media-left">
                        <img src="/images/page_icons/class9.png" alt="Classified AD Menu Icon"/>
                    </div>
                    <div className="media-body">
                        <span> // </span>
                        {this.categories.includes("900") &&
                            <span className="menu-item" onClick={this.handleClick}>二手車  // </span>}
                        {this.categories.includes("807") &&
                            <span className="menu-item" onClick={this.handleClick}>專車接送  // </span>}
                        {this.categories.includes("806") &&
                            <span className="menu-item" onClick={this.handleClick}>搬運  // </span>}
                    </div>
                </div>}
                {this.catTitle.includes(10) && <div className="media">
                    <div className="media-left">
                        <img src="/images/page_icons/class10.png" alt="Classified AD Menu Icon"/>
                    </div>
                    <div className="media-body">
                        <span> // </span>
                        {this.categories.includes("1000") &&
                            <span className="menu-item" onClick={this.handleClick}>姻緣  // </span>}
                        {this.categories.includes("1201") &&
                            <span className="menu-item" onClick={this.handleClick}>尋人  // </span>}
                        {this.categories.includes("1200") &&
                            <span className="menu-item" onClick={this.handleClick}>遺失  // </span>}
                        {this.categories.includes("1300") &&
                            <span className="menu-item" onClick={this.handleClick}>啟事  // </span>}
                    </div>
                </div>}
            </div>
        );
    }
}

export default ClassifiedMenu;