import React, { useState } from "react"
import { Link } from "gatsby"
import axios from "axios"
// import handleSubmit from "../utils/handle-submit"
// import useForm from "../utils/use-form"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
    sent: false,
    buttonText: "Submit",
    err: ""
  })

  const handleChange = e => {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value
    })
  }

  const formSubmit = e => {
    e.preventDefault()

    setData({
      ...data,
      buttonText: "Sending..."
    })

    axios
      .post("https://compassionate-jepsen-db9a2b.netlify.app/api/sendmail", data)
      .then(res => {
        if (res.data.result !== "success") {
          setData({
            ...data,
            buttonText: "Failed to send",
            sent: false,
            err: "fail"
          })
          setTimeout(() => resetForm(), 6000)
        } else {
          setData({
            ...data,
            sent: true,
            buttonText: "Sent",
            err: "success"
          })
          setTimeout(() => resetForm(), 6000)
        }
      })
      .catch(err => {
        console.log(err.response.status)
        console.log(JSON.stringify(err))
        setData({
          ...data,
          buttonText: "Failed to send",
          err: "fail"
        })
      })
  }

  const resetForm = () => {
    setData({
      name: "",
      email: "",
      message: "",
      sent: false,
      buttonText: "Submit",
      err: ""
    })
  }

  // const { values, updateValue } = useForm({
  //   name: "",
  //   email: "",
  //   message: ""
  // })

  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Contact page</h1>
      <p>Fill out this form</p>

      {/*       <form onSubmit={event => handleSubmit(event, values)}> */}

      <form>
        <p>
          <label htmlFor="name">
            Name
            <input
              type="text"
              name="name"
              id="name"
              value={data.name}
              onChange={handleChange}
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
              value={data.email}
              onChange={handleChange}
            />
          </label>
        </p>{" "}
        <p>
          <label htmlFor="message">
            Message
            <textarea
              name="message"
              id="message"
              value={data.message}
              onChange={handleChange}
            />
          </label>
        </p>{" "}
        <p>
          <input type="submit" value={data.buttonText} onClick={formSubmit} />
        </p>
      </form>

      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default ContactPage
