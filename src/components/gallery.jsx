import React, { Component } from 'react'
import ImageGallery from 'react-image-gallery'


export default class Gallery extends Component {
    constructor(props) {
        super(props);

        // https://www.gatsbyjs.com/docs/debugging-html-builds/
        this.isBrowser = typeof window !== "undefined";

        if(this.isBrowser) {
            // js media queries are apparently a thing
            this.mediaQuery = window.matchMedia('(min-width: 800px)');
            // add event listener
            this.mediaQuery.addEventListener('change', (e) => this.responsiveThumbnail(e));
            // initialize
        }

        this.state = {
            thumbnailPosition: "left"
        };
    }

    componentDidMount() {
        this.responsiveThumbnail(this.mediaQuery);
    }

    // determine where to place the thumbnail
    responsiveThumbnail(e) {

        if (e.matches) {
            this.setState({
                thumbnailPosition: "left"
            });
        }
        else {
            this.setState({
                thumbnailPosition: "bottom"
            });
        }
    }

    render() {
        return (
            <ImageGallery items={this.props.images} showPlayButton={false} thumbnailPosition={this.state.thumbnailPosition}/>
        );
    }
}
