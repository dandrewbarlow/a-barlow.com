// Andrew Barlow
// about.js
// about me page
// 2021 

import React from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

export default function About() {
    return (
        <Layout>
            <SEO title="Home" />

            <h1>About Me</h1>
            
            <p>Hello! My name is Andrew Barlow and I'm a <a href="https://www.colorado.edu/atlas/">Creative Technology and Design</a> student at CU Boulder </p>

            <p>My professional and personal interests are eclectic, and I feel this is a strong feature and selling point of my own design aesthetic. I chose CTD over a more specific degree because of the interdisciplinary approach it provides, combining technical and design skills. Despite this broadness (or maybe because of it), there are a lot of fields that I like to dip my toes into. I'm particularly interested in the future of technology and the different paradigms that have come and gone through the years (Especially anything UNIX/Bell Labs related). I'm also an amateur student of psychology, economics, history, philosophy, and various mediums of art.</p>


            <h2>Skills</h2>
            <p>I studied Computer Science for a while before deciding that I wanted a career with more creativity involved, but that said I have experience in many different technologies.</p>

            <ul>
                <li>Python
                    <ul>
                        <li>Data Science libraries like Pandas, numpy, "&amp;" matplotlib</li>
                        <li>Web Scraping with BeautifulSoup</li>
                        <li>Jupyter notebooks for data visualization</li>
                        <li>Automating Workflows</li>
                        <li>Trying out deep learning libraries like Tensorflow "&amp;" Pytorch (to be clear, this one's a curiosity, but I'm no expert)</li>
                    </ul>
                </li>
                <li>Web Technologies
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>Node.js</li>
                        <li>Hosting "&amp;" Administrating</li>
                        <li><i>Some</i> work with Databases</li>
                    </ul>
                </li>
                <li>C/C++</li>
                <li>Go</li>
                <li>Haskell
                    <ul>
                        <li>I'm not a Haskell expert, but of all the items on this list, Haskell was one of the most rewarding things to learn, just because of the completely different way of thinking about and approaching problems.</li>
                    </ul>
                </li>
                <li>LATEX Document Creation "&amp;" Formatting</li>
                <li>General UNIX "&amp;" Shell Skills
                    <ul>
                        <li>Competent Terminal User</li>
                        <li>Compiling "&amp;" Debugging Programs</li>
                        <li>Scripting "&amp;" Automation</li>
                        <li>Version Control using git and github</li>
                    </ul>
                </li>
                <li>Electronics "&amp;" Systems Programming
                    <ul>
                        <li>Arduino</li>
                        <li>Analog Synthesizers</li>
                    </ul>
                </li>
                <li>Java</li>
                <li>Computer Science Theory
                    <ul>
                        <li>Algorithmic Complexity</li>
                        <li>Human-Computer Interaction</li>
                        <li>Common Paradigms and Philosophies
                            <ul>
                                <li>Object Oriented</li>
                                <li>Functional</li>
                                <li>UNIX Design Philosophy</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>

            Since starting the CTD major, I've also learned a lot of digital (and analog) creation and design tools that have helped broaden my skills. Since the CTD major is relatively new and often merits a little explanation (the class names are also somewhat vague, but self-explanatory once you know what they're about), I thought I'd go through some of the classes and what I learned from them.

            <h3>Image</h3>

            <p>This class started by teaching us photography and how to use the common tools of the trade, like Photoshop "&amp;" Lightroom, before moving onto more advanced techniques, and then shooting video and editing in After Effects.</p>

            <h3>Form</h3>

            <p>This class was about designing with three dimensions in mind. So we started with 3d modeling and rendering, and progressed towards possible applications, like game design, 3d modeling, various fabrication techniques, and product design.</p>

            <h3>Sound</h3>

            <p>This was a class about digital sound creation and design. We worked in Logic for a lot of it, and created small songs and some other experimental sounds (one that comes to mind is creating our own background noise to a video game clip, or recording an audio essay). We learned a lot of the common tasks of audio creation; mixing, leveling, normalizing, panning, etc. along with some more creative techniques, like using synthesizers, MIDI instruments, drum machines and others(this part was particularly fun to me).</p>

            <h3>Interactive Sound</h3>

            <p>This class was something of a variant/further learning for the sound class, but with a focus on interactivity. We worked a lot with Max MSP, which is a visual programming language designed with audio in mind (also is built into Ableton and can provide a lot of extra functionality). We also worked with integrating video, using electronics through Arduino, using OSC to allow people to perform remotely, using web libraries to create public interfaces, and generally experimenting with different ways to create sound in novel ways.</p>

            <h3>Web</h3>

            <p>This was a class all about web development. I really enjoyed learning about this, and this class is the reason you can read this right now! This class mainly covered the basics, but I also took another class in this same vein, called <b>Creative Web Design</b>, that was essentially taking my basic skills and adding new tools and techniques to create better websites (with a creative focus, of course)</p>

            <h3>Object</h3>

            <p>This class is perhaps the <b>most</b> opaquely named on the list. To be clear this is a class about physical computing i.e. using micro-controllers, sensors, and various electronics to make an object that does something cool. I enjoyed this class quite a bit and made lots of fun projects creating custom circuits and coding an Arduino for them.</p>

            <h3>Text</h3>

            <p>This was absolutely a sleeper hit of a class for me. My understanding of text in graphic design has been improved in a way that I would not have thought possible before this class. It covers the history of typography, the actual anatomy of different typefaces, different reasons to use different fonts, sizes, layouts, colors, etc. of typefaces, as well as being a workout for my graphic design skills. This class relied heavily on Adobe Illustrator and InDesign skills.</p>


            <h3>Color</h3>

            <p>This was a class entirely devoted to color! It was surprisingly comprehensive too, I would say. It started with the physics of color (light "&amp;" energy interacting with matter), then the chemistry of color (roles of different molecules and chemical structures in creating color), then biology (how the eye perceives color), then psychology (how colors affect mood/color theory), then compositional properties of color (how people combine color to varying effects across art and design), and finally color in art (experimenting with many different mediums and styles of art) </p>



            <h2>Personal</h2>

            <p>I like to paint as a hobby, and you can a gallery of my paintings <a href="art.html">here</a>.</p>

            <p>I'm a novice at electronics, but find them very fun. I've made a few projects with Arduinos and have made some basic synthesizers.</p>

            <p>I also play the banjo and guitar, and listen to a lot of music. If you're curious, you can find what I've been listening to <a href="https://www.last.fm/user/dandrewbarlow69">here</a>.</p>

        </Layout>
    )
}
