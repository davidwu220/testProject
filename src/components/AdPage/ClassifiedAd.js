import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClassifiedAd extends Component {
    handleClick = () => {
        // show larger view
        console.log(this.props.data);
    }

    render() {
        return (
            <div className="ad-item ad-wrapper box-shadow" onClick={this.handleClick}>
                <div className="ad-text">
                    <div className="ad-header">
                        Example library
                    </div>
                    <div className="ad-desc">
                        Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
                    </div>
                </div>
                <div className="ad-img">
                    <img src="/images/ads/classifiedAds/0000663000.jpg" alt=""/>
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