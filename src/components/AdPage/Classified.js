import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Classified extends Component {
    handleClick = () => {
        console.log(this.props);
    }

    render() {
        return (
            <div className="" onClick={this.handleClick}>
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

Classified.propTypes = {
    title: PropTypes.string,
    discription: PropTypes.string
};

export default Classified;