import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClassifiedAd extends Component {
    // handleClick = () => {
    //     // show larger view
    //     console.log(this.props.data);

    // }

    // imgLocation = "";

    render() {
        return (
            <div className="card mb-3">
                <a href={this.props.data.image} data-fancybox="group" data-caption={this.props.data.title}>
                    <img className="card-img-top"  src={this.props.data.image} alt="Ad Picture"/>
                </a>
                <div className="card-body">
                    <h4 className="card-title">{this.props.data.title}</h4>
                    {this.props.data.description.map((desc,id) => 
                        <div key={id} className="card-text">{desc}</div>)}
                </div>
                <div className="card-footer">
                    <small className="text-muted">Ad ID: {this.props.data.id}</small>
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