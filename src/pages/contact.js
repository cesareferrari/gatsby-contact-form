import React from "react"
import { Link } from "gatsby"
import handleSubmit from "../utils/handle-submit"
import useForm from "../utils/use-form"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => {
  const { values, updateValue } = useForm({
    name: "",
    email: "",
    message: ""
  })

  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Contact page</h1>
      <p>Fill out this form</p>

      <form onSubmit={event => handleSubmit(event, values)}>
        <p>
          <label htmlFor="name">
            Name
            <input
              type="text"
              name="name"
              id="name"
              value={values.name}
              onChange={updateValue}
            />
          </label>
        </p>
        <p>
          <label htmlFor="email">
            Email
            <input
              type="text"
              name="email"
              id="email"
              value={values.email}
              onChange={updateValue}
            />
          </label>
        </p>{" "}
        <p>
          <label htmlFor="message">
            Message
            <textarea
              name="message"
              id="message"
              value={values.message}
              onChange={updateValue}
            />
          </label>
        </p>{" "}
        <p>
          <input type="submit" value="Submit" />
        </p>
      </form>

      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default ContactPage
