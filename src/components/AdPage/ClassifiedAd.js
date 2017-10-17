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
                <div className="ad-text">
                    <h2 className="ad-header">
                        {this.props.data.title}
                    </h2>
                    <h4 className="ad-desc">
                        <p>{this.props.data.discription}</p>
                    </h4>
                </div>
                <div className="ad-img">
                    <img src={this.props.data.image} alt=""/>
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