import axios from "axios"

const handleSubmit = (event, { name, email, message }) => {
  event.preventDefault()
  console.log(`The name is: ${name}`)
  console.log(`The email is: ${email}`)
  console.log(`The message is: ${message}`)

  axios
    .post("/.netlify/functions/sendEmail", { name, email, message })
    .then(res => {
      console.log(`Response from axios:`, res)
    })
}

export default handleSubmit
