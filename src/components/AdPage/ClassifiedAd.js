import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClassifiedAd extends Component {
    handleClick = () => {
        // show larger view
        console.log(this.props.data);
    }

    imgLocation = "";

    render() {
        return (
            <div className="ad-item ad-wrapper box-shadow" onClick={this.handleClick}>
            <div className="ad-bar">
                <img className="" src="/images/page_icons/classified_ad_idBar.jpg" alt=""/>
                <span className="ad-id">{this.props.data.id}</span>
            </div>
                <div className="ad-text">
                    <div className="ad-header">
                        {this.props.data.title}
                    </div>
                    <div className="ad-desc">
                        {this.props.data.discription}
                    </div>
                </div>
                <div className="ad-img">
                    <img src={this.props.data.image} alt="Ad Picture"/>
                </div>
            </div>
        );
    }
}

ClassifiedAd.propTypes = {
    title: PropTypes.string,
    discription: PropTypes.string
};

export default ClassifiedAd;