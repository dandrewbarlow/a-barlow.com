import React, { Component } from 'react'

import portrait from '../img/portrait.jpg'

export default class About extends Component {
  render() {
    return (
        <>
        <section className="hero">
            <div className="hero-body">
                <div className="container mb-6">
                    <h1 className="title">
                        About Me
                    </h1>
                </div>

                    <div
                    className="card mb-6"
                    style={{
                        maxWidth: '500px',
                        textAlign: 'center',
                        margin: 'auto',
                    }}
                    >
                    <div className="card-image">
                      <figure className="image" id="profile-picture">
                        <img src={portrait} alt="Andrew Barlow" />
                      </figure>
                    </div>
                    <div className="card-content">
                        Andrew Barlow
                    </div>
                    </div>


                <div className="container mb-6">

                    <div className="content is-medium">
                        Hello! My name is Andrew Barlow. I'm a CU Boulder graduate
                        with a degree in Creative Technology and Design. I would
                        describe my skill-set as cross-disciplinary, with a focus on
                        creative digital design and problem solving using modern
                        methods and technology.  I've focused a lot of my
                        professional development on various areas of creative
                        programming, particularly front end web development, and
                        especially within the React framework.  As a programmer I'm
                        fairly language agnostic, and have found it easy to pick up
                        new technologies to fill particular use cases, or even just
                        for fun.  In my personal time, a favorite hobby is the
                        creation of procedural art. I love technology and science
                        just as much as I love art and design. I think this balance
                        pushes my work to a level that sets me apart.
                    </div>

                </div>

                <div className="container mb-6">
                    <h1 className="title">
                        Skills
                    </h1>
                </div>

                <div className="container">
                <div className="content is-medium">
                <div className="columns is-multiline">
                    <div className="column">
                    <ul>
                        <li>Front End Web Development
                        <ul>
                        <li>HTML, CSS, &amp; JS</li>
                        <li>React</li>
                        <li>node.js &amp; npm</li>
                        <li>jQuery</li>
                        <li>Wordpress</li>
                        </ul></li>
                        <li>Python
                        <ul>
                        <li>Web Scraping</li>
                        <li>Data Analysis</li>
                        <li>Data Visualization</li>
                        <li>Automation</li>
                        </ul></li>
                        <li>C# and Unity Development</li>
                        <li>C++ &amp; C</li>
                        <li>Go!</li>
                        <li>SQL</li>
                        <li>General Computer Science Knowledge
                        <ul>
                        <li>Common algorithms &amp; their time/space tradeoffs</li>
                        <li>Multiple paradigms (object oriented, functional, procedural)</li>
                        <li>Synchronous, asynchronous, &amp; parallel computing</li>
                        </ul></li>
                        <li>LATEX Document Creation &amp; Formatting</li>
                    </ul>
                    </div>
                    <div className="column">
                    <ul>
                        <li>Linux Proficiency
                        <ul>
                        <li>Command Line</li>
                        <li>Vim</li>
                        <li>System Administration</li>
                        <li>Shell Scripting</li>
                        <li>Build Systems</li>
                        <li>Version Control using git &amp; github</li>
                        </ul></li>
                        <li>Graphic Design/Digital Creation Tools
                        <ul>
                        <li>Photoshop &amp; Lightroom</li>
                        <li>Illustrator</li>
                        <li>InDesign</li>
                        <li>Ableton &amp; Audacity</li>
                        <li>Rhino + Blender (3D Modeling)</li>
                        </ul></li>
                        <li>MAX (visual programming language for audio)</li>
                        <li>TouchDesigner (visual programming language for visual arts)</li>
                        <li>Processing &amp; p5.js</li>
                        <li>R &amp; RStudio - statistics programming suite</li>
                        <li>Electronics/Systems Programming
                        <ul>
                        <li>Arduinos</li>
                        <li>Analog Synthesizers</li>
                        </ul></li>
                        <li>Common Professional Software
                        <ul>
                        <li>Microsoft Office Suite</li>
                        </ul></li>
                    </ul>
                    </div>
                </div>
                </div>

                </div>

            </div>
        </section>
        </>
    )
  }
}
