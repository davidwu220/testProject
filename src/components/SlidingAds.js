import React, { Component } from 'react';
import ReactPlayer from 'react-player';

import CarouselCell from './CarouselCell';

class SlidingAds extends Component {
    state = {
        shoudlPlay: '',
        ready: false
    }

    playerReady = () => {
        console.log('ready');
        this.setState({ ready: true });
    }
    
    componentDidMount() {
        // if the first slide is video, set it to play
        this.setState({ shoudlPlay: '0' });

        var $carousel = $(".carousel").flickity({
            cellAlign: "center",
            contain: true,
            lazyLoad: 2,
            autoPlay: 10000,
            wrapAround: true 

        });
        var flkty = $carousel.data('flickity');

        $carousel.on("select.flickity", () => {
            if(this.state.ready) {
                this.setState({ shoudlPlay: flkty.selectedIndex });
                
            }
        });

        // pause and unpause the video if the slide is clicked
        $("[data-fancybox]").fancybox({
            beforeShow: (instance, slide) => {
                this.setState({ shoudlPlay: '' });
            },
            afterClose: (instance, slide) => {
                this.setState({ shoudlPlay: flkty.selectedIndex });
            }
        });
    }

    render() {
        return (
            <div className="carousel">
                <CarouselCell
                    type="video"
                    fullVidUrl="https://youtu.be/wjFlgOJmbfw"
                    shortVidUrl="https://youtu.be/m-02MYq03qA"
                    id="0"
                    shouldPlay={this.state.shoudlPlay}
                    playerReady={this.playerReady}
                    onVidClick={this.onVidClick}
                />
                <CarouselCell
                    type="image"
                    id="1"
                    url="/ads/slider_ads/6254CF6.png"
                />
                <CarouselCell
                    type="image"
                    id="2"
                    url="/ads/slider_ads/6277CF5.png"
                />
                <CarouselCell
                    type="image"
                    id="3"
                    url="/ads/slider_ads/6283CHR11-1.png"
                />
                <CarouselCell
                    type="image"
                    id="4"
                    url="/ads/slider_ads/6283CHR11-2.png"
                />
                <CarouselCell
                    type="image"
                    id="5"
                    url="/ads/slider_ads/6615CF5.png"
                />
                <CarouselCell
                    type="image"
                    id="6"
                    url="/ads/slider_ads/6615CF6A.png"
                />
            </div>
        );
    }
}

export default SlidingAds;