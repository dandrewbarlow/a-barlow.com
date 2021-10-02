import { Link } from 'gatsby'
import React, { Component } from 'react'
import waves from '../images/art/waves_1.png'
import gameOfLife from '../images/art/game-of-life-animation.gif'
import profilePic from '../images/index/profile_pic.jpg'

export default class HomeGallery extends Component {
    render() {
        return (
            <div className="linkGallery" id="homeGallery">
                <Link to="/about">
                    <figure>
                        <img src={profilePic} />
                        <figcaption>About Me</figcaption>
                    </figure>
                </Link>
                <Link to="/art">
                    <figure>
                        <img src={waves}/>
                        <figcaption>Art</figcaption>
                    </figure>
                </Link>
                <Link to="/projects">
                    <figure>
                        <img src={gameOfLife} />
                        <figcaption>Projects</figcaption>
                    </figure>
                </Link>
            </div>
        )
    }
}
