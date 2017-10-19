import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClassifiedMenu extends Component {
    previousClass = "";

    check300 = (is300) => {
        return parseInt(is300/100) == 3;
    }

    check500 = (is500) => {
        return parseInt(is500/100) == 5;
    }

    Case300 = () => {
        let isTrue = false;
        this.props.clasCat.forEach(cat => {
            if (this.check300(cat) && !isTrue) {
                console.log("in this.check(300), cat matched: ", cat);
                isTrue = true;
            }
        });
        return isTrue;
    }

    Case500 = () => {
        let isTrue = false;
        this.props.clasCat.forEach(cat => {
            if (this.check500(cat) && !isTrue) {
                console.log("in this.check(500), cat matched: ", cat);
                isTrue = true;
            }
        });
        return isTrue;
    }

    handleClick = (cls) => {
        if (cls == "300") {
            this.props.onClasMenuClick("");
        } else if (cls == "500") {
            this.props.onClasMenuClick("");
        } else {
            this.props.onClasMenuClick(cls);
        }

        // set current viewing class active
        $('#'+cls).addClass("is-active");
        if(this.previousClass != "") {
            $('#'+this.previousClass).removeClass("is-active");
        }
        this.previousClass = cls;
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
                            <span><a id="101_102" className="menu-item" onClick={() => this.handleClick("101_102")}>公司</a> // </span>}

                        {this.props.clasCat.includes("106") &&
                            <span><a id="106" className="menu-item" onClick={() => this.handleClick("106")}>餐館</a> // </span>}

                        {this.props.clasCat.includes("103_104") &&
                            <span><a id="103_104" className="menu-item" onClick={() => this.handleClick("103_104")}>管家保母托兒</a> // </span>}

                        {this.props.clasCat.includes("105") &&
                            <span><a id="105" className="menu-item" onClick={() => this.handleClick("105")}>衣廠</a> // </span>}
                    </div>
                </div>}
                {this.props.catTitle.includes(2) && <div className="media">
                    <div className="media-left">
                        <img src="/images/page_icons/class2.png" alt="Classified AD Menu Icon"/>
                    </div>
                    <div className="media-body">
                        <span> // </span>
                        {this.Case300() &&
                            <span><a id="300" className="menu-item" onClick={() => this.handleClick("300")}>住宅出租</a> // </span>}
                        
                        {this.Case500() && 
                            <span><a id="500" className="menu-item" onClick={() => this.handleClick("500")}>住宅出售</a> // </span>}
                    </div>
                </div>}
                {this.props.catTitle.includes(3) && <div className="media">
                    <div className="media-left">
                        <img src="/images/page_icons/class3.png" alt="Classified AD Menu Icon"/>
                    </div>
                    <div className="media-body">
                        <span> // </span>

                        {this.props.clasCat.includes("200") &&
                            <span><a id="200" className="menu-item" onClick={() => this.handleClick("200")}>商業招租</a> // </span>}

                        {this.props.clasCat.includes("700") &&
                            <span><a id="700" className="menu-item" onClick={() => this.handleClick("700")}>商業出讓</a> // </span>}
                    </div>
                </div>}
                {this.props.catTitle.includes(4) && <div className="media">
                    <div className="media-left">
                        <img src="/images/page_icons/class4.png" alt="Classified AD Menu Icon"/>
                    </div>
                    <div className="media-body">
                        <span> // </span>

                        {this.props.clasCat.includes("400") &&
                            <span><a id="400" className="menu-item" onClick={() => this.handleClick("400")}>地產</a> // </span>}

                        {this.props.clasCat.includes("600") &&
                            <span><a id="600" className="menu-item" onClick={() => this.handleClick("600")}>貸款</a> // </span>}

                        {this.props.clasCat.includes("818") &&
                            <span><a id="818" className="menu-item" onClick={() => this.handleClick("818")}>保險</a> // </span>}
                        
                        {this.props.clasCat.includes("801") &&
                            <span><a id="801" className="menu-item" onClick={() => this.handleClick("801")}>福地</a> // </span>}
                    </div>
                </div>}
                {this.props.catTitle.includes(5) && <div className="media">
                    <div className="media-left">
                        <img src="/images/page_icons/class5.png" alt="Classified AD Menu Icon"/>
                    </div>
                    <div className="media-body">
                        <span> // </span>

                        {this.props.clasCat.includes("804") &&
                            <span><a id="804" className="menu-item" onClick={() => this.handleClick("804")}>水電</a> // </span>}

                        {this.props.clasCat.includes("805") &&
                            <span><a id="805" className="menu-item" onClick={() => this.handleClick("805")}>裝修油漆</a> // </span>}

                        {this.props.clasCat.includes("802_803") &&
                            <span><a id="802_803" className="menu-item" onClick={() => this.handleClick("802_803")}>清潔殺蟲</a> // </span>}
                    </div>
                </div>}
               {this.props.catTitle.includes(6) && <div className="media">
                    <div className="media-left">
                        <img src="/images/page_icons/class6.png" alt="Classified AD Menu Icon"/>
                    </div>
                    <div className="media-body">
                        <span> // </span>

                        {this.props.clasCat.includes("810") &&
                            <span><a id="810" className="menu-item" onClick={() => this.handleClick("810")}>電腦監控</a> // </span>}

                        {this.props.clasCat.includes("808") &&
                            <span><a id="808" className="menu-item" onClick={() => this.handleClick("808")}>商業</a> // </span>}

                        {this.props.clasCat.includes("816") &&
                            <span><a id="816" className="menu-item" onClick={() => this.handleClick("816")}>會計稅務</a> // </span>}

                        {this.props.clasCat.includes("809") &&
                            <span><a id="809" className="menu-item" onClick={() => this.handleClick("809")}>法律</a> // </span>}

                        {this.props.clasCat.includes("814") &&
                            <span><a id="814" className="menu-item" onClick={() => this.handleClick("814")}>命相</a> // </span>}
                    </div>
                </div>}
                {this.props.catTitle.includes(7) && <div className="media">
                    <div className="media-left">
                        <img src="/images/page_icons/class7.png" alt="Classified AD Menu Icon"/>
                    </div>
                    <div className="media-body">
                        <span> // </span>

                        {this.props.clasCat.includes("813") &&
                            <span><a id="813" className="menu-item" onClick={() => this.handleClick("813")}>按摩推拿</a> // </span>}

                        {this.props.clasCat.includes("812") &&
                            <span><a id="812" className="menu-item" onClick={() => this.handleClick("812")}>醫藥</a> // </span>}

                        {this.props.clasCat.includes("817") &&
                            <span><a id="817" className="menu-item" onClick={() => this.handleClick("817")}>醫生</a> // </span>}

                        {this.props.clasCat.includes("815") &&
                            <span><a id="815" className="menu-item" onClick={() => this.handleClick("815")}>美容</a> // </span>}
                    </div>
                </div>}
                {this.props.catTitle.includes(8) && <div className="media">
                    <div className="media-left">
                        <img src="/images/page_icons/class8.png" alt="Classified AD Menu Icon"/>
                    </div>
                    <div className="media-body">
                        <span> // </span>

                        {this.props.clasCat.includes("811") &&
                            <span><a id="811" className="menu-item" onClick={() => this.handleClick("811")}>招生</a> // </span>}
                    </div>
                </div>}
                {this.props.catTitle.includes(9) && <div className="media">
                    <div className="media-left">
                        <img src="/images/page_icons/class9.png" alt="Classified AD Menu Icon"/>
                    </div>
                    <div className="media-body">
                        <span> // </span>

                        {this.props.clasCat.includes("900") &&
                            <span><a id="900" className="menu-item" onClick={() => this.handleClick("900")}>二手車</a> // </span>}

                        {this.props.clasCat.includes("807") &&
                            <span><a id="807" className="menu-item" onClick={() => this.handleClick("807")}>專車接送</a> // </span>}

                        {this.props.clasCat.includes("806") &&
                            <span><a id="806" className="menu-item" onClick={() => this.handleClick("806")}>搬運</a> // </span>}
                    </div>
                </div>}
                {this.props.catTitle.includes(10) && <div className="media">
                    <div className="media-left">
                        <img src="/images/page_icons/class10.png" alt="Classified AD Menu Icon"/>
                    </div>
                    <div className="media-body">
                        <span> // </span>

                        {this.props.clasCat.includes("1000") &&
                            <span><a id="1000" className="menu-item" onClick={() => this.handleClick("1000")}>姻緣</a> // </span>}

                        {this.props.clasCat.includes("1201") &&
                            <span><a id="1201" className="menu-item" onClick={() => this.handleClick("1201")}>尋人</a> // </span>}

                        {this.props.clasCat.includes("1200") &&
                            <span><a id="1200" className="menu-item" onClick={() => this.handleClick("1200")}>遺失</a> // </span>}

                        {this.props.clasCat.includes("1300") &&
                            <span><a id="1300" className="menu-item" onClick={() => this.handleClick("1300")}>啟事</a> // </span>}
                    </div>
                </div>}
            </div>
        );
    }
}

export default ClassifiedMenu;