import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClassifiedAd extends Component {
    constructor(props) {
        super(props);
        console.log("I'm here!", props.data);
    }
    

    handleClick = () => {
        console.log(this.props.data);
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                <div>
                    {this.props.data.id}
                </div>
                <div>
                    {this.props.data.title}
                </div>
                <div>
                    {this.props.data.discription}
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