import React from 'react'
import { Columns } from 'react-bulma-components'

import ImageCard from '../../components/ImageCard'

import aimerTravel from '../../img/web/aimer-travel.png'
import aBarlow from '../../img/web/a-barlow.jpg'
import stileHaus from '../../img/web/stileHause.png'
import capstone from '../../img/web/emitting.gif'


export default function Web() {
  return (
    <Columns centered={true} vCentered={true}>
        <ImageCard 
        image={aBarlow} 
        content="This webpage!" 
        footer="React, Bulma CSS Framework, hosting, administration, analytics"
        link="https://a-barlow.com"
        />

        <ImageCard 
        image={aimerTravel} 
        content="Aimer Travel website" 
        footer="WordPress, Web Hosting, SEO, Spam Prevention" 
        link="https://www.aimertravel.com/"
        />

        <ImageCard image={stileHaus} 
        content="S'tile Haus Design website. Work mostly focused on site design and image editing." 
        footer="GoDaddy, Photoshop" 
        link="https://stilehausdesign.com/"
        />

        <ImageCard 
        image={capstone} 
        content="Emitting CU promotional website. Website with particle effects and information about my Capstone project. Written from scratch, mobile friendly."
        footer="p5.js, JQuery"
        link="https://emittingcu.com/"
        />

    </Columns>
  )
}
