import React from 'react'
import { Card, Columns } from 'react-bulma-components';

export default function ImageCard(props) {
  let content;
  let footer;
  let size;
  let fullscreen = false;
  let link = false;

  if (props.content) {
    content = <Card.Content> {props.content} </Card.Content>;
  }

  if (props.footer) {
    footer = <Card.Footer> <Card.Footer.Item> {props.footer} </Card.Footer.Item> </Card.Footer>;
  }

  if (props.size) {
    size = props.size;
  }
  else {
    size = 4;
  }

  if (props.fullscreen) {
    fullscreen = true;
  }

  if (props.link) {
    link = true;
  }

  return (
    <Columns.Column size={size}>
      <Card>

        <Card.Image 
        src={props.image} 
        fullwidth={fullscreen}
        renderAs={link ? 'a' : 'figure'}
        href={props.link}
        />

        {content}

        {footer}

      </Card>
    </Columns.Column>
  )
}
