import React, { Component } from 'react'
import Layout from '../components/layout'
import fourOhFour from '../images/404/404.jpg'

export default class NotFoundPage extends Component {
  render() {
    return (
      <Layout title="404">
        <h2>404: Page not found</h2>
        <div className="linkGallery">
          <figure>
            <img src={fourOhFour} alt="The page does not exist" />
            <figcaption>
              Sorry, but it looks like this is not a page.
            </figcaption>
          </figure>
        </div>
      </Layout>
    )
  }
}
