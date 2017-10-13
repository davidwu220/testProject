import React, { Component } from 'react';

import ClassifiedSection from '../AdPage/ClassifiedSection';
import CommercialSection from '../AdPage/CommercialSection';

// const Home = (props) => (
//     <div className="Main" style={{width: 1 + "px"}}>
//         <div id="classified-ad" style={{overflow:"hidden", marginBottom: 20 + "px"}}>
//             <img src="./images/page_icons/classified_ad_bar.jpg" alt="Classified AD Menu Bar"/>
//         </div>

//         <ClassifiedMenu onMenuClick={ props.onMenuClick } classifiedAds={ props.classifiedAds }/>

//         <div id="commercial-ad" style={{overflow:"hidden", marginBottom: 20 + "px", marginTop: 25 + "px"}}>
//             <img src="./images/page_icons/commercial_ad_bar.jpg" alt="Commercial AD Menu Bar"/>
//         </div>

//         <CommercialMenu />
//     </div>
// );

// export default Home;

class Home extends Component {
    CheckState = () => {
        if (this.props.view == "classified") {
            return (
                <ClassifiedSection 
                    viewState={ this.props.view }
                    currentClassState={ this.props.currentClass }
                    onMenuClick={ this.props.onMenuClick }
                    classifiedAds={ this.props.classifiedAds }
                    adList={ this.props.adList } />
            );
        } else if (this.props.view == "commercial") {
            return (
                <CommercialSection viewState={ this.props.view } />
            );
        } else {
            return (
                <div className="Main" style={{width: 1 + "px"}}>
                    <ClassifiedSection 
                        viewState={ this.props.view }
                        currentClassState={ this.props.currentClass }
                        onMenuClick={ this.props.onMenuClick }
                        classifiedAds={ this.props.classifiedAds }/>
                    <CommercialSection viewState={ this.props.view } />
                </div>
            );
        }
    }
    render() {
        return (
            <this.CheckState />
        );
    }
}

export default Home;
