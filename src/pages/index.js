import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home page</h1>
    <p>This site is a test for submitting a contact form with Gatsby and Netlify serverless functions.</p>

    <Link to="/contact/">View the Contact Form &rarr;</Link> 

  </Layout>
)

export default IndexPage
