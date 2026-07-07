import React from 'react'

export default function ImageCard(props) {
  const size = props.size ?? 4;
  const fullscreen = !!props.fullscreen;
  const isLink = !!props.link;

  const img = <img src={props.image} alt="" />;
  const figureClass = `image${fullscreen ? ' is-fullwidth' : ''}`;

  return (
    <div className={`column is-${size}`}>
      <div className="card">

        <div className="card-image">
          {isLink
            ? <a className={figureClass} href={props.link}>{img}</a>
            : <figure className={figureClass}>{img}</figure>}
        </div>

        {props.content && (
          <div className="card-content"> {props.content} </div>
        )}

        {props.footer && (
          <div className="card-footer">
            <div className="card-footer-item"> {props.footer} </div>
          </div>
        )}

      </div>
    </div>
  )
}
