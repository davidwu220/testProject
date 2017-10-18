import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ClassifiedMenu extends Component {
    
    handleClick = (cls) => {
        this.props.onClasMenuClick(cls);
        // // need to search for specific content
        // if (cls == "103_104") {
        //     //return 103 and 104 ads
        //     props.onMenuClick(cls);
        //     console.log(props.classifiedAds.filter(this.findAdsByClass, cls));
    
        // } else if (cls == "802_803") {
        //     // return 802 and 803 ads
    
        // } else {
        //     // just search for class match
        //     props.onMenuClick(cls);
        //     console.log(props.classifiedAds.filter(this.findAdsByClass, cls));
        // }
    }
    render() {
        return (
            <div className="classified-ad-menu">
                {this.props.catTitle.includes(1) && <div className="media">
                    <div className="media-left">
                        <img src="/images/page_icons/class1.png" alt="Classified AD Menu Icon"/>
                    </div>
                    <div className="media-body">
                        <span> // </span>
                        {this.props.clasCat.includes("101_102") &&
                            <span className="menu-item" onClick={() => this.handleClick("101_102")}>公司  // </span>}
                        {this.props.clasCat.includes("106") &&
                        <span className="menu-item" onClick={() => this.handleClick("106")}>餐館  // </span>}
                        {this.props.clasCat.includes("103_104") &&
                        <span className="menu-item" onClick={() => this.handleClick("103_104")}>管家保母托兒  // </span>}
                        {this.props.clasCat.includes("105") &&
                        <span className="menu-item" onClick={() => this.handleClick("105")}>衣廠  // </span>}
                    </div>
                </div>}
                {this.props.catTitle.includes(2) && <div className="media">
                    <div className="media-left">
                        <img src="/images/page_icons/class2.png" alt="Classified AD Menu Icon"/>
                    </div>
                    <div className="media-body">
                        <span> // </span>
                        {this.props.clasCat.includes("300") &&
                            <span className="menu-item" onClick={() => this.handleClick("300")}>住宅出租  // </span>}
                        {this.props.clasCat.includes("500") &&
                            <span className="menu-item" onClick={() => this.handleClick("500")}>住宅出售  // </span>}
                    </div>
                </div>}
                {this.props.catTitle.includes(3) && <div className="media">
                    <div className="media-left">
                        <img src="/images/page_icons/class3.png" alt="Classified AD Menu Icon"/>
                    </div>
                    <div className="media-body">
                        <span> // </span>
                        {this.props.clasCat.includes("200") &&
                            <span className="menu-item" onClick={() => this.handleClick("200")}>商業招租  // </span>}
                        {this.props.clasCat.includes("700") &&
                            <span className="menu-item" onClick={() => this.handleClick("700")}>商業出讓 // </span>}
                    </div>
                </div>}
                {this.props.catTitle.includes(4) && <div className="media">
                    <div className="media-left">
                        <img src="/images/page_icons/class4.png" alt="Classified AD Menu Icon"/>
                    </div>
                    <div className="media-body">
                        <span> // </span>
                        {this.props.clasCat.includes("400") &&
                        <span className="menu-item" onClick={() => this.handleClick("400")}>地產  // </span>}
                        {this.props.clasCat.includes("600") &&
                        <span className="menu-item" onClick={() => this.handleClick("600")}>貸款  // </span>}
                        {this.props.clasCat.includes("818") &&
                        <span className="menu-item" onClick={() => this.handleClick("818")}>保險  // </span>}
                        {this.props.clasCat.includes("801") &&
                        <span className="menu-item" onClick={() => this.handleClick("801")}>福地  // </span>}
                    </div>
                </div>}
                {this.props.catTitle.includes(5) && <div className="media">
                    <div className="media-left">
                        <img src="/images/page_icons/class5.png" alt="Classified AD Menu Icon"/>
                    </div>
                    <div className="media-body">
                        <span> // </span>
                        {this.props.clasCat.includes("804") &&
                            <span className="menu-item" onClick={() => this.handleClick("804")}>水電  // </span>}
                        {this.props.clasCat.includes("805") &&
                            <span className="menu-item" onClick={() => this.handleClick("805")}>裝修油漆  // </span>}
                        {this.props.clasCat.includes("802_803") &&
                            <span className="menu-item" onClick={() => this.handleClick("802_803")}>清潔殺蟲  // </span>}
                    </div>
                </div>}
               {this.props.catTitle.includes(6) && <div className="media">
                    <div className="media-left">
                        <img src="/images/page_icons/class6.png" alt="Classified AD Menu Icon"/>
                    </div>
                    <div className="media-body">
                        <span> // </span>
                        {this.props.clasCat.includes("810") &&
                            <span className="menu-item" onClick={() => this.handleClick("810")}>商業  // </span>}
                        {this.props.clasCat.includes("808") &&
                            <span className="menu-item" onClick={() => this.handleClick("808")}>法律  // </span>}
                        {this.props.clasCat.includes("816") &&
                            <span className="menu-item" onClick={() => this.handleClick("816")}>會計稅務  // </span>}
                        {this.props.clasCat.includes("809") &&
                            <span className="menu-item" onClick={() => this.handleClick("809")}>電腦監控  // </span>}
                        {this.props.clasCat.includes("814") &&
                            <span className="menu-item" onClick={() => this.handleClick("814")}>命相  // </span>}
                    </div>
                </div>}
                {this.props.catTitle.includes(7) && <div className="media">
                    <div className="media-left">
                        <img src="/images/page_icons/class7.png" alt="Classified AD Menu Icon"/>
                    </div>
                    <div className="media-body">
                        <span> // </span>
                        {this.props.clasCat.includes("813") &&
                            <span className="menu-item" onClick={() => this.handleClick("813")}>按摩推拿  // </span>}
                        {this.props.clasCat.includes("812") &&
                            <span className="menu-item" onClick={() => this.handleClick("812")}>醫藥  // </span>}
                        {this.props.clasCat.includes("817") &&
                            <span className="menu-item" onClick={() => this.handleClick("817")}>醫生  // </span>}
                        {this.props.clasCat.includes("815") &&
                            <span className="menu-item" onClick={() => this.handleClick("815")}>美容  // </span>}
                    </div>
                </div>}
                {this.props.catTitle.includes(8) && <div className="media">
                    <div className="media-left">
                        <img src="/images/page_icons/class8.png" alt="Classified AD Menu Icon"/>
                    </div>
                    <div className="media-body">
                        <span> // </span>
                        {this.props.clasCat.includes("811") &&
                            <span className="menu-item" onClick={() => this.handleClick("811")}>招生  // </span>}
                    </div>
                </div>}
                {this.props.catTitle.includes(9) && <div className="media">
                    <div className="media-left">
                        <img src="/images/page_icons/class9.png" alt="Classified AD Menu Icon"/>
                    </div>
                    <div className="media-body">
                        <span> // </span>
                        {this.props.clasCat.includes("900") &&
                            <span className="menu-item" onClick={() => this.handleClick("900")}>二手車  // </span>}
                        {this.props.clasCat.includes("807") &&
                            <span className="menu-item" onClick={() => this.handleClick("807")}>專車接送  // </span>}
                        {this.props.clasCat.includes("806") &&
                            <span className="menu-item" onClick={() => this.handleClick("806")}>搬運  // </span>}
                    </div>
                </div>}
                {this.props.catTitle.includes(10) && <div className="media">
                    <div className="media-left">
                        <img src="/images/page_icons/class10.png" alt="Classified AD Menu Icon"/>
                    </div>
                    <div className="media-body">
                        <span> // </span>
                        {this.props.clasCat.includes("1000") &&
                            <span className="menu-item" onClick={() => this.handleClick("1000")}>姻緣  // </span>}
                        {this.props.clasCat.includes("1201") &&
                            <span className="menu-item" onClick={() => this.handleClick("1201")}>尋人  // </span>}
                        {this.props.clasCat.includes("1200") &&
                            <span className="menu-item" onClick={() => this.handleClick("1200")}>遺失  // </span>}
                        {this.props.clasCat.includes("1300") &&
                            <span className="menu-item" onClick={() => this.handleClick("1300")}>啟事  // </span>}
                    </div>
                </div>}
            </div>
        );
    }
}

export default ClassifiedMenu;