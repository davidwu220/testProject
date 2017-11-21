import React, { Component } from 'react';

class CommercialTextMenu extends Component {
    previousClass = "";

    handleClick = (cat) => {
        this.props.onComMenuClick(cat);

        // // set current viewing class active
        // $('#'+cat).addClass("is-active");
        
        // if(this.previousClass != "" && cat != this.previousClass) {
        //     $('#'+this.previousClass).removeClass("is-active");
        // }
        // this.previousClass = cat;
    } 

    render() {
        return (
            <div className="commercial-text-menu">
                {
                    window.commercialCats.map((cat) => 
                        <span key={ cat._id }> // <a 
                            id={ cat.cat }
                            className={"menu-item " + (this.props.activeComMenu === cat.cat ? 'is-active' : '')}
                            onClick={ () => this.handleClick(cat.cat) }>
                                { cat.cat_cn }
                            </a>
                        </span>
                    )
                }

                <span> // </span>
            </div>
        );
    }
}

export default CommercialTextMenu;