import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClassifiedMenu extends Component {
    constructor(props) {
        super(props);
        
        this.tempCatList = [];
        this.categories = [];

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

                this.categories.push(uniqCat);
            }
        }
    }

    render() {
        return (
            <div className="classified-ad-menu">
                <div className="media">
                    <div className="media-left">
                        <img src="./images/page_icons/class1.png" alt="Classified AD Menu Icon"/>
                    </div>
                    <div className="media-body">
                        <span> // </span>
                        {this.categories.includes("101") &&
                            <span><a href="">公司</a> // </span>}
                        {this.categories.includes("106") &&
                            <span><a href="">餐館</a> // </span>}
                        {this.categories.includes("103_104") &&
                            <span><a href="">管家保母托兒</a> // </span>}
                        {this.categories.includes("105") &&
                            <span><a href="">衣廠</a> // </span>}
                    </div>
                </div>
                <div className="media">
                    <div className="media-left">
                        <img src="./images/page_icons/class2.png" alt="Classified AD Menu Icon"/>
                    </div>
                    <div className="media-body">
                        <span> // </span>
                        {this.categories.includes("300") &&
                            <span><a href="">住宅出租</a> // </span>}
                        {this.categories.includes("500") &&
                            <span><a href="">住宅出售</a> // </span>}
                    </div>
                </div>
                <div className="media">
                    <div className="media-left">
                        <img src="./images/page_icons/class3.png" alt="Classified AD Menu Icon"/>
                    </div>
                    <div className="media-body">
                        <span> // </span>
                        {this.categories.includes("200") &&
                            <span><a href="">商業招租</a> // </span>}
                        {this.categories.includes("700") &&
                            <span><a href="">商業出讓</a> // </span>}
                    </div>
                </div>
                <div className="media">
                    <div className="media-left">
                        <img src="./images/page_icons/class4.png" alt="Classified AD Menu Icon"/>
                    </div>
                    <div className="media-body">
                        <span> // </span>
                        {this.categories.includes("400") &&
                            <span><a href="">地產</a> // </span>}
                        {this.categories.includes("600") &&
                            <span><a href="">貸款</a> // </span>}
                        {this.categories.includes("818") &&
                            <span><a href="">保險</a> // </span>}
                        {this.categories.includes("801") &&
                            <span><a href="">福地</a> // </span>}
                    </div>
                </div>
                <div className="media">
                    <div className="media-left">
                        <img src="./images/page_icons/class5.png" alt="Classified AD Menu Icon"/>
                    </div>
                    <div className="media-body">
                        <span> // </span>
                        {this.categories.includes("804") &&
                            <span><a href="">水電</a> // </span>}
                        {this.categories.includes("805") &&
                            <span><a href="">裝修油漆</a> // </span>}
                        {this.categories.includes("802_803") &&
                            <span><a href="">清潔殺蟲</a> // </span>}
                    </div>
                </div>
                <div className="media">
                    <div className="media-left">
                        <img src="./images/page_icons/class6.png" alt="Classified AD Menu Icon"/>
                    </div>
                    <div className="media-body">
                        <span> // </span>
                        {this.categories.includes("810") &&
                            <span><a href="">商業</a> // </span>}
                        {this.categories.includes("808") &&
                            <span><a href="">法律</a> // </span>}
                        {this.categories.includes("816") &&
                            <span><a href="">會計稅務</a> // </span>}
                        {this.categories.includes("809") &&
                            <span><a href="">電腦監控</a> // </span>}
                        {this.categories.includes("814") &&
                            <span><a href="">命相</a> // </span>}
                    </div>
                </div>
                <div className="media">
                    <div className="media-left">
                        <img src="./images/page_icons/class7.png" alt="Classified AD Menu Icon"/>
                    </div>
                    <div className="media-body">
                        <span> // </span>
                        {this.categories.includes("813") &&
                            <span><a href="">按摩推拿</a> // </span>}
                        {this.categories.includes("812") &&
                            <span><a href="">醫藥</a> // </span>}
                        {this.categories.includes("817") &&
                            <span><a href="">醫生</a> // </span>}
                        {this.categories.includes("815") &&
                            <span><a href="">美容</a> // </span>}
                    </div>
                </div>
                <div className="media">
                    <div className="media-left">
                        <img src="./images/page_icons/class8.png" alt="Classified AD Menu Icon"/>
                    </div>
                    <div className="media-body">
                        <span> // </span>
                        {this.categories.includes("811") &&
                            <span><a href="">招生</a> // </span>}
                    </div>
                </div>
                <div className="media">
                    <div className="media-left">
                        <img src="./images/page_icons/class9.png" alt="Classified AD Menu Icon"/>
                    </div>
                    <div className="media-body">
                        <span> // </span>
                        {this.categories.includes("900") &&
                            <span><a href="">二手車</a> // </span>}
                        {this.categories.includes("807") &&
                            <span><a href="">專車接送</a> // </span>}
                        {this.categories.includes("806") &&
                            <span><a href="">搬運</a> // </span>}
                    </div>
                </div>
                <div className="media">
                    <div className="media-left">
                        <img src="./images/page_icons/class10.png" alt="Classified AD Menu Icon"/>
                    </div>
                    <div className="media-body">
                        <span> // </span>
                        {this.categories.includes("1000") &&
                            <span><a href="">姻緣</a> // </span>}
                        {this.categories.includes("1201") &&
                            <span><a href="">尋人</a> // </span>}
                        {this.categories.includes("1200") &&
                            <span><a href="">遺失</a> // </span>}
                        {this.categories.includes("1300") &&
                            <span><a href="">啟事</a> // </span>}
                    </div>
                </div>
            </div>

        );
    }
}

ClassifiedMenu.propTypes = {

};

export default ClassifiedMenu;

// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// class Classified extends Component {
//     handleClick = () => {
//         console.log(this.props);
//     }

//     render() {
//         return (
//             <div className="" onClick={this.handleClick}>
//                 <div>
//                     {this.props.id}
//                 </div>
//                 <div>
//                     {this.props.title}
//                 </div>
//                 <div>
//                     {this.props.discription}
//                 </div>
//             </div>
//         );
//     }
// }

// Classified.propTypes = {
//     title: PropTypes.string,
//     discription: PropTypes.string
// };

// export default Classified;