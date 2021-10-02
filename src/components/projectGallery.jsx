import React, { Component } from 'react'
import aimertravel from '../images/projects/aimer-travel.png'
import emitting from '../images/projects/emitting.gif'

export default class ProjectGallery extends Component {

    render() {
        return (
            <div className="linkGallery">
                <a href="http://aimertravel.com">
                    <figure>
                        <img src={aimertravel} alt="Aimer Travel Site" />
                        <figcaption>Website for Aimer Travel</figcaption>
                    </figure>
                </a>

                <a href="https://creative.colorado.edu/~daba3662/capstone/Emitting-CU-Website/">
                    <figure>
                        <img src={emitting} alt="gif of Emitting CU's webpage with a cool particle system" />
                        <figcaption>Emitting: Capstone Project</figcaption>
                    </figure>
                </a>

            </div>
        )
    }
}
