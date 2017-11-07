import React, { Component } from 'react';

class SlidingAds extends Component {
    componentDidMount() {

        
    }

    render() {
        return (
            <div className="carousel" data-flickity='{ "lazyLoad": 2, "autoPlay": true, "imagesLoaded": true, "wrapAround": true, "adaptiveHeight": true }'>
                <div className="carousel-cell">
                    <a href="/ads/slider_ads/6254CF6.png" data-fancybox="group" data-caption="Slider Image">
                        <img className="carousel-cell-image" data-flickity-lazyload="/ads/slider_ads/6254CF6.png" alt="carousel slide" />
                    </a>
                </div>
                <div className="carousel-cell">
                    <a href="/ads/slider_ads/6277CF5.png" data-fancybox="group" data-caption="Slider Image">
                        <img className="carousel-cell-image" data-flickity-lazyload="/ads/slider_ads/6277CF5.png" alt="carousel slide" />
                    </a>
                </div>
                <div className="carousel-cell">
                    <a href="/ads/slider_ads/6283CHR11.png" data-fancybox="group" data-caption="Slider Image">
                        <img className="carousel-cell-image" data-flickity-lazyload="/ads/slider_ads/6283CHR11.png" alt="carousel slide" />
                    </a>
                </div>
                <div className="carousel-cell">
                    <a href="/ads/slider_ads/6615CF5.png" data-fancybox="group" data-caption="Slider Image">
                        <img className="carousel-cell-image" data-flickity-lazyload="/ads/slider_ads/6615CF5.png" alt="carousel slide" />
                    </a>
                </div>
                <div className="carousel-cell">
                    <a href="/ads/slider_ads/6615CF6A.png" data-fancybox="group" data-caption="Slider Image">
                        <img className="carousel-cell-image" data-flickity-lazyload="/ads/slider_ads/6615CF6A.png" alt="carousel slide" />
                    </a>
                </div>
                <div className="carousel-cell">
                    <a href="/ads/slider_ads/9565CHSP.png" data-fancybox="group" data-caption="Slider Image">
                        <img className="carousel-cell-image" data-flickity-lazyload="/ads/slider_ads/9565CHSP.png" alt="carousel slide" />
                    </a>
                </div>
            </div>
        );
    }
}

export default SlidingAds;