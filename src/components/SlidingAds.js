import React, { Component } from 'react';
import ReactPlayer from 'react-player';

import CarouselCell from './CarouselCell';

class SlidingAds extends Component {
    state = {
        shoudlPlay: "0",
        ready: false
    }

    playerReady = () => {
        console.log('ready');
        this.setState({ ready: true });
    }
    
    componentDidMount() {
        var $carousel = $(".carousel").flickity({
            cellAlign: "center",
            contain: true,
            lazyLoad: 2,
            autoPlay: 10000,
            wrapAround: true 

        });
        var flkty = $carousel.data('flickity');

        $carousel.on("select.flickity", () => {
            console.log(flkty.selectedIndex);
            if(this.state.ready) {
                this.setState({ shoudlPlay: flkty.selectedIndex });
                
            }
        });
    }

    render() {
        return (
            <div className="carousel">
                <CarouselCell
                    type="video"
                    url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                    id="0"
                    shouldPlay={this.state.shoudlPlay}
                    playerReady={this.playerReady}
                />

                <div className="carousel-cell">
                    <a href="/ads/slider_ads/6254CF6.png" data-fancybox="slider-group" data-caption="Slider Image">
                        <img className="carousel-cell-image" data-flickity-lazyload="/ads/slider_ads/6254CF6.png" alt="carousel slide" />
                    </a>
                </div>
                <CarouselCell
                    type="video"
                    url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                    id="2"
                    shouldPlay={this.state.shoudlPlay}
                    playerReady={this.playerReady}
                />
                <div className="carousel-cell">
                    <a href="/ads/slider_ads/6277CF5.png" data-fancybox="slider-group" data-caption="Slider Image">
                        <img className="carousel-cell-image" data-flickity-lazyload="/ads/slider_ads/6277CF5.png" alt="carousel slide" />
                    </a>
                </div>
                <div className="carousel-cell">
                    <a href="/ads/slider_ads/6283CHR11-1.png" data-fancybox="slider-group" data-caption="Slider Image">
                        <img className="carousel-cell-image" data-flickity-lazyload="/ads/slider_ads/6283CHR11-1.png" alt="carousel slide" />
                    </a>
                </div>
                <div className="carousel-cell">
                    <a href="/ads/slider_ads/6283CHR11-2.png" data-fancybox="slider-group" data-caption="Slider Image">
                        <img className="carousel-cell-image" data-flickity-lazyload="/ads/slider_ads/6283CHR11-2.png" alt="carousel slide" />
                    </a>
                </div>
                <div className="carousel-cell">
                    <a href="/ads/slider_ads/6615CF5.png" data-fancybox="slider-group" data-caption="Slider Image">
                        <img className="carousel-cell-image" data-flickity-lazyload="/ads/slider_ads/6615CF5.png" alt="carousel slide" />
                    </a>
                </div>
                <div className="carousel-cell">
                    <a href="/ads/slider_ads/6615CF6A.png" data-fancybox="slider-group" data-caption="Slider Image">
                        <img className="carousel-cell-image" data-flickity-lazyload="/ads/slider_ads/6615CF6A.png" alt="carousel slide" />
                    </a>
                </div>
            </div>
        );
    }
}

export default SlidingAds;