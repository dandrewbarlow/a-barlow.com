import { Link } from 'gatsby'
import React, { Component } from 'react'
import waves from '../images/art/waves_1.png'
import gameOfLife from '../images/art/game-of-life-animation.gif'
import profilePic from '../images/index/profile_pic.jpg'

export default class HomeGallery extends Component {
    render() {
        return (
            // <div className="
            <div className="content linkGallery" id="homeGallery">
                <Link to="/about" className='card'>
                    <figure className='image card-image'>
                        <img src={profilePic} />
                        <figcaption className='card-header-title'>About Me</figcaption>
                    </figure>
                </Link>

                <Link to="/art" className='card'>
                    <figure className='image card-image'>
                        <img src={waves}/>
                        <figcaption className='card-header-title'>Art</figcaption>
                    </figure>
                </Link>

                <Link to="/projects" className='card'>
                    <figure className='image card-image'>
                        <img src={gameOfLife} />
                        <figcaption className='card-header-title'>Projects</figcaption>
                    </figure>
                </Link>
            </div>
        )
    }
}
