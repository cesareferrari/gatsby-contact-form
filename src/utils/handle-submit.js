import axios from "axios"

const handleSubmit = (event, email) => {
  event.preventDefault()
  console.log(`The email is: ${email}`)

  axios.post(
    "/.netlify/functions/sendEmail",
    { email }
  ).then((res) => {
    console.log(res)
  })
}

export default handleSubmit
