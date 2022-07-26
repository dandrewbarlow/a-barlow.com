import React from 'react'

import ImageCard from '../../components/ImageCard'
import { Columns } from 'react-bulma-components'

import roadhouse from '../../img/3d/roadhouse.jpg'
import donut from '../../img/3d/render-2.jpg'
import city1 from '../../img/3d/render-01.jpg'
import city3 from '../../img/3d/render-08.jpg'

export default function ThreeD() {
  return (
    <Columns centered={true} vCentered={true}>
      <ImageCard 
        image={roadhouse} 
        content="Roadhouse Sign from Twin Peaks" 
        footer="Blender"
      />

      <ImageCard 
      image={city1} 
      content={"Procedural City"}
      footer="Python, Blender"
      />


      <ImageCard
      image={city3}
      content="Procedural City"
      footer="Python, Blender"
      />

      <ImageCard 
      image={donut} 
      content={"The obligatory Blender Donut"}
      footer="Blender"
      />

    </Columns>
  )
}