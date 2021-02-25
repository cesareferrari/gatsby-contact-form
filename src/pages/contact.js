import React, { useState } from "react"
import { Link } from "gatsby"
import handleSubmit from "../utils/handle-submit"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => {
  const [email, setEmail] = useState("")
  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Contact page</h1>
      <p>Fill out this form</p>

      <form onSubmit={(event) => handleSubmit(event, email)}>
        <label htmlFor="email">
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <input type="submit" value="Submit" />
      </form>

      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default ContactPage
