import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClassifiedAd extends Component {
    constructor(props) {
        super(props);
        console.log("I'm here!", props.ad);
    }
    

    handleClick = () => {
        console.log(this.props.ad);
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                <div>
                    {this.props.id}
                </div>
                <div>
                    {this.props.title}
                </div>
                <div>
                    {this.props.discription}
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