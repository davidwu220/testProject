import React, { Component } from 'react';

import ClassifiedSection from '../AdPage/ClassifiedSection';
import CommercialSection from '../AdPage/CommercialSection';

class Home extends Component {
    CheckState = () => {
        if (this.props.view == "classified") {
            return (
                <ClassifiedSection 
                    clasCat={ this.props.clasCat }
                    catTitle={ this.props.catTitle }
                    viewState={ this.props.view }
                    onMenuClick={ this.props.onMenuClick }
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
                        clasCat={ this.props.clasCat }
                        catTitle={ this.props.catTitle }
                        viewState={ this.props.view }
                        onMenuClick={ this.props.onMenuClick }
                        adList={ this.props.adList }/>
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
