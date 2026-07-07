import React from 'react'
import { Card, Columns, Container, Heading, Hero, Image } from 'react-bulma-components'
import ImageCard from '../../components/ImageCard'

import eclipse from '../../img/creative/eclipse.png'
import algae from '../../img/creative/algae.jpg'
import lissajous from '../../img/creative/lissajous.png'
import beehive from '../../img/creative/beehive.jpg'
import schotter from '../../img/creative/schotter.png'
import amiga from '../../img/creative/amiga.jpg'
import noiseWave from '../../img/creative/noise-wave.png'
import blueWaves from '../../img/creative/blue-waves.png'
import fungalGlitch from '../../img/creative/fungal-glitch.jpg'
import fungus from '../../img/creative/fungus.png'
import fungus2  from '../../img/creative/fungus2.png'
import ocean from '../../img/creative/ocean.png'
import dreamLandscape from '../../img/creative/dream-landscape.png'

import capstone from '../../img/creative/capstone.jpg'
import capstone2 from '../../img/creative/capstone2.JPG'
import capstone3 from '../../img/creative/capstone3.jpg'

let iframeStyle = {
    display: 'block',
    margin: 'auto',
    maxWidth: '100%',
}

export default function Creative() {
  return (
    <>
    <Columns centered={true} vCentered={true}>

        <ImageCard 
        image={eclipse}
        content="Eclipse"
        footer="Processing"
        />

        <ImageCard 
        image={schotter}
        content={<p>Colorful version of George Nees' <em>Schotter</em></p>}
        footer="p5.js"
        />

        <ImageCard 
        image={lissajous}
        content="Lissajous pattern"
        footer="Unity"
        />

        <ImageCard 
        image={amiga}
        content="Waveform Series"
        footer="Unity"
        />

        <ImageCard 
        image={noiseWave}
        content="Waveform Series"
        footer="Unity"
        />

        <ImageCard 
        image={blueWaves}
        content="Waveform Series"
        footer="Unity"
        />

        <ImageCard 
        image={fungus}
        content="Fungal simulation"
        footer="Compute Shaders, Unity"
        />
        
        <ImageCard 
        image={fungus2}
        content="Fungal simulation"
        footer="Compute Shaders, Unity"
        />

        <ImageCard 
        image={fungalGlitch}
        content="Fungal simulation image strategically corrupted"
        footer="Compute Shaders, Unity, Go"
        />

        <ImageCard 
        image={ocean}
        content="Ocean Scene"
        footer="VQGAN-CLIP - text to image ML"
        />

        <ImageCard 
        image={dreamLandscape}
        content="Dream Landscape"
        footer="VQGAN-CLIP - text to image ML"
        />

        <ImageCard 
        image={beehive}
        content="Beehive"
        footer="Processing"
        />

        <ImageCard 
        image={algae}
        size={6}
        content="Photograph of algae underwater whose color channels I shifted with Processing"
        footer="Processing"
        />

    </Columns>
    
    <Hero>
        <Hero.Body>
            <Container>
                <Heading>
                    Emitting
                </Heading>

                <Heading subtitle size={5}>
                Emitting is my Senior year Capstone project. It is an
                interactive sculptural installation using projection mapping and
                reacting to the audience to express and explore feelings of
                loneliness. Presented in CU Boulder's Black Box Experimental
                Theater. Collaboration with Phu Le, Madi Heath, and Sofi
                Ozambela.
                </Heading>

                <Heading subtitle size={5}>
                    My responsibilities for this project were on the interactive
                    elements, which included the interactive generative effects
                    projected onto the sculptures, the projection mapping of the
                    sculptures themselves, processing input data from Kinects to
                    detect audience members, and finally sending that data back
                    to the program rendering the visuals.
                </Heading>

                <Heading subtitle size={5}>
                    Technologies Used: TouchDesigner, Processing, Kinect, SimpleOpenNI, OSC, MaxMSP
                </Heading>

            </Container>
        </Hero.Body>
    </Hero>


    <Columns centered={true} vCentered={true}>

        <Columns.Column size={8}>
            <figure className="image">
                <iframe 
                style={ iframeStyle } 
                title="EmittingCU"
                src="https://player.vimeo.com/video/654352130?h=25147569ca" 
                width="640" height="360"
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture" 
                allowFullScreen />
            </figure>
        </Columns.Column>

        <ImageCard
        image={capstone}
        size={8}
        fullscreen={true}
        />

        <ImageCard
        image={capstone2}
        size={8}
        fullscreen={true}
        />

        <ImageCard
        image={capstone3}
        size={8}
        fullscreen={true}
        />
    </Columns>

    </>
  )
}
