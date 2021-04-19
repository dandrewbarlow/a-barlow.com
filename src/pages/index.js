import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <h1>Home</h1>

    <p>
      Welcome to my web portfolio. Feel free to look around at my work and learn a little bit more about me.
    </p>
    
  </Layout>
)

export default IndexPage
