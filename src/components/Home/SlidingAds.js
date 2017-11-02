import React, { Component } from 'react';

class SlidingAds extends Component {
    componentDidMount() {

        
    }

    render() {
        return (
            <div className="carousel" data-flickity='{ "lazyLoad": 2, "autoPlay": true, "imagesLoaded": true, "wrapAround": true }'>
                <div className="carousel-cell">
                    <img className="carousel-cell-image" data-flickity-lazyload="/images/page_icons/placeholder.jpg" alt="First slide" />
   
                </div>
                <div className="carousel-cell">
                    <img className="carousel-cell-image" data-flickity-lazyload="/images/page_icons/placeholder.jpg" alt="Second slide" />
       
                </div>
                <div className="carousel-cell">
                    <img className="carousel-cell-image" data-flickity-lazyload="/images/page_icons/placeholder.jpg" alt="Third slide" />

                </div>
                <div className="carousel-cell">
                    <img className="carousel-cell-image" data-flickity-lazyload="/images/page_icons/placeholder.jpg" alt="First slide" />

                </div>
                <div className="carousel-cell">
                    <img className="carousel-cell-image" data-flickity-lazyload="/images/page_icons/placeholder.jpg" alt="Second slide" />
    
                </div>
                <div className="carousel-cell">
                    <img className="carousel-cell-image" data-flickity-lazyload="/images/page_icons/placeholder.jpg" alt="Third slide" />

                </div>
                <div className="carousel-cell">
                    <img className="carousel-cell-image" data-flickity-lazyload="/images/page_icons/placeholder.jpg" alt="First slide" />

                </div>
                <div className="carousel-cell">
                    <img className="carousel-cell-image" data-flickity-lazyload="/images/page_icons/placeholder.jpg" alt="Second slide" />

                </div>
                <div className="carousel-cell">
                    <img className="carousel-cell-image" data-flickity-lazyload="/images/page_icons/placeholder.jpg" alt="Third slide" />
                </div>
                <div className="carousel-cell">
                    <img className="carousel-cell-image" data-flickity-lazyload="/images/page_icons/placeholder.jpg" alt="First slide" />
                </div>

            </div>
        );
    }
}

export default SlidingAds;